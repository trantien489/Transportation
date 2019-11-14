using System;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class ArticleImageCreateViewModel
    {        
        //public long ArticleId { get; set; }
        public long ImageId { get; set; }
        public int Order { get; set; }
        public int? MinHeight { get; set; }
        public int? MinWidth { get; set; }
        public int Status { get; set; }
    }
    public class ArticleImageUpdateViewModel : ArticleImageCreateViewModel
    {
        public long ArticleId { get; set; }
        public long Id { get; set; }
    }
    public class ArticleImageGetAllViewModel : ArticleImageUpdateViewModel
    {
        public string ArticleTitle { get; set; }
        public string ImageName { get; set; }
    }
    public class ArticleImageGetByIdViewModel : ArticleImageUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
