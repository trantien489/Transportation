using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface ITransportationService : IBaseService<Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>
    {
    }
}