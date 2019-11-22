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
            modelBuilder.Entity<Transportation>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DocumentNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Money).HasColumnType("money");

                entity.Property(e => e.Note).HasMaxLength(200);

                entity.Property(e => e.Report).HasMaxLength(200);

                entity.Property(e => e.TransportDate).HasColumnType("datetime");

                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Transportation)
                    .HasForeignKey(d => d.CarId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Transportation_Car");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Transportation)
                    .HasForeignKey(d => d.CompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Transportation_Company");

                entity.HasOne(d => d.DriverPrimary)
                    .WithMany(p => p.TransportationDriverPrimary)
                    .HasForeignKey(d => d.DriverPrimaryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Transportation_Driver");

                entity.HasOne(d => d.DriverSecondary)
                    .WithMany(p => p.TransportationDriverSecondary)
                    .HasForeignKey(d => d.DriverSecondaryId)
                    .HasConstraintName("FK_Transportation_Driver1");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
