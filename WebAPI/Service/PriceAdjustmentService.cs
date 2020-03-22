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
    public class PriceAdjustmentService : BaseService<PriceAdjustment, PriceAdjustmentCreateViewModel, PriceAdjustmentUpdateViewModel, PriceAdjustmentGetByIdViewModel, PriceAdjustmentGetAllViewModel>, IPriceAdjustmentService
    {
        private readonly IGenericRepository<PriceAdjustment> _repo;
        private readonly IMapper _mapper;
        public PriceAdjustmentService(IGenericRepository<PriceAdjustment> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(PriceAdjustment entity)
        {
            _repo.EntryReference(entity, e => e.Capacity);
            _repo.EntryReference(entity, e => e.Company);
        }
        public override void GetByIdEntry(PriceAdjustment entity)
        {
        }

        public override string BeforeInsert(PriceAdjustment entity)
        {
            var priceAdjustment = _repo.FirstOrDefault(e => e.CompanyId == entity.CompanyId && e.CapacityId == entity.CapacityId && e.Status != CommonConstants.Status.Deleted).Result;
            return priceAdjustment == null ? string.Empty : "Giá tiền đã tồn tại";
        }

        public override string BeforeUpdate(PriceAdjustment entity)
        {
            var priceAdjustment = _repo.FirstOrDefault(e => e.Id != entity.Id && e.CompanyId == entity.CompanyId && e.CapacityId == entity.CapacityId && e.Status != CommonConstants.Status.Deleted).Result;
            return priceAdjustment == null ? string.Empty : "Giá tiền đã tồn tại";
        }
        #endregion
    }
}