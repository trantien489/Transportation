using Domain.Models;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface ITransportationService : IBaseService<Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>
    {
        Task<ResponseResult> GenerateMoney(List<int> companyIds, long carId);
        Task<ResponseResult> Filter(DateTime fromDate, DateTime toDate);
        Task<ResponseResult> UpdateTransportationMoney(DateTime fromDate, DateTime toDate);
    }
}