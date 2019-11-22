using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Infrastructure.EF.Entities;

namespace Infrastructure.EF.Context
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        #region --DBSET--
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<Capacity> Capacity { get; set; }
        public virtual DbSet<Car> Car { get; set; }
        public virtual DbSet<Distance> Distance { get; set; }
        public virtual DbSet<Driver> Driver { get; set; }
        public virtual DbSet<DriverType> DriverType { get; set; }
        public virtual DbSet<Price> Price { get; set; }
        public virtual DbSet<Transportation> Transportation { get; set; }
        #endregion --DBSET--

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
