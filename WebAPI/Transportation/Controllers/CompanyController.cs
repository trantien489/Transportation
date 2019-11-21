using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.Extensions.Logging;

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
    }
}
