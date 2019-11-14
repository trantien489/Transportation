using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ArticleCreateViewModel
    {        
        [Required]
        public string Title { get; set; }
        [Required]
        public string SeoTitle { get; set; }
        public string ShortContent { get; set; }
        [Required]
        public string Content { get; set; }
        public string Tags { get; set; }
        public int Order { get; set; }
        [Required]
        public string UserId { get; set; }
        public long CategoryId { get; set; }
        public long LanguageId { get; set; }
        public string RelationshipArticle { get; set; }
        public int Status { get; set; }
        public List<ArticleImageCreateViewModel> ArticleImage { get; set; }
    }
    public class ArticleUpdateViewModel : ArticleCreateViewModel
    {
        public long Id { get; set; }
        public new List<ArticleImageUpdateViewModel> ArticleImage { get; set; }
    }
    public class ArticleGetAllViewModel : ArticleUpdateViewModel
    {
        public string CategoryName { get; set; }
        public string LanguageName { get; set; }
    }
    public class ArticleGetByIdViewModel : ArticleUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
