using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class CapacityService : BaseService<Capacity, CapacityCreateViewModel, CapacityUpdateViewModel, CapacityGetByIdViewModel, CapacityGetAllViewModel>, ICapacityService
    {
        private readonly IGenericRepository<Capacity> _repo;
        private readonly IMapper _mapper;
        public CapacityService(IGenericRepository<Capacity> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Capacity entity)
        {
        }
        public override void GetByIdEntry(Capacity entity)
        {
        }
        #endregion
    }
}