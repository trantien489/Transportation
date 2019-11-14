using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class PromotionCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public double Discount { get; set; }
        [Required]
        public DateTime FromDate { get; set; }
        [Required]
        public DateTime ToDate { get; set; }
        [Required]
        public long GroupProductId { get; set; }
        public int Status { get; set; }
        public List<PromotionDetailCreateViewModel> PromotionDetail { get; set; }
    }
    public class PromotionUpdateViewModel : PromotionCreateViewModel
    {
        public long Id { get; set; }
        public new List<PromotionDetailUpdateViewModel> PromotionDetail { get; set; }
    }
    public class PromotionGetAllViewModel : PromotionUpdateViewModel
    {
        public string GroupProductName { get; set; }
    }
    public class PromotionGetByIdViewModel : PromotionUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
