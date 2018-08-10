using AutoMapper;
using Model.Entity;
using SampleAPIs.BindingModels.Account;

namespace SampleAPIs.Mapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>();
        }
    }
}
