using OA.Core.Models;
using OA.Core.Models.ViewModels;
using OA.Core.ViewModels;
using OA.Core.ViewModels.Role;
using System.Security.Claims;
using System.Threading.Tasks;
namespace OA.Core.Services
{
    public interface IUserService
    {
        ResponseResult GetAll(int pageNumber, int pageSize);
        Task<ResponseResult> GetById(string id);
        Task<ResponseResult> Create(UserCreateViewModel model);
        Task<ResponseResult> Update(UserUpdateViewModel model);
        Task<ResponseResult> ChangeStatus(string id);
        Task<ResponseResult> Delete(string id);
        Task<ResponseResult> Remove(string id);
        Task<ResponseResult> UpdateRoleForUser(UpdateRoleModel model);
        Task<ResponseResult> CheckValidUserName(string userName);
        Task<ResponseResult> CheckValidEmail(string email);
        ResponseResult Search(int pageNumber, int pageSize, string firstNameOrLastName);
        ResponseResult ConfirmAccount(ConfirmAccount model);
    }
}
