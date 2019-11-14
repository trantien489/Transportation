using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class ManufactureCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string ShortName { get; set; }
        [Required]
        public string Logo { get; set; }
        public string Address { get; set; }
        [Required]
        public string Tel { get; set; }
        public int Status { get; set; }
    }
    public class ManufactureUpdateViewModel : ManufactureCreateViewModel
    {
        public int Id { get; set; }
    }
    public class ManufactureGetAllViewModel : ManufactureUpdateViewModel
    {
    }
    public class ManufactureGetByIdViewModel : ManufactureUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
