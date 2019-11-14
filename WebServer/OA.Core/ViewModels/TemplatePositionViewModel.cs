using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class TemplatePositionCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Order { get; set; }
        public int Status { get; set; }
    }
    public class TemplatePositionUpdateViewModel : TemplatePositionCreateViewModel
    {
        public long Id { get; set; }
    }
    public class TemplatePositionGetAllViewModel : TemplatePositionUpdateViewModel
    {
    }
    public class TemplatePositionGetByIdViewModel : TemplatePositionUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
