using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Infrastructure.EF.Entities
{
    public class ApplicationRole : IdentityRole
    {
        public ApplicationRole() : base()
        { }
        public ApplicationRole(string roleName) : base(roleName)
        {
        }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int? Status { get; set; }
    }
}
