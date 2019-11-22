using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

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

        #region Override Methods
        public override void GetAllEntry(Price entity)
        {
        }
        public override void GetByIdEntry(Price entity)
        {
        }
        #endregion
    }
}