using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace OA.Core.ViewModels
{
    public class UserViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PictureUrl { get; set; }
        public string UserType { get; set; }
        public long? FacebookId { get; set; }
    }
    public class UserCreateViewModel: UserViewModel
    {
        [Required]
        public string Password { get; set; }
    }
    public class UserUpdateViewModel : UserViewModel
    {
        public string Id { get; set; }
        public int? Status { get; set; }
    }
    public class UserGetAllViewModel : UserUpdateViewModel
    {
    }
    public class UserGetByIdViewModel : UserUpdateViewModel
    {
        public List<string> Roles { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
    public class ConfirmAccount
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public string Code { get; set; }
    }
}
