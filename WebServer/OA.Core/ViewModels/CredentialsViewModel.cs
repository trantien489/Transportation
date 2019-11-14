using FluentValidation.Attributes;
using OA.Core.Models.ViewModels.Validations;
namespace OA.Core.Models.ViewModels
{
   	public class CredentialsViewModel
	{
		public string UserName { get; set; }
		public string Password { get; set; }
	}
}
