using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class AdvertiseCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Image { get; set; }
        public int? Width { get; set; }
        public int? Height { get; set; }
        public string Link { get; set; }
        public int? Target { get; set; }
        [Required]
        public long TemplatePositionId { get; set; }
        [Required]
        public int Order { get; set; }
        public int? Status { get; set; }
    }
    public class AdvertiseUpdateViewModel : AdvertiseCreateViewModel
    {
        public long Id { get; set; }
    }
    public class AdvertiseGetAllViewModel : AdvertiseUpdateViewModel
    {
        public string TemplatePositionName { get; set; }
    }
    public class AdvertiseGetByIdViewModel : AdvertiseUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
