using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class DriverService : BaseService<Driver, DriverCreateViewModel, DriverUpdateViewModel, DriverGetByIdViewModel, DriverGetAllViewModel>, IDriverService
    {
        private readonly IGenericRepository<Driver> _repo;
        private readonly IMapper _mapper;
        public DriverService(IGenericRepository<Driver> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Driver entity)
        {
        }
        public override void GetByIdEntry(Driver entity)
        {
        }
        #endregion
    }
}