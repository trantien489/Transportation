using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Newtonsoft.Json;

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
        public int Status { get; set; }
        [JsonProperty(Order = 1)]
        public string DistanceDescription { get; set; }

        [JsonProperty(Order = 2)]
        public string CapcityType { get; set; }

        [JsonProperty(Order = 3)]
        public string MoneyCurrency { get; set; }
    }
    public class PriceGetByIdViewModel : PriceUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
    public class UpdatePrice
    {
        [Required]
        public long PriceId { get; set; }
        [Required]
        public decimal Money { get; set; }
    }
}