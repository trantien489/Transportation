using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class MenuCreateViewModel
    {
        [Required]
        public string Name { get; set; }
        public string Link { get; set; }
        [Required]
        public int Order { get; set; }
        public long? ParentId { get; set; }
        public string Icon { get; set; }
        public string GroupName { get; set; }
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class MenuUpdateViewModel : MenuCreateViewModel
    {
        public int Id { get; set; }
    }
    public class MenuGetAllViewModel : MenuUpdateViewModel
    {
        public List<MenuGetAllViewModel> Children { get; set; }
        public string LanguageName { get; set; }
    }
    public class MenuGetByIdViewModel : MenuUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
