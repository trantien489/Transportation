using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class PromotionDetailCreateViewModel
    {
        //[Required]
        //public long PromotionId { get; set; }
        [Required]
        public long ProductId { get; set; }
        [Required]
        public double Discount { get; set; }
        public int? Status { get; set; }
    }
    public class PromotionDetailUpdateViewModel : PromotionDetailCreateViewModel
    {
        public long PromotionId { get; set; }
        public long Id { get; set; }
    }
    public class PromotionDetailGetAllViewModel : PromotionDetailUpdateViewModel
    {
        public string ProductName { get; set; }
        public string PromotionName { get; set; }
    }
    public class PromotionDetailGetByIdViewModel : PromotionDetailUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
