using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ProvinceCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class ProvinceUpdateViewModel : ProvinceCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ProvinceGetAllViewModel : ProvinceUpdateViewModel
    {
        public string LanguageName { get; set; }
    }
    public class ProvinceGetByIdViewModel : ProvinceUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
