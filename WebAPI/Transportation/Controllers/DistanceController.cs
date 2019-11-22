using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class DistanceController : BaseController<DistanceController, Distance, DistanceCreateViewModel, DistanceUpdateViewModel, DistanceGetByIdViewModel, DistanceGetAllViewModel>
    {
        private readonly IDistanceService _distanceService;
        private readonly ILogger _logger;
        public DistanceController(IDistanceService distanceService, ILogger<DistanceController> logger)
            : base(distanceService, logger)
        {
            _distanceService = distanceService;
            _logger = logger;
        }
    }
}