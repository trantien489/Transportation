using System.Threading.Tasks;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class PriceController : BaseController<PriceController, Price, PriceCreateViewModel, PriceUpdateViewModel, PriceGetByIdViewModel, PriceGetAllViewModel>
    {
        private readonly IPriceService _priceService;
        private readonly ILogger _logger;
        public PriceController(IPriceService priceService, ILogger<PriceController> logger)
            : base(priceService, logger)
        {
            _priceService = priceService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Filter(long distanceId)
        {
            ObjectResult result;
            if (distanceId <= 0)
            {
                result = new BadRequestObjectResult("Wrong Id");
            }
            else
            {
                var response = await _priceService.Filter(distanceId);
                result = new ObjectResult(response);
            }
            return result;
        }
    }
}