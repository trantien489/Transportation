using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ProductImageCreateViewModel
    {
        //public long ProductId { get; set; }
        [Required]
        public long ImageId { get; set; }
        [Required]
        public int Order { get; set; }
        public int? MinHeight { get; set; }
        public int? MinWidth { get; set; }
        public int Status { get; set; }
    }
    public class ProductImageUpdateViewModel : ProductImageCreateViewModel
    {
        public long ProductId { get; set; }
        public long Id { get; set; }
    }
    public class ProductImageGetAllViewModel : ProductImageUpdateViewModel
    {
        public string ProductName { get; set; }
        public string ImageName { get; set; }
    }
    public class ProductImageGetByIdViewModel : ProductImageUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
