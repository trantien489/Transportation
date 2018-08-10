using Microsoft.AspNetCore.Identity;
using Model.Context;
using Model.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.SeedData
{
    public class DbInitializer : IDbInitializer
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public DbInitializer(
            ApplicationDbContext context,
            UserManager<AppUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        //This example just creates an Administrator role and one Admin users
        public async Task<bool> Initialize()
        {
            //create database schema if none exists
            _context.Database.EnsureCreated();

            //If there is already an Administrator role, abort
          //  IdentityResult ir = new IdentityResult();
            
            if (_context.Roles.Any(r => r.Name == "Admin")) return true;

            //Create the Administartor Role
            await _roleManager.CreateAsync(new IdentityRole("Admin"));
            await _roleManager.CreateAsync(new IdentityRole("Customer"));

            //Create the default Admin account and apply the Admin role
            string username = "admin";
            string password = "Abc123456!";
            string email = "test@gmail.com";
            var appUser = new AppUser { UserName = username, Email = email, EmailConfirmed = true };

            try
            {
               await _userManager.CreateAsync(appUser, password);
            }
            catch ( Exception ex)
            {
                throw ex;
            }

            await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(username), "Admin");
            return true;
        }
    }
}
