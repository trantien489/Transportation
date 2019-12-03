using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<ResponseResult> GenerateMoney(List<int> companyIds, long carId)
        {
            var result = new ResponseResult();
            result.Data = 0;
            try
            {
                var companies = new List<Company>();
                foreach (var companyId in companyIds)
                {
                    var company = await _companyRepo.GetById(companyId);
                    if (company != null)
                    {
                        companies.Add(company);
                    }
                }

                var longestDistance = companies.OrderByDescending(c => c.Distance).First().Distance;

                var distance = await _distanceRepo.FirstOrDefault(dis => DistanceCondition(dis, longestDistance));
                var car = await _carRepo.GetById(carId);
                if (distance != null && car != null)
                {
                    var price = await _priceRepo.FirstOrDefault(pri => pri.DistanceId == distance.Id && pri.CapacityId == car.CapacityId && pri.Status == CommonConstants.Status.Active);
                    if (price != null)
                    {
                        result.Data = price.Money;
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

        public async Task<ResponseResult> Filter(DateTime fromDate, DateTime toDate)
        {
            var result = new ResponseResult();
            try
            {
                if (fromDate.Date > toDate.Date)
                {
                    ResponseResultHelper.MakeFailure(result, "Từ ngày phải bé hơn Đến ngày");
                    return result;
                }

                if ((toDate.Date - fromDate.Date).TotalDays > 92)
                {
                    ResponseResultHelper.MakeFailure(result, "Pham vi lọc phải bé hơn 3 tháng");
                    return result;
                }


                var query = await _repo.Where(tr => fromDate.Date <= tr.TransportDate.Date && tr.TransportDate.Date <= toDate.Date && tr.Status != CommonConstants.Status.Deleted);
                var transportations = query.ToList();


                var transportationGetAllViewModels = new List<TransportationGetAllViewModel>();

                foreach (var transportation in transportations)
                {
                    _repo.EntryReference(transportation, e => e.Car);
                    _repo.EntryReference(transportation, e => e.DriverPrimary);
                    _repo.EntryReference(transportation, e => e.DriverSecondary);

                    var newRecord = _mapper.Map<Transportation, TransportationGetAllViewModel>(transportation);
                    var companiesString = new List<string>();
                    var companyIds = JsonConvert.DeserializeObject<List<int>>(transportation.CompanyIds);
                    foreach (var companyId in companyIds)
                    {
                        var company = await _companyRepo.GetById(companyId);
                        if (company != null)
                        {
                            companiesString.Add($"{company.Code}|{company.Name}");
                        }
                    }


                    newRecord.Companies = string.Join(" - ", companiesString);
                    transportationGetAllViewModels.Add(newRecord);
                }
                var pagination = new Pagination();
                pagination.Records = transportationGetAllViewModels;
                pagination.TotalRecords = transportationGetAllViewModels.Count;

                result.Data = pagination;
                ResponseResultHelper.MakeSuccess(result);
            }
            catch (Exception ex)
            {
                ResponseResultHelper.MakeException(result, ex);
            }
            return result;
        }

        #region Override Methods
        public override void GetAllEntry(Transportation entity)
        {
            _repo.EntryReference(entity, e => e.Car);
            _repo.EntryReference(entity, e => e.DriverPrimary);
            _repo.EntryReference(entity, e => e.DriverSecondary);
        }
        public override void GetByIdEntry(Transportation entity)
        {
        }

        public override string CustomGetAllResult(Pagination pagination)
        {
            var newRecords = new List<TransportationGetAllViewModel>();

            foreach (var item in pagination.Records)
            {
                var newRecord = _mapper.Map<Transportation, TransportationGetAllViewModel>(item);


                var companiesString = new List<string>();
                var companyIds = JsonConvert.DeserializeObject<List<int>>(item.CompanyIds);
                foreach (var companyId in companyIds)
                {
                    var company = _companyRepo.GetById(companyId).Result;
                    if (company != null)
                    {
                        companiesString.Add($"{company.Code}|{company.Name}");
                    }
                }


                newRecord.Companies = string.Join(" - ", companiesString);
                newRecords.Add(newRecord);
            }
            pagination.Records = newRecords;
            return "Custom";
        }

        public override string BeforeInsert(Transportation entity)
        {
            SortCompanyByDistance(entity);
            return string.Empty;
        }

        public override string BeforeUpdate(Transportation entity)
        {
            SortCompanyByDistance(entity);
            return string.Empty;
        }


        #endregion

        #region Private method
        private bool DistanceCondition(Distance entity, int distance)
        {
            var arr = entity.Description.Split('-');
            var min = Convert.ToInt32(arr[0]);
            var max = Convert.ToInt32(arr[1]);

            return min <= distance && distance <= max && entity.Status == CommonConstants.Status.Active;
        }
        private void SortCompanyByDistance(Transportation entity)
        {
            var companyIds = JsonConvert.DeserializeObject<List<int>>(entity.CompanyIds);
            var companies = new List<Company>();
            foreach (var companyId in companyIds)
            {
                var company = _companyRepo.GetById(companyId).Result;
                if (company != null)
                {
                    companies.Add(company);
                }
            }

            entity.CompanyIds = JsonConvert.SerializeObject(companies.OrderBy(c => c.Distance).Select(c => c.Id));
        }

        #endregion
    }
}