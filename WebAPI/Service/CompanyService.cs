using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class CompanyService : BaseService<Company, CompanyCreateViewModel, CompanyUpdateViewModel, CompanyGetByIdViewModel, CompanyGetAllViewModel>, ICompanyService
    {
        private readonly IGenericRepository<Company> _companyRepo;
        private readonly IMapper _mapper;
        public CompanyService(IGenericRepository<Company> companyRepo, IMapper mapper) : base(companyRepo, mapper)
        {
            _companyRepo = companyRepo;
            _mapper = mapper;
        }
        public override void GetAllEntry(Company entity)
        {
        }
        public override void GetByIdEntry(Company entity)
        {
        }
    }
}
