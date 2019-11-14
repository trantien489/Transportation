using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ProductInstallmentCreateViewModel
    {
        [Required]
        public long ProductId { get; set; }
        [Required]
        public long FinanceCompanyId { get; set; }
        public decimal? PrePayment { get; set; }
        public int? PayPerMonth { get; set; }
    }
    public class ProductInstallmentUpdateViewModel : ProductInstallmentCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ProductInstallmentGetAllViewModel : ProductInstallmentUpdateViewModel
    {
        public string FinanceCompanyName { get; set; }
        public string ProductName { get; set; }
    }
    public class ProductInstallmentGetByIdViewModel : ProductInstallmentUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
