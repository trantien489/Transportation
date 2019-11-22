using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class DistanceMappingProfile : Profile
    {
        public DistanceMappingProfile()
        {
            //Insert
            CreateMap<DistanceCreateViewModel, Distance>();
            // Update
            CreateMap<DistanceUpdateViewModel, Distance>();
            //GetAll
            CreateMap<Distance, DistanceGetAllViewModel>();
            //GetById
            CreateMap<Distance, DistanceGetByIdViewModel>();
        }
    }
}