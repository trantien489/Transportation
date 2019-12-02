using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Service
{
    public class PriceService : BaseService<Price, PriceCreateViewModel, PriceUpdateViewModel, PriceGetByIdViewModel, PriceGetAllViewModel>, IPriceService
    {
        private readonly IGenericRepository<Price> _repo;
        private readonly IMapper _mapper;
        public PriceService(IGenericRepository<Price> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseResult> Filter(long distanceId, long capacityId)
        {
            var result = new ResponseResult();
            var pagination = new Pagination();

            try
            {
                var prices = await _repo.Where(p => p.DistanceId == distanceId && p.CapacityId == capacityId && p.Status != CommonConstants.Status.Deleted);
                var data =  prices.ToList();

                data.ForEach(p => {
                    _repo.EntryReference(p, e => e.Capacity);
                    _repo.EntryReference(p, e => e.Distance);
                });

                pagination.Records = data.Select(p => _mapper.Map<Price, PriceGetAllViewModel>(p));
                result.Data = pagination;
                ResponseResultHelper.MakeSuccess(result);
            }
            catch (Exception ex)
            {
                ResponseResultHelper.MakeException(result, ex);
            }

            return await Task.FromResult(result);
        }


        #region Override Methods
        public override void GetAllEntry(Price entity)
        {
            _repo.EntryReference(entity, e => e.Capacity);
            _repo.EntryReference(entity, e => e.Distance);
        }
        public override void GetByIdEntry(Price entity)
        {
        }

        public override string BeforeInsert(Price entity)
        {
            var price = _repo.FirstOrDefault(e => e.DistanceId == entity.DistanceId && e.CapacityId == entity.CapacityId && e.Status != CommonConstants.Status.Deleted).Result;
            return price == null ? string.Empty : "Giá tiền đã tồn tại";
        }

        public override string BeforeUpdate(Price entity)
        {
            var price = _repo.FirstOrDefault(e => e.Id != entity.Id && e.DistanceId == entity.DistanceId && e.CapacityId == entity.CapacityId && e.Status != CommonConstants.Status.Deleted).Result;
            return price == null ? string.Empty : "Giá tiền đã tồn tại";
        }
        #endregion
    }
}