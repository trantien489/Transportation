using Domain.Models;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface ICompanyService : IBaseService<Company, CompanyCreateViewModel, CompanyUpdateViewModel, CompanyGetByIdViewModel, CompanyGetAllViewModel>
    {
        Task<ResponseResult> SearchCompany(string searchKey);
    }
}
