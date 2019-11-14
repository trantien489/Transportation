using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class PaymentCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public int Status { get; set; }
    }
    public class PaymentUpdateViewModel : PaymentCreateViewModel
    {
        public long Id { get; set; }
    }
    public class PaymentGetAllViewModel : PaymentUpdateViewModel
    {
    }
    public class PaymentGetByIdViewModel : PaymentUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
