using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models
{
    public class ResponseResult
    {
        public int? ErrorNumber { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }
        public bool Success { get; set; }
    }
}
