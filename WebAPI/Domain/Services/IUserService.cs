using Domain.Models;
using Domain.ViewModels;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface IUserService
    {
        Task<ResponseResult> Create(UserCreateViewModel model);

    }
}
