using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using System;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<ResponseResult> SearchCompany(string searchKey)
        {
            var result = new ResponseResult();
            try
            {
                var entity = await _repo.Where(c => c.Status == CommonConstants.Status.Active && StringHelper.Contains((c.Code + c.Name), searchKey));

                result.Data = entity.Take(CommonConstants.Select.Take).ToList();
                ResponseResultHelper.MakeSuccess(result);
            }
            catch (Exception ex)
            {
                ResponseResultHelper.MakeException(result, ex);
            }

            return await Task.FromResult(result);
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
