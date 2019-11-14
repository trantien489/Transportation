using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class PermissionRolesCreateViewModel
    {
        [Required]
        public long PermissionId { get; set; }
        [Required]
        public string RoleId { get; set; }
        public int? Status { get; set; }
    }
    public class PermissionRolesUpdateViewModel : PermissionRolesCreateViewModel
    {
        public long Id { get; set; }
    }
    public class PermissionRolesGetAllViewModel : PermissionRolesUpdateViewModel
    {
        public string RoleName { get; set; }
        public string ControllerName { get; set; }
        public string ActionName { get; set; }
        public string HttpMethod { get; set; }
    }
    public class PermissionRolesGetByIdViewModel : PermissionRolesGetAllViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
