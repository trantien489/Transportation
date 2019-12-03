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
        public List<int> CompanyIds { get; set; }
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

    public class TransportationGetByIdViewModel : TransportationUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }

    public class TransportationGetAllViewModel
    {
        public long Id { get; set; }
        public DateTime TransportDate { get; set; }
        public string CarNumber { get; set; }
        public string DocumentNumber { get; set; }
        public string Companies { get; set; }
        public string Report { get; set; }
        public string MoneyCurrency { get; set; }
        public string Note { get; set; }
        public string DriverPrimaryName { get; set; }
        //public string DriverSecondaryName { get; set; }
        public int Status { get; set; }
    }

    public class GenerateMoneyViewModel
    {
        public GenerateMoneyViewModel()
        {
            CompanyIds = new List<int>();
        }
        public List<int> CompanyIds { get; set; }
        public long CarId { get; set; }
    }
}