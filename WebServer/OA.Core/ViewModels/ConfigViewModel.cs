using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ConfigCreateViewModel
    {
        [Required]
        public string Description { get; set; }
        [Required]
        public string Key { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public long ConfigTypeId { get; set; }
        public int Status { get; set; }
    }
    public class ConfigUpdateViewModel : ConfigCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ConfigGetAllViewModel : ConfigUpdateViewModel
    {
        public string ConfigTypeDescription { get; set; }
    }
    public class ConfigGetByIdViewModel : ConfigUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
