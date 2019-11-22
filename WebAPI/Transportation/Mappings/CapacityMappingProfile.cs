using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class CapacityMappingProfile : Profile
    {
        public CapacityMappingProfile()
        {
            //Insert
            CreateMap<CapacityCreateViewModel, Capacity>();
            // Update
            CreateMap<CapacityUpdateViewModel, Capacity>();
            //GetAll
            CreateMap<Capacity, CapacityGetAllViewModel>();
            //GetById
            CreateMap<Capacity, CapacityGetByIdViewModel>();
        }
    }
}