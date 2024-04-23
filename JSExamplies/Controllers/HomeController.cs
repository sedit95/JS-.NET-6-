using JSExamplies.Models;
using JSExamplies.Models.LoginModel;
using JSExamplies.Models.SignupModel;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace JSExamplies.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


      
        public IActionResult Index()
        {
         

            return View();
        }

        
        [HttpPost]
        public IActionResult Login(LoginSignupRequestModel model)
        {

            string mail = model.Login.mail;
            string password = model.Login.password;
           
           return RedirectToAction("Privacy");

        }

        
        [HttpPost]
        public IActionResult SignUp(LoginSignupRequestModel model)
        {

            string mail = model.Signup.mail;
            string password = model.Signup.password;
            string againPass = model.Signup.againPassword;

            return RedirectToAction("Index");
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}