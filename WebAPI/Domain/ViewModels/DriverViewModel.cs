using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class DriverCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Phone1 { get; set; }
        [Required]
        public string Note { get; set; }
        [Required]
        public long DriverTypeId { get; set; }

        public string Address { get; set; }
        public string Phone2 { get; set; }
    }
    public class DriverUpdateViewModel : DriverCreateViewModel
    {
        public long Id { get; set; }
    }
    public class DriverGetAllViewModel : DriverUpdateViewModel
    {
    }
    public class DriverGetByIdViewModel : DriverUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}