using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class DistanceCreateViewModel
    {
        [Required]
        public string Decripstion { get; set; }

    }
    public class DistanceUpdateViewModel : DistanceCreateViewModel
    {
        public long Id { get; set; }
    }
    public class DistanceGetAllViewModel : DistanceUpdateViewModel
    {
        public int Status { get; set; }
    }
    public class DistanceGetByIdViewModel : DistanceUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}