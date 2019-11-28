using AutoMapper;
using Domain.ViewModels;

namespace Transportation.Mappings
{
    public class TransportationMappingProfile : Profile
    {
        public TransportationMappingProfile()
        {
            //Insert
            CreateMap<TransportationCreateViewModel, Infrastructure.EF.Entities.Transportation>();
            // Update
            CreateMap<TransportationUpdateViewModel, Infrastructure.EF.Entities.Transportation>();
            //GetAll
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetAllViewModel>()
                .ForMember(des => des.CompanyName, map => map.MapFrom(src => src.Company.Name))
                .ForMember(des => des.CarNumber, map => map.MapFrom(src => src.Car.CarNumber))
                .ForMember(des => des.DriverPrimaryName, map => map.MapFrom(src => src.DriverPrimary.Name))
                .ForMember(des => des.DriverSecondaryName, map => map.MapFrom(src => src.DriverSecondary.Name))
                //.ForMember(des => des.TransportDate, map => map.MapFrom(src => src.TransportDate.ToString("d/M/yyyy hh:mm tt")))
                ;
            //GetById
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetByIdViewModel>();
        }
    }
}
