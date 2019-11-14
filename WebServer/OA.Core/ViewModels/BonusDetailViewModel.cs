using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class BonusDetailCreateViewModel
    {
        [Required]
        public long ProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
    public class BonusDetailUpdateViewModel : BonusDetailCreateViewModel
    {
        public long BonusId { get; set; }
        public int Id { get; set; }
    }
    public class BonusDetailGetAllViewModel : BonusDetailUpdateViewModel
    {
        public string ProductName { get; set; }
        public string BonusName { get; set; }
    }
    public class BonusDetailGetByIdViewModel : BonusDetailUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
