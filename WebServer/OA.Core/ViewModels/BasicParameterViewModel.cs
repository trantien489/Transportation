using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class BasicParameterCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public long ProductId { get; set; }
        public int Status { get; set; }
    }
    public class BasicParameterUpdateViewModel : BasicParameterCreateViewModel
    {
        public long Id { get; set; }
    }
    public class BasicParameterGetAllViewModel : BasicParameterUpdateViewModel
    {
        public string ProductName { get; set; }
    }
    public class BasicParameterGetByIdViewModel : BasicParameterUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
