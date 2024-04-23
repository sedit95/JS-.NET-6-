using JSExamplies.Models.LoginModel;
using JSExamplies.Models.SignupModel;

namespace JSExamplies.Models
{
    public class LoginSignupRequestModel
    {
        public LoginRequestModel Login { get; set; }
        public SignupRequestModel Signup { get; set; }
    }
}
