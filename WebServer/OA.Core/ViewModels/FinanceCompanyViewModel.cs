using OA.Infrastructure.EF.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class FinanceCompanyCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Logo { get; set; }
        public string Address { get; set; }
        [Required]
        public string Tel { get; set; }
    }
    public class FinanceCompanyUpdateViewModel : FinanceCompanyCreateViewModel
    {
        public int Id { get; set; }
    }
    public class FinanceCompanyGetAllViewModel : FinanceCompanyUpdateViewModel
    {
    }
    public class FinanceCompanyGetByIdViewModel : FinanceCompanyUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}