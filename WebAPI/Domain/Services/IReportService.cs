using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface IReportService
    {
        Task<ResponseResult> BangKe(DateTime date);
        Task<ResponseResult> CheckBangKe(DateTime date);

    }
}
