using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface ICarService : IBaseService<Car, CarCreateViewModel, CarUpdateViewModel, CarGetByIdViewModel, CarGetAllViewModel>
    {
    }
}