using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class PriceAdjustmentMappingProfile : Profile
    {
        public PriceAdjustmentMappingProfile()
        {
            //Insert
            CreateMap<PriceAdjustmentCreateViewModel, PriceAdjustment>();
            // Update
            CreateMap<PriceAdjustmentUpdateViewModel, PriceAdjustment>();
            //GetAll
            CreateMap<PriceAdjustment, PriceAdjustmentGetAllViewModel>()
                .ForMember(des => des.CompanyCode, map => map.MapFrom(src => src.Company.Code))
                .ForMember(des => des.CompanyName, map => map.MapFrom(src => src.Company.Name))
                .ForMember(des => des.CapcityType, map => map.MapFrom(src => src.Capacity.Type))
                .ForMember(des => des.UpPriceCurrency, map => map.MapFrom(src => src.UpPrice.ToString("N0")))
                .ForMember(des => des.DownPriceCurrency, map => map.MapFrom(src => src.DownPrice.ToString("N0")));

            //GetById
            CreateMap<PriceAdjustment, PriceAdjustmentGetByIdViewModel>();
        }
    }
}