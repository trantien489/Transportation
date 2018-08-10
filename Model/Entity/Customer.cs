using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Entity
{
    public class Customer
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }  // navigation property
        public string Location { get; set; }
        public string Locale { get; set; }
        public string Gender { get; set; }
    }
}
