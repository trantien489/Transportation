using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Service
{
    public class TransportationService : BaseService<Transportation, TransportationCreateViewModel, TransportationUpdateViewModel, TransportationGetByIdViewModel, TransportationGetAllViewModel>, ITransportationService
    {
        private readonly IGenericRepository<Transportation> _repo;
        private readonly IGenericRepository<Distance> _distanceRepo;
        private readonly IGenericRepository<Company> _companyRepo;
        private readonly IGenericRepository<Car> _carRepo;
        private readonly IGenericRepository<Price> _priceRepo;

        private readonly IMapper _mapper;
        public TransportationService(IGenericRepository<Transportation> repo, 
            IGenericRepository<Distance> distanceRepo,
            IGenericRepository<Company> companyRepo,
            IGenericRepository<Car> carRepo,
            IGenericRepository<Price> priceRepo,

            IMapper mapper) : base(repo, mapper)
        {
            _repo = repo;
            _mapper = mapper;
            _distanceRepo = distanceRepo;
            _companyRepo = companyRepo;
            _carRepo = carRepo;
            _priceRepo = priceRepo;
        }

        [HttpGet]
        public async Task<ResponseResult> GenerateMoney(long companyId, long carId)
        {
            var result = new ResponseResult();
            result.Data = 0;
            try
            {
                var company = await _companyRepo.GetById(companyId);
                if (company != null)
                {
                    var distance = await _distanceRepo.FirstOrDefault(dis => DistanceCondition(dis, company.Distance));
                    var car = await _carRepo.GetById(carId);
                    if (distance != null && car != null)
                    {
                        var price = await _priceRepo.FirstOrDefault(pri => pri.DistanceId == distance.Id && pri.CapacityId == car.CapacityId);
                        if (price != null)
                        {
                            result.Data = price.Money;
                        }
                    }
                }
                ResponseResultHelper.MakeSuccess(result);
            }
            catch (Exception ex)
            {
                ResponseResultHelper.MakeException(result, ex);
            }

            return await Task.FromResult(result);
        }

        #region Override Methods
        public override void GetAllEntry(Transportation entity)
        {
        }
        public override void GetByIdEntry(Transportation entity)
        {
        }
        #endregion

        #region Private method
        public bool DistanceCondition(Distance entity, int distance) {
            var arr = entity.Decripstion.Split('-');
            var min = Convert.ToInt32(arr[0]);
            var max = Convert.ToInt32(arr[1]);

            return min <= distance && distance <= max;
        }
        #endregion
    }
}