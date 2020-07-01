using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Infrastructure.EF.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System.IO;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using Infrastructure.EF.SQL;
using System.Data.Common;
using System.Data;
using Domain.ViewModels;
using System.Drawing;
using AutoMapper;

namespace Service
{
    public class ReportService : IReportService
    {
        private readonly IGenericRepository<Transportation> _transportationRepo;
        private readonly IGenericRepository<Company> _companyRepo;
        private readonly IGenericRepository<Distance> _distanceRepo;
        private readonly IGenericRepository<Car> _carRepo;
        private readonly IMapper _mapper;

        private string _webRootPath;
        private string _contentRootPath;


        public ReportService(IGenericRepository<Transportation> transportationRepo, IGenericRepository<Company> companyRepo,
            IGenericRepository<Distance> distanceRepo, IGenericRepository<Car> carRepo, IHostingEnvironment env, IMapper mapper)
        {
            _transportationRepo = transportationRepo;
            _companyRepo = companyRepo;
            _webRootPath = env.WebRootPath;
            _contentRootPath = env.ContentRootPath;
            _distanceRepo = distanceRepo;
            _carRepo = carRepo;
            _mapper = mapper;
        }

        public async Task<ResponseResult> BangKe(DateTime date)
        {
            var result = new ResponseResult();
            try
            {
                //var query = await _transportationRepo.Where(e => e.TransportDate.Month == date.Month
                //                                                        && e.TransportDate.Year == date.Year
                //                                                        && e.Status == CommonConstants.Status.Active);
                //var transportations = query.OrderBy(e => e.DocumentNumber).ToList();

                #region Call StoreProcedure
                var dbConnectionSQL = DbConnectionSQL.Instance();
                var dbCommand = dbConnectionSQL.GetCommand(dbConnectionSQL.GetConnection(), "Bangke", CommandType.StoredProcedure);
                var parameters = new List<DbParameter>();

                var dateParam = dbCommand.CreateParameter();
                dateParam.DbType = DbType.Date;
                dateParam.ParameterName = "Date";
                dateParam.Value = date;
                parameters.Add(dateParam);

                var dataTable = dbConnectionSQL.ExecuteTable("Bangke", parameters);
                var transportations = dbConnectionSQL.ConvertDataTableToList<ExportReportViewModel>(dataTable);

                #endregion
                var title = $"BẢNG KÊ VẬN CHUYỂN THÁNG {date.Month}";
                int days = DateTime.DaysInMonth(date.Year, date.Month);
                var text = $"TOTAL: TỪ NGÀY 1/{date.Month} ĐẾN NGÀY {days}/{date.Month}";



                var filePath = $"{_webRootPath}\\ReportTemplate\\Bangke.xlsx";
                using (Stream stream = File.OpenRead(filePath))
                {
                    using (var excelPackage = new ExcelPackage(stream))
                    {
                        var workSheets = excelPackage.Workbook.Worksheets;
                        var mainSheet = workSheets.First();
                        FillWorkSheet(mainSheet, transportations, title, text, true);
                        //excelPackage.Save();

                        List<DriverInfo> driverInfos = GetDriverInfo();

                        #region Export driver salary
                        List<ExportDriverSalaryViewModel> driverSalaries = BuildDriverSalary(driverInfos, transportations);
                        var templateDriverSalary = workSheets[2];
                        FillWorkSheetDriverSalary(templateDriverSalary, driverSalaries);
                        #endregion

                        #region Export reports by Car Number
                        var transportationsGroupbyCarNumber = transportations.GroupBy(t => t.CarNumber, (key, trans) => new { CarNumber = key, Transportations = trans.ToList(), DriverHeader = GetDriverForHeaderColumn(driverInfos, trans.ToList()) });
                        var templateSheetCarNumber = workSheets[1];

                        foreach (var item in transportationsGroupbyCarNumber)
                        {
                            var sheetCarNumber = workSheets.Add(item.CarNumber, templateSheetCarNumber);
                            FillWorkSheet(sheetCarNumber, item.Transportations, title, text, false, item.DriverHeader);
                        }
                        workSheets.Delete(templateSheetCarNumber);
                        mainSheet.Select();
                        #endregion

                        var returnStream = new MemoryStream();
                        excelPackage.SaveAs(returnStream);
                        returnStream.Position = 0;
                        result.Data = returnStream;
                    }
                }
                ResponseResultHelper.MakeSuccess(result);
            }
            catch (Exception ex)
            {

                ResponseResultHelper.MakeException(result, ex);

            }
            return result;
        }

