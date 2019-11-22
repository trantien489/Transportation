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
            CreateMap<Car, CarGetAllViewModel>();
            //GetById
            CreateMap<Car, CarGetByIdViewModel>();
        }
    }
}