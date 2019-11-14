using System.IO;
namespace OA.Core.Models
{
    public class ExcelStream
    {
        public MemoryStream Stream { get; set; }
        public string ExcelName { get; set; }
    }
}