        public async Task<ResponseResult> CheckBangKe(DateTime date)
        {
            var result = new ResponseResult();
            try
            {
                var transportations = await _transportationRepo.Where(e => e.TransportDate.Month == date.Month
                                                                          && e.TransportDate.Year == date.Year
                                                                          && e.Status == CommonConstants.Status.Active);
                transportations = transportations.OrderBy(e => e.TransportDate);
                if (transportations.Count() > 0)
                {
                    ResponseResultHelper.MakeSuccess(result);
                }
                else
                {
                    ResponseResultHelper.MakeFailure(result, $"Tháng {date.Month}/{date.Year} không có dữ liệu");
                }

            }
            catch (Exception ex)
            {
                ResponseResultHelper.MakeException(result, ex);
            }
            return result;

        }

        #region Private Method

        private void FillWorkSheet(ExcelWorksheet worksheet, List<ExportReportViewModel> transportations, string title, string text, bool isMainSheet, List<ExportDriverSalaryBySheet> driverHeader = null)
        {
            var databaseCount = transportations.Count();
            worksheet.InsertRow(5, databaseCount);
            var sumMoney = transportations.Sum(tr => tr.Money);
            var vat = (sumMoney / 100) * (isMainSheet ? 10 : 5);
            var totalMoney = sumMoney + (isMainSheet ? vat : -vat);
            var startRow = 5;

            worksheet.Cells[3, 1].Value = text;

            worksheet.Cells[1, 1].Value = title;

            worksheet.Cells[startRow + databaseCount, 1].Value = text;
            worksheet.Cells[startRow + databaseCount, 7].Value = sumMoney;


            worksheet.Cells[startRow + databaseCount + 1, 7].Value = vat;
            worksheet.Cells[startRow + databaseCount + 2, 7].Value = totalMoney;

            #region Build Driver Header
            if (!isMainSheet && driverHeader != null)
            {
                int driverHeaderStart = 9;
                foreach (var item in driverHeader)
                {
                    worksheet.Cells[3, driverHeaderStart].Value = item.DriverType;
                    worksheet.Cells[4, driverHeaderStart].Value = item.DriverName.ToUpper();

                    item.RowIndex = 4;
                    item.ColumnIndex = driverHeaderStart;

                    driverHeaderStart += 1;
                }
            }
            #endregion

            foreach (var transportation in transportations)
            {
                #region Old Code
                //_transportationRepo.EntryReference(transportation, e => e.Car);
                //_carRepo.EntryReference(transportation.Car, e => e.Capacity);

                //var companyId = JsonConvert.DeserializeObject<List<int>>(transportation.CompanyIds).Last();
                //var company = await _companyRepo.GetById(companyId);
                //if (company != null)
                //{
                //    var distance = (await _distanceRepo.Where(e => DistanceCondition(e, company.Distance))).First();


                //    worksheet.Cells[startRow, 1].Value = transportation.TransportDate.ToString("dd'/'MM'/'yyyy");
                //    worksheet.Cells[startRow, 2].Value = transportation.Car.CarNumber;

                //    worksheet.Cells[startRow, 3].Value = company.Name;
                //    worksheet.Cells[startRow, 4].Value = company.Distance;
                //    worksheet.Cells[startRow, 5].Value = distance.Description;

                //    worksheet.Cells[startRow, 6].Value = transportation.Car.Capacity.Type;
                //    worksheet.Cells[startRow, 7].Value = transportation.Money;
                //    worksheet.Cells[startRow, 8].Value = transportation.Report;

                //    startRow += 1;
                //}
                #endregion

                worksheet.Cells[startRow, 1].Value = transportation.TransportDate;
                worksheet.Cells[startRow, 2].Value = transportation.CarNumber;
                worksheet.Cells[startRow, 3].Value = transportation.CompanyName;
                worksheet.Cells[startRow, 4].Value = transportation.CompanyDistance;
                worksheet.Cells[startRow, 5].Value = transportation.DistanceDescription;
                worksheet.Cells[startRow, 6].Value = transportation.CapacityType;
                worksheet.Cells[startRow, 7].Value = transportation.Money;

                if (!string.IsNullOrEmpty(transportation.Report) && !string.IsNullOrEmpty(transportation.Note))
                {
                    worksheet.Cells[startRow, 8].Value = $"{transportation.Report}, {transportation.Note}";
                }
                else if (!string.IsNullOrEmpty(transportation.Report))
                {
                    worksheet.Cells[startRow, 8].Value = transportation.Report;
                }
                else if (!string.IsNullOrEmpty(transportation.Note))
                {
                    worksheet.Cells[startRow, 8].Value = transportation.Note;
                }

                if (!isMainSheet)
                {
                    foreach (var item in JsonConvert.DeserializeObject<List<DriverJson>>(transportation.DriverJson))
                    {
                        var driverHeaderItem = driverHeader.FirstOrDefault(d => d.DriverId == item.Id);
                        if (driverHeaderItem != null)
                        {
                            long money = item.Money.HasValue ? item.Money.Value : 0;
                            ExcelRange cell = worksheet.Cells[startRow, driverHeaderItem.ColumnIndex];
                            cell.Value = money;
                            if ((item.IsDriverPrimary && driverHeaderItem.DriverTypeId == 2) || (!item.IsDriverPrimary && driverHeaderItem.DriverTypeId == 1))
                            {
                                cell.Style.Fill.PatternType = ExcelFillStyle.Solid;
                                cell.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(255, 230, 153));
                            }
                            driverHeaderItem.TotalMoney += money;
                        }
                    }
                }

                startRow += 1;
            }

