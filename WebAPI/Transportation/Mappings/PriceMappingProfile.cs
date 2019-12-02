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
            CreateMap<Price, PriceGetAllViewModel>()
                .ForMember(des => des.DistanceDescription, map => map.MapFrom(src => src.Distance.Description))
                .ForMember(des => des.CapcityType, map => map.MapFrom(src => src.Capacity.Type))
                .ForMember(des => des.MoneyCurrency, map => map.MapFrom(src => src.Money.ToString("N0")));

            //GetById
            CreateMap<Price, PriceGetByIdViewModel>();
        }
    }
}