using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Model.SeedData
{
    public interface IDbInitializer
    {
        Task<bool> Initialize();
    }
}
