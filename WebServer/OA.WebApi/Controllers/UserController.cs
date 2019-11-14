using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OA.Core.Constants;
using OA.Core.Models;
using OA.Core.Models.ViewModels;
using OA.Core.Resources;
using OA.Core.Services;
using OA.Core.ViewModels;
using OA.Core.ViewModels.Role;
using System.Threading.Tasks;
namespace OA.WebApi.Controllers
{
    //[Authorize]
    [ApiVersion(CommonConstants.Routes.ApiVersion)]
    [Route(CommonConstants.Routes.BaseRoute)]
    public class UserController : Controller
    {
        #region Declaration
        private readonly IUserService _userService;
        private readonly ILogger _logger;
        private static string _nameController = "user";
        public UserController(
            IUserService userService
            , ILogger<UserController> logger
            )
        {
            _userService = userService;
            _logger = logger;
        }
        #endregion
        [HttpGet]
        public IActionResult GetAll(int? pageSize = CommonConstants.ConfigNumber.pageSizeDefault, int? pageNumber = 1)
        {
            var response = _userService.GetAll(pageNumber.Value, pageSize.Value);
            return new ObjectResult(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetById(string id)
        {
            ObjectResult result;
            if (string.IsNullOrEmpty(id))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.GetById(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.GetItem, Resource.ErrorGetById, _nameController);
            }
            return result;
        }
        [HttpGet]
        public IActionResult Search(string firstNameOrLastName, int? pageSize = CommonConstants.ConfigNumber.pageSizeDefault, int? pageNumber = 1)
        {
            if (string.IsNullOrEmpty(firstNameOrLastName))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = _userService.Search(pageNumber.Value, pageSize.Value, firstNameOrLastName);
            return new ObjectResult(response);
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> CheckValidUserName(string userName)
        {
            if (string.IsNullOrEmpty(userName))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.CheckValidUserName(userName);
            return new ObjectResult(response);
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> CheckValidEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.CheckValidEmail(email);
            return new ObjectResult(response);
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult ConfirmAccount([FromBody] ConfirmAccount model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = _userService.ConfirmAccount(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.CreateItem, Resource.ErrorCreate, _nameController);
                }
            }
            return result;
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]UserCreateViewModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = await _userService.Create(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.CreateItem, Resource.ErrorCreate, _nameController);
                }
            }
            return result;
        }
        [HttpPost]
        public async Task<IActionResult> UpdateRoleForUser([FromBody] UpdateRoleModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = await _userService.UpdateRoleForUser(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorUpdate, _nameController);
                }
            }
            return result;
        }
        [HttpPut(CommonConstants.Routes.Id)]
        public async Task<IActionResult> ChangeStatus(string id)
        {
            ObjectResult result;
            if (string.IsNullOrEmpty(id))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.ChangeStatus(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorChangeStatus, _nameController);
            }
            return result;
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserUpdateViewModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = await _userService.Update(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorUpdate, _nameController);
                }
            }
            return result;
        }
        [HttpPut(CommonConstants.Routes.Id)]
        public async Task<IActionResult> Delete(string id)
        {
            ObjectResult result;
            if (string.IsNullOrEmpty(id))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.Delete(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorDelete, _nameController);
            }
            return result;
        }
        //[Authorize(Roles = CommonConstants.Authorize.SuperAdmin)]
        [HttpDelete(CommonConstants.Routes.Id)]
        public async Task<IActionResult> Remove(string id)
        {
            ObjectResult result;
            if (string.IsNullOrEmpty(id))
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _userService.Remove(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.DeleteItem, Resource.ErrorRemove, _nameController);
            }
            return result;
        }
    }
}