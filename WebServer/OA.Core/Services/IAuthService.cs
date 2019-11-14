using OA.Core.Models;
using System.Security.Claims;
using System.Threading.Tasks;
namespace OA.Core.Services
{
    public interface IAuthService
    {
        Task<ResponseResult> GetClaimsIdentity(string userName, string password);
        Task<object> GenerateTokenJWT(ClaimsIdentity identity, string userName);
        Task<ResponseResult> Me();
    }
}
