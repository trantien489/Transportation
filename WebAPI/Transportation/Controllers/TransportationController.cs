using Domain.Services;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
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

        [HttpPost]
        public async Task<IActionResult> GenerateMoney([FromBody]GenerateMoneyViewModel model)
        {
            ObjectResult result;
            if (model.CarId <= 0 || model.CompanyIds.Count == 0 )
            {
                result = new BadRequestObjectResult("Wrong Id");
            }
            else
            {
                var response = await _transportationService.GenerateMoney(model.CompanyIds, model.CarId);
                result = new ObjectResult(response);
            }
            return result;
        }


        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Filter(DateTime fromDate, DateTime toDate)
        {
            var response = await _transportationService.Filter(fromDate, toDate);
            ObjectResult result = new ObjectResult(response);

            return result;
        }
    }
}