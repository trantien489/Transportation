using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Domain.Constants;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Transportation.Controllers
{
    public class PriceAdjustmentController : BaseController<PriceAdjustmentController, PriceAdjustment, PriceAdjustmentCreateViewModel, PriceAdjustmentUpdateViewModel, PriceAdjustmentGetByIdViewModel, PriceAdjustmentGetAllViewModel>
    {
        private readonly IPriceAdjustmentService _priceAdjustmentService;
        private readonly ILogger _logger;
        public PriceAdjustmentController(IPriceAdjustmentService priceAdjustmentService, ILogger<PriceAdjustmentController> logger)
            : base(priceAdjustmentService, logger)
        {
            _priceAdjustmentService = priceAdjustmentService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpGet]
        public override async Task<IActionResult> GetAll(int? pageSize = CommonConstants.ConfigNumber.pageSizeDefault, int? pageNumber = 1, int? Status = null)
        {
            var response = await _priceAdjustmentService.GetAll(pageSize.Value, pageNumber.Value, Status, x=>x.CompanyId);
            return new ObjectResult(response);
        }
    }
}