            #region Build Driver Footer
            if (!isMainSheet && driverHeader != null)
            {
                foreach (var item in driverHeader)
                {
                    ExcelRange cell = worksheet.Cells[5 + databaseCount, item.ColumnIndex];
                    cell.Value = item.TotalMoney;
                    Bold(cell);
                }
            }
            #endregion

            #region Format Driver
            if (!isMainSheet && driverHeader != null)
            {
                int firstDriverColIndex = driverHeader.First().ColumnIndex;
                int lastDriverColIndex = driverHeader.Last().ColumnIndex;
                ExcelRange driverHeaderRange = worksheet.Cells[3, firstDriverColIndex, 4, lastDriverColIndex];
                AlignCenter(driverHeaderRange);
                Bold(driverHeaderRange);

                ExcelRange range = worksheet.Cells[3, firstDriverColIndex, 7 + databaseCount, lastDriverColIndex];
                range.Style.Font.Size = 12;
                range.AutoFitColumns();
                BoderCell(range);
                MoneyFormat(range);
            }
            #endregion

            BoderCell(worksheet.Cells[isMainSheet ? $"A5:H{startRow - 1}" : $"A5:J{startRow - 1}"]);
            AlignCenter(worksheet.Cells[$"E5:F{startRow - 1}"]);
        }

        private void FillWorkSheetDriverSalary(ExcelWorksheet worksheet, List<ExportDriverSalaryViewModel> driverSalaries)
        {
            long total = 0;
            int start = 4;
            foreach (var driver in driverSalaries)
            {
                long subTotal = 0;

                #region Header
                ExcelRange driverNameRange = worksheet.Cells[$"A{start}:F{start}"];
                driverNameRange.Merge = true;
                driverNameRange.Value = $"{driver.DriverType} - {driver.DriverName.ToUpper()}";
                Bold(driverNameRange);
                driverNameRange.Style.Fill.PatternType = ExcelFillStyle.Solid;
                driverNameRange.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(146, 208, 80));
                start += 1;

                worksheet.Cells[start, 1].Value = "STT";
                worksheet.Cells[start, 2].Value = "NGÀY";
                worksheet.Cells[start, 3].Value = "SỐ XE";
                worksheet.Cells[start, 4].Value = "LOẠI XE";
                worksheet.Cells[start, 5].Value = "KHÁCH HÀNG";
                worksheet.Cells[start, 6].Value = "TIỀN CÔNG";
                Bold(worksheet.Cells[start, 1, start, 6]);
                AlignCenter(worksheet.Cells[start, 1, start, 6]);
                start += 1;
                #endregion

                #region Body
                int index = 1;
                foreach (var transportation in driver.Transportations)
                {
                    worksheet.Cells[start, 1].Value = index;
                    worksheet.Cells[start, 2].Value = transportation.TransportDate;
                    worksheet.Cells[start, 3].Value = transportation.CarNumber;
                    worksheet.Cells[start, 4].Value = transportation.CapacityType;
                    worksheet.Cells[start, 5].Value = transportation.CompanyName;
                    worksheet.Cells[start, 6].Value = transportation.Salary;

                    if ((transportation.IsDriverPrimary && driver.DriverTypeId == 2) || (!transportation.IsDriverPrimary && driver.DriverTypeId == 1))
                    {
                        worksheet.Cells[start, 6].Style.Fill.PatternType = ExcelFillStyle.Solid;
                        worksheet.Cells[start, 6].Style.Fill.BackgroundColor.SetColor(Color.FromArgb(255, 230, 153));
                    }

                    index += 1;
                    start += 1;
                    subTotal += transportation.Salary;
                }
                #endregion

                #region Footer
                ExcelRange footer = worksheet.Cells[start, 1, start, 5];
                footer.Merge = true;
                footer.Value = "TÔNG CỘNG";
                AlignRight(footer);
                worksheet.Cells[start, 6].Value = subTotal;
                Bold(worksheet.Cells[start, 1, start, 6]);
                start += 1;
                #endregion

                #region Seperator
                worksheet.Cells[start, 1, start, 6].Merge = true;
                start += 1;
                #endregion

                total += subTotal;
            }

