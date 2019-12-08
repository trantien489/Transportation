using Domain.Constants;
using Domain.Models;
using Domain.Resources;
using Domain.Services;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Transportation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AuthController : Controller
    {


        private readonly ILogger _logger;
        private readonly IAuthService _authService;
        public IConfiguration Configuration { get; }

        public AuthController(IAuthService authService, ILogger<AuthController> logger, IConfiguration configuration)
        {
            _authService = authService;
            _logger = logger;
            Configuration = configuration;
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

        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetTokenIssuer()
        {
            ObjectResult result;
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
            result = new ObjectResult(jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)]);
            return result;
        }
    }
}
