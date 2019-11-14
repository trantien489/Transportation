using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ShoppingCartDetailCreateViewModel
    {
        //[Required]
        //public long ShoppingCartId { get; set; }
        [Required]
        public long ProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string Price { get; set; }
        public int Status { get; set; }
    }
    public class ShoppingCartDetailUpdateViewModel : ShoppingCartDetailCreateViewModel
    {
        public long ShoppingCartId { get; set; }
        public long Id { get; set; }
    }
    public class ShoppingCartDetailGetAllViewModel : ShoppingCartDetailUpdateViewModel
    {
        public string ProductName { get; set; }
        public string ShoppingCartName { get; set; }
    }
    public class ShoppingCartDetailGetByIdViewModel : ShoppingCartDetailUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