            #region Format
            worksheet.Cells[2, 1].Value = $"TỔNG CỘNG: {total.ToString("N0")} VND";
            AlignLeft(worksheet.Cells[2, 1]);
            Bold(worksheet.Cells[2, 1]);
            ExcelRange range = worksheet.Cells[4, 1, start - 2, 6];
            range.AutoFitColumns();
            BoderCell(range);
            MoneyFormat(range);
            worksheet.Column(1).Width = 4;

            #region Remove last seperator
            worksheet.Cells[start - 1, 1, start-1, 6].Merge = false;
            #endregion

            #endregion
        }

        #region Excel format
        private void BoderCell(ExcelRange cell)
        {
            cell.Style.Border.Top.Style = ExcelBorderStyle.Thin;
            cell.Style.Border.Left.Style = ExcelBorderStyle.Thin;
            cell.Style.Border.Right.Style = ExcelBorderStyle.Thin;
            cell.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            cell.Style.Font.Size = 12;
        }

        private void AlignCenter(ExcelRange cell)
        {
            cell.Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
        }
        private void AlignLeft(ExcelRange cell)
        {
            cell.Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
        }
        private void AlignRight(ExcelRange cell)
        {
            cell.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
        }

        private void Bold(ExcelRange cell)
        {
            cell.Style.Font.Bold = true;
        }
        private void MoneyFormat(ExcelRange cell)
        {
            cell.Style.Numberformat.Format = "#,##0";
        }
        #endregion

        private bool DistanceCondition(Distance entity, double distance)
        {
            var arr = entity.Description.Split('-');
            var min = Convert.ToInt32(arr[0]);
            var max = Convert.ToInt32(arr[1]);

            return min <= distance && distance <= max && entity.Status == CommonConstants.Status.Active;
        }
        private List<DriverInfo> GetDriverInfo()
        {
            var result = new List<DriverInfo>();
            var dbConnectionSQL = DbConnectionSQL.Instance();
            string sql = @" select D.Id as DriverId, D.Name as DriverName, DT.Type as DriverType, DT.Id as DriverTypeId from driver D with (nolock)
                            inner join DriverType DT with (nolock)
                            on D.DriverTypeId = DT.Id
                            where D.Status != 2";
            var dataTable = dbConnectionSQL.ExecuteRawSql(sql);
            result = dbConnectionSQL.ConvertDataTableToList<DriverInfo>(dataTable);
            return result;
        }
        private List<ExportDriverSalaryViewModel> BuildDriverSalary(List<DriverInfo> driverInfos, List<ExportReportViewModel> trans)
        {
            var result = _mapper.Map<List<DriverInfo>, List<ExportDriverSalaryViewModel>>(driverInfos);
            foreach (var item in trans)
            {
                var drivers = JsonConvert.DeserializeObject<List<DriverJson>>(item.DriverJson);
                foreach (var driver in drivers)
                {
                    var driverSalary = result.FirstOrDefault(e => e.DriverId == driver.Id);
                    if (driverSalary != null)
                    {
                        var transIncludeDriverSalary = _mapper.Map<ExportReportViewModel, TransportationIncludeDriverSalary>(item);
                        transIncludeDriverSalary.IsDriverPrimary = driver.IsDriverPrimary;
                        transIncludeDriverSalary.Salary = driver.Money.HasValue ? driver.Money.Value : 0;

                        driverSalary.Transportations.Add(transIncludeDriverSalary);
                    }
                }
            }
            result = result.Where(d => d.Transportations.Any()).OrderBy(d => d.DriverTypeId).ThenBy(d => d.DriverId).ToList();
            return result;
        }
        private List<ExportDriverSalaryBySheet> GetDriverForHeaderColumn(List<DriverInfo> driverInfos, List<ExportReportViewModel> trans)
        {
            var result = _mapper.Map<List<DriverInfo>, List<ExportDriverSalaryBySheet>>(driverInfos);

            foreach (var item in trans)
            {
                var drivers = JsonConvert.DeserializeObject<List<DriverJson>>(item.DriverJson);
                foreach (var driver in drivers)
                {
                    var driverSalary = result.FirstOrDefault(e => e.DriverId == driver.Id);
                    if (driverSalary != null && !driverSalary.IsCheck)
                    {
                        driverSalary.IsCheck = true;
                    }
                }
            }
            result = result.Where(d => d.IsCheck).OrderBy(d => d.DriverTypeId).ThenBy(d => d.DriverId).ToList();
            return result;
        }
        #endregion

    }
}
