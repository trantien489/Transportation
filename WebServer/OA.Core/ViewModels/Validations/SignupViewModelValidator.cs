using FluentValidation;
namespace OA.Core.Models.ViewModels.Validations
{
    public class SignupViewModelValidator : AbstractValidator<SignupViewModel>
    {
        public SignupViewModelValidator()
        {
            RuleFor(vm => vm.EmailOrMobile).NotEmpty().WithMessage("EmailOrMobile cannot be empty");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            RuleFor(vm => vm.Password).Length(6, 12).WithMessage("Password must be between 6 and 12 characters");
            RuleFor(vm => vm.PasswordConfirm).NotEmpty().WithMessage("PasswordConfirm cannot be empty");
            RuleFor(vm => vm.PasswordConfirm).Length(6, 12).WithMessage("PasswordConfirm must be between 6 and 12 characters");
        }
    }
}
