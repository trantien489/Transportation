using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class CarCreateViewModel
    {
        [Required]
        public string CarNumber { get; set; }

        public string Note { get; set; }

        [Required]
        public long CapacityId { get; set; }

        [Required]
        public double Length { get; set; }

        [Required]
        public double Width { get; set; }

        [Required]
        public double Height { get; set; }
    }
    public class CarUpdateViewModel : CarCreateViewModel
    {
        public long Id { get; set; }
    }
    public class CarGetAllViewModel 
    {
        public long Id { get; set; }
        public string CarNumber { get; set; }
        public string CapacityType { get; set; }

        public double Length { get; set; }

        public double Width { get; set; }

        public double Height { get; set; }
        public string Note { get; set; }
        public int Status { get; set; }
    }
    public class CarGetByIdViewModel : CarUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}