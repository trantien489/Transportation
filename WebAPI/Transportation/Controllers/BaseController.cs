using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Domain.Constants;
using Domain.Resources;
using Domain.Services;
using Infrastructure.EF.Entities;
using System.Threading.Tasks;

namespace Transportation.Controllers
{
    [Route("api/[controller]/[action]")]
    [Authorize(Policy = CommonConstants.Authorize.PolicyAdmin)]
    public abstract class BaseController<TController, TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel> : ControllerBase
         where TController : ControllerBase
         where TEntity : BaseEntity
    {
        private readonly IBaseService<TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel> _service;
        private readonly ILogger _logger;
        protected static string _nameController;
        protected BaseController(IBaseService<TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel> service, ILogger<TController> logger)
        {
            _service = service;
            _logger = logger;
            _nameController = GetControllerName(typeof(TController).Name);
        }
        private string GetControllerName(string input)
        {
            return input.Substring(0, input.Length - 10).ToLower();
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAll(int? pageSize = CommonConstants.ConfigNumber.pageSizeDefault, int? pageNumber = 1, int? Status = null)
        {
            var response = await _service.GetAll(pageSize.Value, pageNumber.Value, Status);
            return new ObjectResult(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetById(int id)
        {
            if (id <= 0)
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _service.GetById(id);
            var result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.GetItem, Resource.ErrorGetById, _nameController);
            }
            return result;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]TCreateViewModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = await _service.Create(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.CreateItem, Resource.ErrorCreate, _nameController);
                }
            }
            return result;
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody]TUpdateViewModel model)
        {
            ObjectResult result;
            if (!ModelState.IsValid || ((dynamic)model).Id <= 0)
            {
                result = new BadRequestObjectResult(ModelState);
            }
            else
            {
                var response = await _service.Update(model);
                result = new ObjectResult(response);
                if (!response.Success)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorUpdate, _nameController);
                }
            }
            return result;
        }
        [HttpPut(CommonConstants.Routes.Id)]
        public async Task<IActionResult> ChangeStatus(long id)
        {
            ObjectResult result;
            if (id <= 0)
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _service.ChangeStatus(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorChangeStatus, _nameController);
            }
            return result;
        }
        [HttpPut(CommonConstants.Routes.Id)]
        public async Task<IActionResult> Delete(long id)
        {
            ObjectResult result;
            if (id <= 0)
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _service.Delete(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                _logger.LogWarning(CommonConstants.LoggingEvents.UpdateItem, Resource.ErrorDelete, _nameController);
            }
            return result;
        }
        [HttpDelete(CommonConstants.Routes.Id)]
        public async Task<IActionResult> Remove(long id)
        {
            ObjectResult result;
            if (id <= 0)
            {
                return new BadRequestObjectResult(CommonConstants.Validate.idIsInvalid);
            }
            var response = await _service.Remove(id);
            result = new ObjectResult(response);
            if (!response.Success)
            {
                if (response.ErrorNumber == (int)Enums.Common.Exception)
                {
                    _logger.LogWarning(CommonConstants.LoggingEvents.DeleteItem, Resource.ErrorRemove, _nameController);
                }
                else if (response.ErrorNumber == (int)Enums.Common.HasChildError)
                {
                    // == NULL: không thể xóa được cha do bởi tồn tại con
                    _logger.LogWarning(CommonConstants.LoggingEvents.DeleteItem, Resource.ErrorRemove, _nameController);
                }
            }
            return result;
        }
    }
}
