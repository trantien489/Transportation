using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class PriceCreateViewModel
    {
        [Required]
        public long DistanceId { get; set; }
        [Required]
        public long CapacityId { get; set; }
        [Required]
        public decimal Money { get; set; }
    }
    public class PriceUpdateViewModel : PriceCreateViewModel
    {
        public long Id { get; set; }
    }
    public class PriceGetAllViewModel : PriceUpdateViewModel
    {
    }
    public class PriceGetByIdViewModel : PriceUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}