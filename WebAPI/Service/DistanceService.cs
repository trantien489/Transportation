using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class DistanceService : BaseService<Distance, DistanceCreateViewModel, DistanceUpdateViewModel, DistanceGetByIdViewModel, DistanceGetAllViewModel>, IDistanceService
    {
        private readonly IGenericRepository<Distance> _repo;
        private readonly IMapper _mapper;
        public DistanceService(IGenericRepository<Distance> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Distance entity)
        {
        }
        public override void GetByIdEntry(Distance entity)
        {
        }
        #endregion
    }
}