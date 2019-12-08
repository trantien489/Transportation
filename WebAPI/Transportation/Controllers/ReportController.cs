using Domain.Constants;
using Domain.Models;
using Domain.Resources;
using Domain.Services;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Transportation.Controllers
{
    [Route("api/[controller]/[action]")]
    [Authorize(Policy = CommonConstants.Authorize.PolicyAdmin)]
    public class ReportController : Controller
    {
        private readonly IReportService _reportService;
        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet]
        public async Task<IActionResult> BangKe(DateTime date, string currentDate)
        {
            var response = await _reportService.BangKe(date);
            return File(response.Data, CommonConstants.Excel.openxmlformats, $"Bảng Kê Tháng {date.Month}/{date.Year}_{currentDate}.{CommonConstants.Excel.fileNameExtention}");
        }

        [HttpGet]
        public async Task<IActionResult> CheckBangKe(DateTime date)
        {
            var response = await _reportService.CheckBangKe(date);
            return new ObjectResult(response);
        }
    }
}
