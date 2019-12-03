using System.Collections.Generic;
using AutoMapper;
using Domain.ViewModels;
using Newtonsoft.Json;

namespace Transportation.Mappings
{
    public class TransportationMappingProfile : Profile
    {
        public TransportationMappingProfile()
        {
            //Insert
            CreateMap<TransportationCreateViewModel, Infrastructure.EF.Entities.Transportation>()
                .ForMember(des => des.CompanyIds, map => map.MapFrom(src => JsonConvert.SerializeObject(src.CompanyIds)));
            
            // Update
            CreateMap<TransportationUpdateViewModel, Infrastructure.EF.Entities.Transportation>()
                .ForMember(des => des.CompanyIds, map => map.MapFrom(src => JsonConvert.SerializeObject(src.CompanyIds)));

            //GetAll
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetAllViewModel>()
                //.ForMember(des => des.CompanyName, map => map.MapFrom(src => src.Company.Name))
                .ForMember(des => des.CarNumber, map => map.MapFrom(src => src.Car.CarNumber))
                .ForMember(des => des.DriverPrimaryName, map => map.MapFrom(src => src.DriverPrimary.Name))
                //.ForMember(des => des.DriverSecondaryName, map => map.MapFrom(src => src.DriverSecondary.Name))
                .ForMember(des => des.MoneyCurrency, map => map.MapFrom(src => src.Money.ToString("N0")))
                ;
            //GetById
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetByIdViewModel>()
                 .ForMember(des => des.CompanyIds, map => map.MapFrom(src => JsonConvert.DeserializeObject<List<int>>(src.CompanyIds)));
        }
    }
}
