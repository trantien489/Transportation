using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Transportation : BaseEntity
    {
        public long CarId { get; set; }
        public long DriverPrimaryId { get; set; }
        public long? DriverSecondaryId { get; set; }
        public long CompanyId { get; set; }
        public string DocumentNumber { get; set; }
        public string Report { get; set; }
        public string Note { get; set; }
        public decimal Money { get; set; }
        public DateTime TransportDate { get; set; }

        public virtual Car Car { get; set; }
        public virtual Company Company { get; set; }
        public virtual Driver DriverPrimary { get; set; }
        public virtual Driver DriverSecondary { get; set; }
    }
}
