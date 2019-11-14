using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using OA.Core.Configurations;
using OA.Core.Constants;
using OA.Core.Factories;
using OA.Core.Models;
using OA.Core.Resources;
using OA.Core.Services;
using OA.Infrastructure.EF.Entities;
using OA.Repository.Generic;
using OA.Service.Helpers;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
namespace OA.Service
{
    public class AuthService : GlobalVariables, IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserService _userService;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        public AuthService(UserManager<ApplicationUser> userManager, IUserService userService, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions, IHttpContextAccessor contextAccessor, IMapper mapper) : base(contextAccessor)
        {
            _userManager = userManager;
            _userService = userService;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
        }
        public async Task<object> GenerateTokenJWT(ClaimsIdentity identity, string userName)
        {
            if (identity == null) return null;
            var jwt = await AuthTokens.GenerateJwt(identity, _jwtFactory, userName, _jwtOptions
                        , new JsonSerializerSettings { Formatting = Formatting.Indented });
            return JsonConvert.DeserializeObject(jwt);
        }
        public async Task<ResponseResult> GetClaimsIdentity(string userName, string password)
        {
            var result = new ResponseResult();
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
            {
                result.Message = Resource.InvalidUsernameOrPassword;
                result.Success = false;
            }
            // get the user to verifty
            var user = await _userManager.FindByNameAsync(userName);
            if (user != null && user.Status == CommonConstants.Status.Active)
            {
                var isValidPassword = await _userManager.CheckPasswordAsync(user, password);
                if (isValidPassword)
                {
                    var roles = await _userManager.GetRolesAsync(user);
                    var identity = await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, user.Id, roles.ToList()));
                    result.Data = await GenerateTokenJWT(identity, userName);
                    result.Message = Resource.SuccessLogin;
                    result.Success = true;
                }
                else
                {
                    result.Message = Resource.InvalidPassword;
                    result.Success = false;
                }
            }
            else if (user != null && user.Status == CommonConstants.Status.InActive)
            {
                result.Message = CommonConstants.AccountStatus.MsgInActive;
                result.Success = false;
            }
            else
            {
                result.Message = Resource.InvalidUsername;
                result.Success = false;
            }
            return result;
        }
        public Task<ResponseResult> Me()
        {
            return _userService.GetById(GlobalUserId);
        }
    }
}
