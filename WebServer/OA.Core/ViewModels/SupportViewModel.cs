using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class SupportCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Tel { get; set; }
        public int? Type { get; set; }
        public string Nick { get; set; }
        public int? Order { get; set; }
        public int Status { get; set; }
    }
    public class SupportUpdateViewModel : SupportCreateViewModel
    {
        public long Id { get; set; }
    }
    public class SupportGetAllViewModel : SupportUpdateViewModel
    {
    }
    public class SupportGetByIdViewModel : SupportUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
