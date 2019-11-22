using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface IDriverService : IBaseService<Driver, DriverCreateViewModel, DriverUpdateViewModel, DriverGetByIdViewModel, DriverGetAllViewModel>
    {
    }
}