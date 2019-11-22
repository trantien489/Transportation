using AutoMapper;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Service
{
    public class CarService : BaseService<Car, CarCreateViewModel, CarUpdateViewModel, CarGetByIdViewModel, CarGetAllViewModel>, ICarService
    {
        private readonly IGenericRepository<Car> _repo;
        private readonly IMapper _mapper;
        public CarService(IGenericRepository<Car> repo, IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        #region Override Methods
        public override void GetAllEntry(Car entity)
        {
        }
        public override void GetByIdEntry(Car entity)
        {
        }
        #endregion
    }
}