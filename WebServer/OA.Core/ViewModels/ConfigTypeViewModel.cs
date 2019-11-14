using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ConfigTypeCreateViewModel
    {
        [Required]
        public string Key { get; set; }
        [Required]
        public string Description { get; set; }
        public int Status { get; set; }
    }
    public class ConfigTypeUpdateViewModel : ConfigTypeCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ConfigTypeGetAllViewModel : ConfigTypeUpdateViewModel
    {
    }
    public class ConfigTypeGetByIdViewModel : ConfigTypeUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
