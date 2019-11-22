using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface ICapacityService : IBaseService<Capacity, CapacityCreateViewModel, CapacityUpdateViewModel, CapacityGetByIdViewModel, CapacityGetAllViewModel>
    {
    }
}