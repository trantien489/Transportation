using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

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
    }
}