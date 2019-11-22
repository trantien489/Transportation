using System;
using System.Collections.Generic;

namespace Infrastructure.EF.Entities
{
    public partial class Car : BaseEntity
    {
        public Car()
        {
            Transportation = new HashSet<Transportation>();
        }

        public string CarNumber { get; set; }
        public string Note { get; set; }
        public long CapacityId { get; set; }
        public double Length { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }

        public virtual Capacity Capacity { get; set; }
        public virtual ICollection<Transportation> Transportation { get; set; }
    }
}
