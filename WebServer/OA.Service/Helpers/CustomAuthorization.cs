using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using OA.Core.Constants;
using OA.Infrastructure.EF.Entities;
using OA.Repo.Generic;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace OA.Service.Helpers
{
    public class CustomAuthorization : AuthorizationHandler<CustomAuthorization>, IAuthorizationRequirement
    {
        private readonly IServiceCollection _services;
        public CustomAuthorization(IServiceCollection services)
        {
            _services = services;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, CustomAuthorization requirement)
        {
            /*
            var _roleManager = ActivatorUtilities.CreateInstance<RoleManager<ApplicationRole>>(_services.BuildServiceProvider());
            var _permissionRepo = ActivatorUtilities.CreateInstance<GenericRepository<Permission>>(_services.BuildServiceProvider());
            //Get actionName, controllerName
            string actionName = string.Empty;
            string controllerName = string.Empty;
            string httpMethod = string.Empty;
            var mvcContext = context.Resource as AuthorizationFilterContext;
            var descriptor = mvcContext?.ActionDescriptor as ControllerActionDescriptor;
            if (descriptor != null)
            {
                actionName = descriptor.ActionName;
                controllerName = descriptor.ControllerName;
                httpMethod = mvcContext.HttpContext.Request.Method;
            }
            //Check permission from DB            
            var permission = _permissionRepo.AsQueryable().FirstOrDefault(x => x.Status == CommonConstants.Status.Active
            && StringHelper.Equals(x.ControllerName, controllerName)
            && StringHelper.Equals(x.ActionName, actionName)
            && StringHelper.Equals(x.HttpMethod, httpMethod)
            );
            bool userIsInRole = false;
            if (permission != null)
            {
                _permissionRepo.EntryCollection(permission, x => x.PermissionRoles);
                var acceptedRoles = permission.PermissionRoles.Select(pr =>
                {
                    var roles = _roleManager.Roles.FirstOrDefault(x => x.Id == pr.RoleId);
                    return roles?.Name;
                }).Distinct();
                userIsInRole = acceptedRoles.Any(role => context.User.IsInRole(role));
            }
            //
            if (!userIsInRole)
            {
                context.Fail();
            }
            else
            {
                context.Succeed(requirement);
            }
            */

            return Task.CompletedTask;
        }
    }
}