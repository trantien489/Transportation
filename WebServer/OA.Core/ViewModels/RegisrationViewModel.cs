namespace OA.Core.Models.ViewModels
{
    public class RegistrationViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Location { get; set; }
        public int? FacebookId { get; set; }
        public string PictureUrl { get; set; }
        public int Status { get; set; } = 1; //set default value
    }
    public class GetAllUserViewModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PictureUrl { get; set; }
        public int Status { get; set; }
    }
}
