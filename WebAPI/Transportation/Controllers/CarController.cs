using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class CarController : BaseController<CarController, Car, CarCreateViewModel, CarUpdateViewModel, CarGetByIdViewModel, CarGetAllViewModel>
    {
        private readonly ICarService _carService;
        private readonly ILogger _logger;
        public CarController(ICarService carService, ILogger<CarController> logger)
            : base(carService, logger)
        {
            _carService = carService;
            _logger = logger;
        }
    }
}