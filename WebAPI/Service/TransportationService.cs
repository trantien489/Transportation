using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class TransportationService : BaseService<Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>, ITransportationService
    {
        private readonly IGenericRepository<Transportation> _repo;
        private readonly IMapper _mapper;
        public TransportationService(IGenericRepository<Transportation> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Transportation entity)
        {
        }
        public override void GetByIdEntry(Transportation entity)
        {
        }
        #endregion
    }
}