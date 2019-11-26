using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Transportation.Controllers
{
    public class CompanyController : BaseController<CompanyController, Company, CompanyCreateViewModel, CompanyUpdateViewModel, CompanyGetByIdViewModel, CompanyGetAllViewModel>
    {
        private readonly ICompanyService _companyService;
        private readonly ILogger _logger;
        public CompanyController(ICompanyService companyService, ILogger<CompanyController> logger)
            : base(companyService, logger)
        {
            _companyService = companyService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> SearchCompany(string searchKey)
        {
            ObjectResult result;
            if (string.IsNullOrEmpty(searchKey))
            {
                result = new BadRequestObjectResult("Search Key is null");
            }
            else
            {
                var response = await _companyService.SearchCompany(searchKey);
                result = new ObjectResult(response);
            }
            return result;
        }
    }
}
