using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class LanguageResourceCreateViewModel
    {
        [Required]
        public string Key { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public long LanguageId { get; set; }
        public int Status { get; set; }
    }
    public class LanguageResourceUpdateViewModel : LanguageResourceCreateViewModel
    {
        public int Id { get; set; }
    }
    public class LanguageResourceGetAllViewModel : LanguageResourceUpdateViewModel
    {
        public string LanguageName { get; set; }
    }
    public class LanguageResourceGetByIdViewModel : LanguageResourceUpdateViewModel
    {
    }
}
