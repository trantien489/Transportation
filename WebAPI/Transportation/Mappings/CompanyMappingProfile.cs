using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class CompanyMappingProfile : Profile
    {
        public CompanyMappingProfile()
        {
            //Insert
            CreateMap<CompanyCreateViewModel, Company>();
            // Update
            CreateMap<CompanyUpdateViewModel, Company>();
            //GetAll
            CreateMap<Company, CompanyGetAllViewModel>();
            //GetById
            CreateMap<Company, CompanyGetByIdViewModel>();
        }
    }
}
