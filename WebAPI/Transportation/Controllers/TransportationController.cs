using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Transportation.Controllers
{
    public class TransportationController : BaseController<TransportationController, Infrastructure.EF.Entities.Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>
    {
        private readonly ITransportationService _transportationService;
        private readonly ILogger _logger;
        public TransportationController(ITransportationService transportationService, ILogger<TransportationController> logger)
            : base(transportationService, logger)
        {
            _transportationService = transportationService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GenerateMoney(long companyId,long carId)
        {
            ObjectResult result;
            if (carId <= 0 || companyId <= 0 )
            {
                result = new BadRequestObjectResult("Wrong Id");
            }
            else
            {
                var response = await _transportationService.GenerateMoney(companyId, carId);
                result = new ObjectResult(response);
            }
            return result;
        }
    }
}