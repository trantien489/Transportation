using System;
using System.Collections.Generic;
using System.Text;

namespace OA.Infrastructure.EF.Entities
{
    public class Company : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Distance { get; set; }
    }
}
