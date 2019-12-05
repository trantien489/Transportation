using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class CompanyCreateViewModel
    {
        [Required]
        public string Code { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public double Distance { get; set; }


        public string Note { get; set; }
    }
    public class CompanyUpdateViewModel : CompanyCreateViewModel
    {
        public long Id { get; set; }
    }
    public class CompanyGetAllViewModel : CompanyUpdateViewModel
    {
        public int Status { get; set; }
    }
    public class CompanyGetByIdViewModel : CompanyUpdateViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
    }
}
