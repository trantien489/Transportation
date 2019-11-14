using Microsoft.AspNetCore.Identity;
using System;
namespace OA.Infrastructure.EF.Entities
{
	public class ApplicationUser : IdentityUser
	{
        //public string Id { get; set; }
        //public int AccessFailedCount { get; set; }
        //public string ConcurrencyStamp { get; set; }
        //public string Email { get; set; }
        //public bool EmailConfirmed { get; set; }
        //public bool LockoutEnabled { get; set; }
        //public DateTimeOffset? LockoutEnd { get; set; }
        //public string NormalizedEmail { get; set; }
        //public string NormalizedUserName { get; set; }
        //public string PasswordHash { get; set; }
        //public string PhoneNumber { get; set; }
        //public bool PhoneNumberConfirmed { get; set; }
        //public string SecurityStamp { get; set; }
        //public bool TwoFactorEnabled { get; set; }
        //public string UserName { get; set; }
        public long? FacebookId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PictureUrl { get; set; }
        public string UserType { get; set; }
        //
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int? Status { get; set; }
    }
}
