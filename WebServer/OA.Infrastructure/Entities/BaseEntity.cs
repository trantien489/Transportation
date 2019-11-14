using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Infrastructure.EF.Entities
{
    public abstract class BaseEntity
    {
        public long Id { get; set; }
        //
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedDate { get; set; }
        //
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? UpdatedDate { get; set; }
        //
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public int? Status { get; set; }
    }
}
