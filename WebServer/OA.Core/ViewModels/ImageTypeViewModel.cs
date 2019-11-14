using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ImageTypeCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [MaxLength(2, ErrorMessage = "ShortName maximum of only 2 characters")]
        public string ShortName { get; set; }
        [Required]
        public int Width { get; set; }
        [Required]
        public int Height { get; set; }
        public int Status { get; set; }
    }
    public class ImageTypeUpdateViewModel: ImageTypeCreateViewModel
    {
        public long Id { get; set; }       
    }
    public class ImageTypeGetAllViewModel : ImageTypeUpdateViewModel
    {
    }
    public class ImageTypeGetByIdViewModel : ImageTypeUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
