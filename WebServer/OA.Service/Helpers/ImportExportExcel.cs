using OA.Core.Constants;
using OA.Core.Models;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;

namespace OA.Service.Helpers
{
    public static class ImportExportExcel<T> where T : class
    {
        public static ExcelStream Export(string fileName, string sheetName, IEnumerable<T> fileContent, Action<ExcelPackage, string, IEnumerable<T>> delegateAction = null)
        {
            if (string.IsNullOrEmpty(fileName) || string.IsNullOrEmpty(sheetName)) return null;
            try
            {
                var stream = new MemoryStream();
                using (var package = new ExcelPackage(stream))
                {
                    if (delegateAction == null)
                    {
                        ExportDefault(package, sheetName, fileContent);
                    }
                    else
                    {
                        delegateAction(package, sheetName, fileContent);
                    }
                }
                stream.Position = 0;

                return new ExcelStream()
                {
                    ExcelName = $"{fileName}{CommonConstants.SpecialChar.underscore}{DateTime.UtcNow.ToString(CommonConstants.Excel.formatName)}{CommonConstants.Excel.fileNameExtention}",
                    Stream = stream
                };
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static void ExportDefault(ExcelPackage package, string sheetName, IEnumerable<T> fileContent)
        {
            var workSheet = package.Workbook.Worksheets.Add(sheetName);
            workSheet.Cells.LoadFromCollection(fileContent, true);
            package.Save();
        }

        public static List<dynamic> Import(string pathFile)
        {
            var resultObject = new List<dynamic>();
            using (ExcelPackage package = new ExcelPackage(new FileInfo(pathFile)))
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                var rowCount = worksheet.Dimension.End.Row;
                var colCount = worksheet.Dimension.End.Column;
                for (int row = 2; row <= rowCount; row++)
                {
                    var dataRow = new ExpandoObject() as IDictionary<string, object>;
                    for (int col = 1; col <= colCount; col++)
                    {
                        var fieldName = worksheet.Cells[1, col].Value.ToString().Trim();
                        var valueCell = worksheet.Cells[row, col].Value;
                        dataRow.Add(fieldName, valueCell);
                    }
                    resultObject.Add((ExpandoObject)dataRow);
                }
            }
            return resultObject;
        }
    }
}
