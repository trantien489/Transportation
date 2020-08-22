using AutoMapper;
using Domain.Constants;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using System.Linq;

namespace Service
{
    public class CapacityService : BaseService<Capacity, CapacityCreateViewModel, CapacityUpdateViewModel, CapacityGetByIdViewModel, CapacityGetAllViewModel>, ICapacityService
    {
        private readonly IGenericRepository<Capacity> _repo;
        private readonly IGenericRepository<Price> _priceRepo;
        private readonly IGenericRepository<Distance> _distanceRepo;

        private readonly IMapper _mapper;
        public CapacityService(IGenericRepository<Capacity> repo, IGenericRepository<Price> priceRepo, IGenericRepository<Distance> distanceRepo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
            _priceRepo = priceRepo;
            _distanceRepo = distanceRepo;
        }

        #region Override Methods
        public override void GetAllEntry(Capacity entity)
        {
        }
        public override void GetByIdEntry(Capacity entity)
        {
        }
        public override void AfterInsert(Capacity entity)
        {
            var distanceIds = _distanceRepo.AsQueryable().Where(x => x.Status == CommonConstants.Status.Active).Select(x => x.Id).ToList();
            foreach (var distanceId in distanceIds)
            {
                var inserted = _priceRepo.Insert(new Price()
                {
                    DistanceId = distanceId,
                    CapacityId = entity.Id,
                    Money = 0
                }).Result; 
            }
        }
        #endregion
    }
}