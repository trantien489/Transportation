using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class CompanyCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string ShortName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Mobile { get; set; }
        public string Hotline { get; set; }
        public string Fax { get; set; }
        public string Map { get; set; }
        [Required]
        public string Logo { get; set; }
        public string SocialNetwork { get; set; }
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class CompanyUpdateViewModel : CompanyCreateViewModel
    {
        public long Id { get; set; }
    }
    public class CompanyGetAllViewModel : CompanyUpdateViewModel
    {
        public string LanguageName { get; set; }
    }
    public class CompanyGetByIdViewModel : CompanyUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
