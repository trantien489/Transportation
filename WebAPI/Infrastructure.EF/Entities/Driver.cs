using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Driver : BaseEntity
    {
        public Driver()
        {
            TransportationDriverPrimary = new HashSet<Transportation>();
            TransportationDriverSecondary = new HashSet<Transportation>();
            TransportationDriverThird = new HashSet<Transportation>();
        }

        public string Name { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string Address { get; set; }
        public string Note { get; set; }
        public long DriverTypeId { get; set; }

        public virtual DriverType DriverType { get; set; }
        public virtual ICollection<Transportation> TransportationDriverPrimary { get; set; }
        public virtual ICollection<Transportation> TransportationDriverSecondary { get; set; }
        public virtual ICollection<Transportation> TransportationDriverThird { get; set; }
    }
}
