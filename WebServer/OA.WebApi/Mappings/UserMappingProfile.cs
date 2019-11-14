using AutoMapper;
using OA.Core.Models.ViewModels;
using OA.Core.ViewModels;
using OA.Infrastructure.EF.Entities;
namespace OA.WebApi.Mappings
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            //Insert
            CreateMap<UserCreateViewModel, ApplicationUser>();
            //Update
            CreateMap<UserUpdateViewModel, ApplicationUser>();
            //Get All
            CreateMap<ApplicationUser, UserGetAllViewModel>();
            //Get By Id
            CreateMap<ApplicationUser, UserGetByIdViewModel>();
        }
    }
}
