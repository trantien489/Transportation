using OA.Infrastructure.EF.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class BonusCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime FromDate { get; set; }
        [Required]
        public DateTime ToDate { get; set; }
        [Required]
        public long GroupProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
        public int Status { get; set; }
        public List<BonusDetailCreateViewModel> BonusDetail { get; set; }
    }
    public class BonusUpdateViewModel : BonusCreateViewModel
    {
        public int Id { get; set; }
        public new List<BonusDetailUpdateViewModel> BonusDetail { get; set; }
    }
    public class BonusGetAllViewModel : BonusUpdateViewModel
    {
        public string GroupProductName { get; set; }
    }
    public class BonusGetByIdViewModel : BonusUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}