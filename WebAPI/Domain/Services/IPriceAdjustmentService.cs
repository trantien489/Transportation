using System.Threading.Tasks;
using Domain.Models;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface IPriceAdjustmentService : IBaseService<PriceAdjustment, PriceAdjustmentCreateViewModel, PriceAdjustmentUpdateViewModel, PriceAdjustmentGetByIdViewModel, PriceAdjustmentGetAllViewModel>
    {
    }
}