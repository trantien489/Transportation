using Microsoft.AspNetCore.Mvc.ModelBinding;
using OA.Core.Models;
namespace OA.Service.Helpers
{
    public static class Errors
    {
        public static ModelStateDictionary AddErrorsToModelState(ApplicationIdentityResponse response, ModelStateDictionary modelState)
        {
            foreach (var e in response.Errors)
            {
                modelState.TryAddModelError(e.Code, e.Description);
            }
            return modelState;
        }
        public static ModelStateDictionary AddErrorToModelState(string code, string description, ModelStateDictionary modelState)
        {
            modelState.TryAddModelError(code, description);
            return modelState;
        }
    }
}
