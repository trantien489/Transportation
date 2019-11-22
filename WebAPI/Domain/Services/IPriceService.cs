using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface IPriceService : IBaseService<Price, PriceCreateViewModel, PriceUpdateViewModel, PriceGetByIdViewModel, PriceGetAllViewModel>
    {
    }
}