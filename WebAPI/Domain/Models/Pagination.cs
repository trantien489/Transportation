using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models
{
    public class Pagination
    {
        public long TotalRecords { get; set; }
        public IEnumerable<dynamic> Records { get; set; }
    }
}
