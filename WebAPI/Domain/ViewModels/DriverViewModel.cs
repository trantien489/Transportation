using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text;
using Newtonsoft.Json;

namespace Domain.ViewModels
{
    public class DriverCreateViewModel
    {
        [JsonProperty(Order = 1)]
        [Required]
        public string Name { get; set; }

        [JsonProperty(Order = 2)]
        [Required]
        public string Phone1 { get; set; }

        [JsonProperty(Order = 3)]
        [Required]
        public string Address { get; set; }

        [JsonProperty(Order = 5)]
        [Required]
        public long DriverTypeId { get; set; }

        [JsonProperty(Order = 6)]
        public string Phone2 { get; set; }

        [JsonProperty(Order = 7)]
        public string Note { get; set; }

    }
    public class DriverUpdateViewModel : DriverCreateViewModel
    {
        public long Id { get; set; }
    }
    public class DriverGetAllViewModel : DriverUpdateViewModel
    {
        public int Status { get; set; }

        [JsonProperty(Order = 4)]
        public string DriverTypeName { get; set; }

    }
    public class DriverGetByIdViewModel : DriverUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}