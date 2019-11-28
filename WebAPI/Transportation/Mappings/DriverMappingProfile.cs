using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class DriverMappingProfile : Profile
    {
        public DriverMappingProfile()
        {
            //Insert
            CreateMap<DriverCreateViewModel, Driver>();
            // Update
            CreateMap<DriverUpdateViewModel, Driver>();
            //GetAll
            CreateMap<Driver, DriverGetAllViewModel>()
                .ForMember(des => des.DriverTypeName, map => map.MapFrom(src => src.DriverType.Type));
            //GetById
            CreateMap<Driver, DriverGetByIdViewModel>();
        }
    }
}