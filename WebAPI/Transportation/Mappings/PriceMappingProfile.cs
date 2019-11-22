using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class PriceMappingProfile : Profile
    {
        public PriceMappingProfile()
        {
            //Insert
            CreateMap<PriceCreateViewModel, Price>();
            // Update
            CreateMap<PriceUpdateViewModel, Price>();
            //GetAll
            CreateMap<Price, PriceGetAllViewModel>();
            //GetById
            CreateMap<Price, PriceGetByIdViewModel>();
        }
    }
}