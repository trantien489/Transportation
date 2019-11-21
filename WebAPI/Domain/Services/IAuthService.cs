using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Domain.Services
{
    public interface IAuthService
    {
        Task<ResponseResult> GetClaimsIdentity(string userName, string password);
        Task<object> GenerateTokenJWT(ClaimsIdentity identity, string userName);
        Task<ResponseResult> Me();
    }
}
