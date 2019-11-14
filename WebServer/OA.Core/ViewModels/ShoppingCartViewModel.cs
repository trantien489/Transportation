using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ShoppingCartCreateViewModel
    {
        public string DiscountCode { get; set; }
        [Required]
        public decimal DiscountPrice { get; set; }
        [Required]
        public decimal TransportFee { get; set; }
        [Required]
        public decimal TotalMoney { get; set; }
        [Required]
        public string UserId { get; set; }
        public long? ShipmentDetailId { get; set; }
        public int Status { get; set; }
        public List<ShoppingCartDetailCreateViewModel> ShoppingCartDetail { get; set; }
    }
    public class ShoppingCartUpdateViewModel : ShoppingCartCreateViewModel
    {
        public long Id { get; set; }
        public new List<ShoppingCartDetailUpdateViewModel> ShoppingCartDetail { get; set; }
    }
    public class ShoppingCartGetAllViewModel : ShoppingCartUpdateViewModel
    {
        public string ShipmentDetailName { get; set; }
    }
    public class ShoppingCartGetByIdViewModel : ShoppingCartUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
