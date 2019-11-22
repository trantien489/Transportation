using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class TransportationCreateViewModel
    {
        [Required]
        public long CarId { get; set; }
        [Required]
        public long DriverPrimaryId { get; set; }
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public string DocumentNumber { get; set; }
        [Required]
        public decimal Money { get; set; }
        [Required]
        public DateTime TransportDate { get; set; }

        public long? DriverSecondaryId { get; set; }
        public string Report { get; set; }
        public string Note { get; set; }
    }
    public class TransportationUpdateViewModel : TransportationCreateViewModel
    {
        public long Id { get; set; }
    }
    public class TransportationGetAllViewModel : TransportationUpdateViewModel
    {
    }
    public class TransportationGetByIdViewModel : TransportationUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}