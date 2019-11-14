using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class CommentCreateViewModel
    {
        public string Content { get; set; }
        public int? Rating { get; set; }
        public long? ParentId { get; set; }
        [Required]
        public long ProductId { get; set; }
        [Required]
        public string FullName { get; set; }
        public string Email { get; set; }
        public int? Gender { get; set; }
        public string Image { get; set; }
        public int Status { get; set; }
    }
    public class CommentUpdateViewModel : CommentCreateViewModel
    {
        public long Id { get; set; }
    }
    public class CommentGetAllViewModel : CommentUpdateViewModel
    {
        public List<CommentGetAllViewModel> Children { get; set; }
    }
    public class CommentGetByIdViewModel : CommentUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
