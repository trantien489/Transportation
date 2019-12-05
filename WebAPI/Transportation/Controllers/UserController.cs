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
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly ILogger _logger;
        private static string _nameController = "user";
        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        //[AllowAnonymous]
        //[HttpPost]
        //public async Task<ActionResult> Create([FromBody]UserCreateViewModel model)
        //{
        //    ObjectResult result;
        //    if (!ModelState.IsValid)
        //    {
        //        result = new BadRequestObjectResult(ModelState);
        //    }
        //    else
        //    {
        //        var response = await _userService.Create(model);
        //        result = new ObjectResult(response);
        //        if (!response.Success)
        //        {
        //            _logger.LogWarning(CommonConstants.LoggingEvents.CreateItem, Resource.ErrorCreate, _nameController);
        //        }
        //    }
        //    return result;
        //}

    }
}
