using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ContactCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Company { get; set; }
        public string Address { get; set; }
        [Required]
        public string Mobile { get; set; }
        public string Mail { get; set; }
        public string Detail { get; set; }
        public int Status { get; set; }
    }
    public class ContactUpdateViewModel : ContactCreateViewModel
    {
        public long Id { get; set; }
    }
    public class ContactGetAllViewModel : ContactUpdateViewModel
    {
    }
    public class ContactGetByIdViewModel : ContactUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
