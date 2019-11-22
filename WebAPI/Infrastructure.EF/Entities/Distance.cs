using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Distance : BaseEntity
    {
        public Distance()
        {
            Price = new HashSet<Price>();
        }

        public string Decripstion { get; set; }

        public virtual ICollection<Price> Price { get; set; }
    }
}
