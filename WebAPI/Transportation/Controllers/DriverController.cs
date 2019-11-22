using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class DriverController : BaseController<DriverController, Driver, DriverCreateViewModel, DriverUpdateViewModel, DriverGetByIdViewModel, DriverGetAllViewModel>
    {
        private readonly IDriverService _driverService;
        private readonly ILogger _logger;
        public DriverController(IDriverService driverService, ILogger<DriverController> logger)
            : base(driverService, logger)
        {
            _driverService = driverService;
            _logger = logger;
        }
    }
}