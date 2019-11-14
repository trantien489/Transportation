using OA.Infrastructure.EF.Entities;
using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ShopCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        public string Hotline { get; set; }
        [Required]
        public string Mobile { get; set; }
        [Required]
        public long ProvinceId { get; set; }
        [Required]
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class ShopUpdateViewModel : ShopCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ShopGetAllViewModel : ShopUpdateViewModel
    {
        public string ProvinceName { get; set; }
        public string LanguageName { get; set; }
    }
    public class ShopGetByIdViewModel : ShopUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
