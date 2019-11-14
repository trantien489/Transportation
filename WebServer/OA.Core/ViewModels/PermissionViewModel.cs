using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class PermissionCreateViewModel
    {
        [Required]
        public string ControllerName { get; set; }
        [Required]
        public string ActionName { get; set; }
        public string HttpMethod { get; set; }
        public int? Status { get; set; }
    }
    public class PermissionUpdateViewModel : PermissionCreateViewModel
    {
        public long Id { get; set; }
    }
    public class PermissionGetAllViewModel : PermissionUpdateViewModel
    {
    }
    public class PermissionGetByIdViewModel : PermissionUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
    public class ControllersActionsMethods
    {
        public List<string> ControllersName { get; set; }
        public List<string> ActionsName { get; set; }
        public List<string> HttpMethodsName { get; set; }
    }
    public class PermissionSearchRequestViewModel
    {
        public PermissionSearchRequestViewModel()
        {
            RoleIds = new List<Guid>();
        }
        [Required]
        public string ControllerName { get; set; }

        public List<Guid> RoleIds { get; set; }
    }

    public class PermissionSearchViewModel : PermissionUpdateViewModel
    {
        public List<Guid> RoleIds { get; set; }
    }

    public class PermissionSaveRequestViewModel
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public List<Guid> RoleIds { get; set; }
    }
}
