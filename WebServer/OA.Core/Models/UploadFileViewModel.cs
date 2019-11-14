using System;
using System.Collections.Generic;
using System.Text;
namespace OA.Core.Models
{
    public class UploadFileModel
    {
        public Guid SessionId { get; set; } //c5535131-83aa-4814-8072-e789641b0e66
        public int PartNumber { get; set; } // 1 , 2 , 3 
        public string FileName { get; set; }
        public string Base64 { get; set; }
        public bool IsEnd { get; set; }
    }
}
