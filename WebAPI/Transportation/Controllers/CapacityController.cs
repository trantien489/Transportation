using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class CapacityController : BaseController<CapacityController, Capacity, CapacityCreateViewModel, CapacityUpdateViewModel, CapacityGetByIdViewModel, CapacityGetAllViewModel>
    {
        private readonly ICapacityService _capacityService;
        private readonly ILogger _logger;
        public CapacityController(ICapacityService capacityService, ILogger<CapacityController> logger)
            : base(capacityService, logger)
        {
            _capacityService = capacityService;
            _logger = logger;
        }
    }
}