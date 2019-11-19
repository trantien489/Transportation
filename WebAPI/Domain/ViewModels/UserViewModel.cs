using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ViewModels
{
    public class UserViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string UserName { get; set; }

        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
    public class UserCreateViewModel : UserViewModel
    {
        [Required]
        public string Password { get; set; }
    }
}
