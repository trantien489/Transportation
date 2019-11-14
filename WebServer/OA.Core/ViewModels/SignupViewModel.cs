using FluentValidation.Attributes;
using OA.Core.Models.ViewModels.Validations;
namespace OA.Core.Models.ViewModels
{
    [Validator(typeof(SignupViewModelValidator))]
	public class SignupViewModel
    {
		public string FirstName { get; set; }
		public string LastName { get; set; }
        public string EmailOrMobile { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}
