using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface IDistanceService : IBaseService<Distance, DistanceCreateViewModel, DistanceUpdateViewModel, DistanceGetByIdViewModel, DistanceGetAllViewModel>
    {
    }
}