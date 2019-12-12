﻿using Domain.Constants;
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

namespace Service
{
    public class ReportService : IReportService
    {
        private readonly IGenericRepository<Transportation> _transportationRepo;
        private readonly IGenericRepository<Company> _companyRepo;
        private readonly IGenericRepository<Distance> _distanceRepo;
        private readonly IGenericRepository<Car> _carRepo;


        private string _webRootPath;
        private string _contentRootPath;


        public ReportService(IGenericRepository<Transportation> transportationRepo, IGenericRepository<Company> companyRepo,
            IGenericRepository<Distance> distanceRepo, IGenericRepository<Car> carRepo, IHostingEnvironment env)
        {
            _transportationRepo = transportationRepo;
            _companyRepo = companyRepo;
            _webRootPath = env.WebRootPath;
            _contentRootPath = env.ContentRootPath;
            _distanceRepo = distanceRepo;
            _carRepo = carRepo;
        }

        public async Task<ResponseResult> BangKe(DateTime date)
        {
            var result = new ResponseResult();
            try
            {
                var query = await _transportationRepo.Where(e => e.TransportDate.Month == date.Month
                                                                        && e.TransportDate.Year == date.Year
                                                                        && e.Status == CommonConstants.Status.Active);
                var transportations = query.OrderBy(e => e.DocumentNumber).ToList();

                var filePath = $"{_webRootPath}\\ReportTemplate\\Bangke.xlsx";
                using (Stream stream = File.OpenRead(filePath))
                {
                    using (var excelPackage = new ExcelPackage(stream))
                    {
                        var workSheets = excelPackage.Workbook.Worksheets;
                        var worksheet = workSheets.First();
                        var databaseCount = transportations.Count();
                        worksheet.InsertRow(5, databaseCount);
                        var title = $"BẢNG KÊ VẬN CHUYỂN THÁNG {date.Month}";
                        var sumMoney = transportations.Sum(tr => tr.Money);
                        var vat = (sumMoney / 100) * 10;
                        var totalMoney = sumMoney + vat;
                        var startRow = 5;
                        int days = DateTime.DaysInMonth(date.Year, date.Month);
                        var text = $"TOTAL: TỪ NGÀY 1/{date.Month} ĐẾN NGÀY {days}/{date.Month}";

                        worksheet.Cells[3, 1].Value = text;

                        worksheet.Cells[1, 1].Value = title;

                        worksheet.Cells[startRow + databaseCount, 1].Value = text;
                        worksheet.Cells[startRow + databaseCount, 7].Value = sumMoney;


                        worksheet.Cells[startRow + databaseCount + 1, 7].Value = vat;
                        worksheet.Cells[startRow + databaseCount + 2, 7].Value = totalMoney;

                        foreach (var transportation in transportations)
                        {
                            _transportationRepo.EntryReference(transportation, e => e.Car);
                            _carRepo.EntryReference(transportation.Car, e => e.Capacity);

                            var companyId = JsonConvert.DeserializeObject<List<int>>(transportation.CompanyIds).Last();
                            var company = await _companyRepo.GetById(companyId);
                            if (company != null)
                            {
                                var distance = (await _distanceRepo.Where(e => DistanceCondition(e, company.Distance))).First();


                                worksheet.Cells[startRow, 1].Value = transportation.TransportDate.ToString("dd'/'MM'/'yyyy");
                                worksheet.Cells[startRow, 2].Value = transportation.Car.CarNumber;
                                worksheet.Cells[startRow, 3].Value = company.Name;
                                worksheet.Cells[startRow, 4].Value = company.Distance;
                                worksheet.Cells[startRow, 5].Value = distance.Description;
                                worksheet.Cells[startRow, 6].Value = transportation.Car.Capacity.Type;
                                worksheet.Cells[startRow, 7].Value = transportation.Money;
                                worksheet.Cells[startRow, 8].Value = transportation.Report;

                                startRow += 1;
                            }
                        }

                        BoderCell(worksheet.Cells[$"A5:H{startRow - 1}"]);
                        AlignCenter(worksheet.Cells[$"E5:F{startRow - 1}"]);

                        //excelPackage.Save();

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


        private bool DistanceCondition(Distance entity, double distance)
        {
            var arr = entity.Description.Split('-');
            var min = Convert.ToInt32(arr[0]);
            var max = Convert.ToInt32(arr[1]);

            return min <= distance && distance <= max && entity.Status == CommonConstants.Status.Active;
        }
        #endregion

    }
}