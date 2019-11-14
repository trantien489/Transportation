using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class LanguageCreateViewModel
    {
        [Required]
        public string ShortName { get; set; }
        [Required]
        public string Name { get; set; }
        public string ResourceKey { get; set; }
        public bool? IsDefault { get; set; }
        public int Status { get; set; }
    }
    public class LanguageUpdateViewModel : LanguageCreateViewModel
    {
        public int Id { get; set; }
    }
    public class LanguageGetAllViewModel : LanguageUpdateViewModel
    {
    }
    public class LanguageGetByIdViewModel : LanguageUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
