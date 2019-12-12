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
        private readonly IGenericRepository<Distance> _distanceRepo;

        private readonly IMapper _mapper;
        public CompanyService(IGenericRepository<Company> repo, IGenericRepository<Distance> distanceRepo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
            _distanceRepo = distanceRepo;
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

        public override string BeforeInsert(Company entity)
        {
            return IsCorrectDistance(entity.Distance) ? string.Empty :  "Khoảng cách không hợp lệ";
        }

        public override string BeforeUpdate(Company entity)
        {
            return IsCorrectDistance(entity.Distance) ? string.Empty : "Khoảng cách không hợp lệ";
        }

        private bool IsCorrectDistance(double distance)
        { 
            return _distanceRepo.Where(e => DistanceCondition(e, distance)).Result.Count() == 1;

        }
        private bool DistanceCondition(Distance entity, double distance)
        {
            var arr = entity.Description.Split('-');
            var min = Convert.ToInt32(arr[0]);
            var max = Convert.ToInt32(arr[1]);

            return min <= distance && distance <= max && entity.Status == CommonConstants.Status.Active;
        }
        #endregion
    }
}
