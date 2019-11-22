using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Price : BaseEntity
    {
        public long DistanceId { get; set; }
        public long CapacityId { get; set; }
        public decimal Money { get; set; }

        public virtual Capacity Capacity { get; set; }
        public virtual Distance Distance { get; set; }
    }
}
