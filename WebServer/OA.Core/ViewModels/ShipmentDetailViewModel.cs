using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ShipmentDetailCreateViewModel
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Address { get; set; }
        public string Email { get; set; }
        [Required]
        public string Mobile { get; set; }
        public string Note { get; set; }
        [Required]
        public bool IsRequireOrder { get; set; }
        public string CompanyName { get; set; }
        public string BillAddress { get; set; }
        public string TaxCode { get; set; }
        public long? PaymentId { get; set; }
        public int? PaymentStatus { get; set; }
        [Required]
        public string PaymentNotes { get; set; }
        public int Status { get; set; }
    }
    public class ShipmentDetailUpdateViewModel : ShipmentDetailCreateViewModel
    {
    }
    public class ShipmentDetailGetAllViewModel : ShipmentDetailUpdateViewModel
    {
        public string PaymentName { get; set; }
    }
    public class ShipmentDetailGetByIdViewModel : ShipmentDetailUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
