using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class GroupProductCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Content { get; set; }
        public string Images { get; set; }
        [Required]
        public int Order { get; set; }
        public long? ParentId { get; set; }
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class GroupProductUpdateViewModel : GroupProductCreateViewModel
    {
        public long Id { get; set; }
    }
    public class GroupProductGetAllViewModel : GroupProductUpdateViewModel
    {
        public List<GroupProductGetAllViewModel> Children { get; set; }
    }
    public class GroupProductGetByIdViewModel : GroupProductUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
