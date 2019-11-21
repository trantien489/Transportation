using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface ICompanyService : IBaseService<Company, CompanyCreateViewModel, CompanyUpdateViewModel, CompanyGetByIdViewModel, CompanyGetAllViewModel>
    {
    }
}
