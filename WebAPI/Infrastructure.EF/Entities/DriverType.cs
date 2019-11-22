using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class DriverType : BaseEntity
    {
        public DriverType()
        {
            Driver = new HashSet<Driver>();
        }

        public string Type { get; set; }

        public virtual ICollection<Driver> Driver { get; set; }
    }
}
