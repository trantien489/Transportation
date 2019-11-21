using System.Security.Claims;
using Domain.Constants;
using Microsoft.AspNetCore.Http;

namespace Repository.Generic
{
    public class GlobalVariables
    {
        private static IHttpContextAccessor _contextAccessor;
        public GlobalVariables(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }
        private static ClaimsPrincipal User => _contextAccessor.HttpContext.User;
        protected static string GlobalUserName => User.Identity.IsAuthenticated ? User.FindFirst(ClaimTypes.NameIdentifier).Value : string.Empty;
        protected static string GlobalUserId => User.Identity.IsAuthenticated ? User.FindFirst(CommonConstants.SpecialFields.id)?.Value : string.Empty;
    }   
}
