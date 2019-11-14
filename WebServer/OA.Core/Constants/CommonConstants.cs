namespace OA.Core.Constants
{
    public static class CommonConstants
    {
        public struct Routes
        {
            public const string ApiVersion = "1.0";
            public const string BaseRoute = "api/{version:apiVersion}/[controller]/[action]";
            public const string AddNewRole = "{role}";
            public const string DeleteRole = "{role}";
            public const string AssignRole = "{userEmail}/{role}";
            public const string Id = "{id}";
        }
        public struct Authorize
        {
            //ROLES
            public const string SuperAdmin = "Super Administrator";
            public const string Admin = "Administrator";
            public const string SuperMod = "Super Moderator";
            public const string Mod = "Moderator";
            public const string SeniorMember = "Senior Member";
            public const string Member = "Member";
            //POLICY
            public const string PolicyAdmin = "Policy Administrator";
            public const string PolicyAdminMod = "Policy Administrator Moderator";
            public const string PolicyMod = "Policy Moderator";
            public const string PolicyMember = "Policy Member";
            //CUSTOM AUTHORIZATION
            public const string CustomAuthorization = "Custom Authorization";
        }
        public struct Status
        {
            public const int InActive = 0;
            public const int Active = 1;
            public const int Deleted = 2;
            public const int Authentics = 3; //product authentics, service for image
        }
        public struct AccountStatus
        {
            public const string MsgInActive = "Account is inactive!";
            public const string MsgActive = "Account is active!";
            public const string MsgDeleted = "Account is deleted!";
        }
        public struct FacebookAuthentication
        {
            public static string AccessTokenResponseUri = "https://graph.facebook.com/oauth/access_token?client_id={0}&client_secret={1}&grant_type=client_credentials";
            public static string AccessTokenValidationResponseUri = "https://graph.facebook.com/debug_token?input_token={0}&access_token={1}";
            public static string UserInfoResponseUri = "https://graph.facebook.com/v2.8/me?fields=id,email,first_name,last_name,name,gender,locale,birthday,picture&access_token={0}";
        }
        public struct LoggingEvents
        {
            public const int GenerateItems = 1000;
            public const int ListItems = 1001;
            public const int GetItem = 1002;
            public const int CreateItem = 1003;
            public const int UpdateItem = 1004;
            public const int DeleteItem = 1005;
            public const int GetItemNotFound = 4000;
            public const int UpdateItemNotFound = 4001;
        }
        public struct UserType
        {
            public const string Employee = "Employee";
            public const string Customer = "Customer";
        }
        public struct Update
        {
            public static string Success = "Success";
            public static string Error = "Error";
            public static string ExistCodeInSystem = "ExistedCodeInSystem";
        }
        public struct SpecialChar
        {
            public static char semicolon = ';';
            public static char underscore = '_';
        }
        public struct ConfigNumber
        {
            public const int limitRecord = 100;
            public const int limitRating = 5;
            public const int pageSizeDefault = 100;
        }
        public struct BonusNumber
        {
            public const int limitRecord = 100;
            public const int limitRating = 5;
            public const int pageSizeDefault = 100;
        }
        public struct LanguageResource
        {
            public const int limitRecord = 100;
            public const int limitRating = 5;
            public const int pageSizeDefault = 100;
        }
        public struct FavoriteNumber
        {
            public const int limitRecord = 100;
            public const int limitRating = 5;
            public const int pageSizeDefault = 100;
        }
        public struct BonusDetailNumber
        {
            public const int limitRecord = 100;
            public const int limitRating = 5;
            public const int pageSizeDefault = 100;
            public const int limitProductCode = 10;
        }
        public struct SpecialFields
        {
            public static string id = "id";
            public static string email = "email";
            public static string type = "type";
        }
        public struct Excel
        {

            public static string formatName = "yyyyMMdd_HHmmss";
            public static string fileNameExtention = ".xlsx";
            public static string openxmlformats = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        }
        public struct Validate
        {
            public static string idIsInvalid = "Id is invalid!";
            public static string keyIsInvalid = "Key is invalid!";
            public static string seoNameIsInvalid = "SeoName is invalid!";
        }
        public struct ConfigType
        {
            public const string Company = "Company";
            public const string SendMailAccount = "SendMailAccount";
            public const string SendMailParameters = "SendMailParameters";
            public const string SendMailTemplate = "SendMailTemplate";
        }

        public struct Select
        {
            public const int Take = 20;
        }
    }
}
