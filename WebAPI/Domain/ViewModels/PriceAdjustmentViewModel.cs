using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class PriceAdjustmentCreateViewModel
    {
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public long CapacityId { get; set; }

        public decimal UpPrice { get; set; }
        public decimal DownPrice { get; set; }

    }
    public class PriceAdjustmentUpdateViewModel : PriceAdjustmentCreateViewModel
    {
        public long Id { get; set; }
    }
    public class PriceAdjustmentGetAllViewModel : PriceAdjustmentUpdateViewModel
    {
        [JsonProperty(Order = 1)]
        public string CompanyCode { get; set; }

        [JsonProperty(Order = 2)]
        public string CompanyName { get; set; }

        [JsonProperty(Order = 3)]
        public string CapcityType { get; set; }
        public int Status { get; set; }

        [JsonProperty(Order = 4)]
        public string UpPriceCurrency { get; set; }

        [JsonProperty(Order = 5)]
        public string DownPriceCurrency { get; set; }
    }
    public class PriceAdjustmentGetByIdViewModel : PriceAdjustmentUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}
