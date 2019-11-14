using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
namespace OA.Core.ViewModels
{
    public class FavoriteCreateViewModel
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public long ProductId { get; set; }
        [Required]
        public bool IsFavorite { get; set; }
        public int Status { get; set; }
    }
    public class FavoriteUpdateViewModel : FavoriteCreateViewModel
    {
        public int Id { get; set; }
    }
    public class FavoriteGetAllViewModel : FavoriteUpdateViewModel
    {
        public string ProductName { get; set; }
    }
    public class FavoriteGetByIdViewModel : FavoriteUpdateViewModel
    {
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
