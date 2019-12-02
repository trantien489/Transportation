using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.EF.Entities
{
    public class Company : BaseEntity
    {
        public Company()
        {
        }

        public string Name { get; set; }
        public string Code { get; set; }
        public string Address { get; set; }
        public int Distance { get; set; }
        public string Note { get; set; }
    }
}
