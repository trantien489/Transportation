﻿using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Service
{
    public class PriceService : BaseService<Price, PriceCreateViewModel, PriceUpdateViewModel, PriceGetByIdViewModel, PriceGetAllViewModel>, IPriceService
    {
        private readonly IGenericRepository<Price> _repo;
        private readonly IMapper _mapper;
        IHttpContextAccessor contextAccessor;
        public PriceService(IGenericRepository<Price> repo, IMapper mapper, IHttpContextAccessor _contextAccessor) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
            contextAccessor= _contextAccessor;
        }

        public async Task<ResponseResult> Filter(long distanceId)
        {
            var result = new ResponseResult();
            var pagination = new Pagination();

            try
            {
                var prices = await _repo.Where(p => p.DistanceId == distanceId && p.Status != CommonConstants.Status.Deleted);
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

        public async Task<ResponseResult> UpdateMultiple(List<UpdatePrice> prices)
        {
            var result = new ResponseResult();
            try
            {
                foreach (var item in prices)
                {
                    var price = await _repo.GetById(item.PriceId);
                    price.Money = item.Money;
                    price.UpdatedDate = DateTime.UtcNow;
                    price.UpdatedBy = contextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                }
                var saveChange = await _repo.SaveChanges(result);
                if (saveChange)
                {
                    ResponseResultHelper.MakeSuccess(result, "Lưu bảng giá thành công");
                }
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