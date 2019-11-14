using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace OA.Core.Models
{
    public class AuthModel
    {
    }
    public class ApplicationIdentityResponse
    {
        public bool Succeeded { get; set; }
        public List<ApplicationIdentityError> Errors { get; set; }
    }
    public class ApplicationIdentityError
    {
        public string Code { get; set; }
        public string Description { get; set; }
    }
    public class AuthExternalModel
    {
        public string AccessToken { get; set; }
    }

    public class GoogleUser
    {
        public System.Guid id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string oauthSubject { get; set; }
        public string oauthIssuer { get; set; }
    }

    public class GoogleAuthViewModel
    {
        public string tokenId { get; set; }
    }

    public class FacebookAuthViewModel
    {
        public string AccessToken { get; set; }
    }

    public class MicrosoftAuthViewModel
    {
        public string AccessToken { get; set; }
        public int id { get; set; }
        public string userPrincipalName { get; set; }
        public string email { get; set; }
    }

}
