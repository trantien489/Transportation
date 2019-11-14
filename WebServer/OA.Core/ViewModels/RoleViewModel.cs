using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels.Role
{    
    public class UpdateRoleModel
    {
        public string UserId { get; set; }
        public List<string> AssignRoles { get; set; }
    }
    public class RoleCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public int? Status { get; set; }
    }
    public class RoleUpdateViewModel : RoleCreateViewModel
    {
        public string Id { get; set; }
    }
    public class RoleGetAllViewModel : RoleUpdateViewModel
    {
    }
    public class RoleGetByIdViewModel : RoleUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
