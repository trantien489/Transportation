using Microsoft.AspNetCore.Http;
using OA.Core.Constants;
using System.Security.Claims;
namespace OA.Repository.Generic
{
    public class GlobalVariables
    {
        private static IHttpContextAccessor _contextAccessor;
        public GlobalVariables(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }
        private static ClaimsPrincipal User => _contextAccessor.HttpContext.User;
        protected static string GlobalUserName => User.Identity.IsAuthenticated ? User.Identity.Name : string.Empty;
        protected static string GlobalUserId => User.Identity.IsAuthenticated ? User.FindFirst(CommonConstants.SpecialFields.id)?.Value : string.Empty;
    }   
}
