using FluentValidation.Attributes;
using SampleAPIs.Validations;

namespace SampleAPIs.BindingModels.Auth
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
