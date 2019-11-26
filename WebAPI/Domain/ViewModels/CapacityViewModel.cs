using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class CapacityCreateViewModel
    {
        [Required]
        public string Type { get; set; }
    }
    public class CapacityUpdateViewModel : CapacityCreateViewModel
    {
        public long Id { get; set; }
    }
    public class CapacityGetAllViewModel : CapacityUpdateViewModel
    { 
        public int Status { get; set; }
    }
    public class CapacityGetByIdViewModel : CapacityUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}
