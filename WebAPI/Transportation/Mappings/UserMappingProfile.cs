using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.ViewModels;
using Infrastructure.EF.Entities;

namespace Transportation.Mappings
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            //Insert
            CreateMap<UserCreateViewModel, ApplicationUser>();
        }
    }
}
