using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class CarMappingProfile : Profile
    {
        public CarMappingProfile()
        {
            //Insert
            CreateMap<CarCreateViewModel, Car>();
            // Update
            CreateMap<CarUpdateViewModel, Car>();
            //GetAll
            CreateMap<Car, CarGetAllViewModel>()
                .ForMember(des => des.CapacityType, map => map.MapFrom(src => src.Capacity.Type));
            //GetById
            CreateMap<Car, CarGetByIdViewModel>();
        }
    }
}