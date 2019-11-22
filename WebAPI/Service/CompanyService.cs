using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class CompanyService : BaseService<Company, CompanyCreateViewModel, CompanyUpdateViewModel, CompanyGetByIdViewModel, CompanyGetAllViewModel>, ICompanyService
    {
        private readonly IGenericRepository<Company> _repo;
        private readonly IMapper _mapper;
        public CompanyService(IGenericRepository<Company> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Company entity)
        {
        }
        public override void GetByIdEntry(Company entity)
        {
        }
        #endregion
    }
}
