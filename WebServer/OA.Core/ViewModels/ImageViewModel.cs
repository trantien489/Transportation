using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ImageCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Alt { get; set; }
        [Required]
        public string Path { get; set; }
        public string Note { get; set; }
        [Required]
        public int ImageTypeId { get; set; }
        [Required]
        public string Base64String { get; set; }
        public int Status { get; set; }
    }
    public class ImageUpdateViewModel : ImageCreateViewModel
    {
        public int Id { get; set; }
    }
    public class ImageGetAllViewModel : ImageUpdateViewModel
    {
        public string ImageTypeName { get; set; }
    }
    public class ImageGetByIdViewModel : ImageUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
