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
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetAllViewModel>();
            //GetById
            CreateMap<Infrastructure.EF.Entities.Transportation, TransportationGetByIdViewModel>();
        }
    }
}
