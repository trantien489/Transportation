using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Capacity : BaseEntity
    {
        public Capacity()
        {
            Car = new HashSet<Car>();
            Price = new HashSet<Price>();
            PriceAdjustment = new HashSet<PriceAdjustment>();
        }

        public string Type { get; set; }

        public virtual ICollection<Car> Car { get; set; }
        public virtual ICollection<Price> Price { get; set; }
        public virtual ICollection<PriceAdjustment> PriceAdjustment { get; set; }

    }
}
