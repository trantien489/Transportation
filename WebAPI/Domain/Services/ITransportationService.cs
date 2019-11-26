using Domain.Models;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface ITransportationService : IBaseService<Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>
    {
        Task<ResponseResult> GenerateMoney(long companyId, long carId);

    }
}