using System.Threading.Tasks;
using Domain.Constants;
using Domain.Resources;
using Domain.Services;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AuthController : Controller
    {
        private readonly ILogger _logger;
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]CredentialsViewModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var claimsIdentity = await _authService.GetClaimsIdentity(model.UserName, model.Password);
                result = new ObjectResult(claimsIdentity);
            }
            return result;
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Me()
        {
            ObjectResult result;
            var response = await _authService.Me();
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.GetItem, Resource.ErrorGetById, "auth");
            }
            return result;
        }
    }
}
