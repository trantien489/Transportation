using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ProductCreateViewModel
    {        
        [Required]
        public string Name { get; set; }
        [Required]
        public string SeoName { get; set; }
        public string Detail { get; set; }
        [Required]
        public decimal Price { get; set; }
        public decimal? PriceNew { get; set; }
        [Required]
        public int Order { get; set; }
        public long GroupProductId { get; set; }
        [Required]
        public bool IsPattern { get; set; }
        public long ManufactureId { get; set; }
        public long ShopId { get; set; }
        public long LanguageId { get; set; }
        public int Status { get; set; }
        public List<ProductImageCreateViewModel> ProductImage { get; set; }
    }
    public class ProductUpdateViewModel : ProductCreateViewModel
    {
        public long Id { get; set; }
        public new List<ProductImageUpdateViewModel> ProductImage { get; set; }
    }
    public class ProductGetAllViewModel : ProductUpdateViewModel
    {
        public string Code { get; set; }
        public string GroupProductName { get; set; }
        public string ManufactureName { get; set; }
        public string LanguageName { get; set; }
    }
    public class ProductGetByIdViewModel : ProductUpdateViewModel
    {
        public string Code { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
