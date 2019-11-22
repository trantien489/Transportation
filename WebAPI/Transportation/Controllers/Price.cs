using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
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
    }
}