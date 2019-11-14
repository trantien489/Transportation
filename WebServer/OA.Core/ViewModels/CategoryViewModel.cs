using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class CategoryCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Image { get; set; }
        [Required]
        public int Order { get; set; }
        public long? ParentId { get; set; }
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class CategoryUpdateViewModel : CategoryCreateViewModel
    {
        public int Id { get; set; }
    }
    public class CategoryGetAllViewModel : CategoryUpdateViewModel
    {
        public List<CategoryGetAllViewModel> Children { get; set; }
    }
    public class CategoryGetByIdViewModel : CategoryUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
