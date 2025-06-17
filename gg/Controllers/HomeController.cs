using gg.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace gg.Controllers

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
            return View("~/Views/Home/Pages/Index.cshtml");
        }

        

        public IActionResult RAEX()
        {
            return View("~/Views/Home/Pages/RAEX.cshtml");
        }
        public IActionResult Kabinet()
        {
            return View("~/Views/Home/Pages/Kabinet.cshtml");
        }
        public IActionResult Guide()
        {
            return View("~/Views/Home/Pages/Guide.cshtml");
        }

        public IActionResult Page_vuz()
        {
            return View();
        }

        public IActionResult SPB_vuz()
        {
            return View();
        }

        public IActionResult ITMO_vuz()
        {
            return View();
        }

        public IActionResult DRUZHBA_vuz()
        {
            return View();
        }

        public IActionResult SPBG_vuz()
        {
            return View();
        }

        public IActionResult Prof()
        {
            return View("~/Views/Home/Pages/Prof.cshtml");
        }

        public IActionResult Index_otz()
        {
            return View("~/Views/Home/Pages/Index_otz.cshtml");
        }

        public IActionResult Result()
        {
            return View();
        }

        public IActionResult Calc()
        {
            return View("~/Views/Home/Pages/Calc.cshtml");
        }

        public IActionResult Open_doors()
        {
            return View("~/Views/Home/Pages/Open_doors.cshtml");
        }

        public IActionResult Index_rabota()
        {
            return View("~/Views/Home/Pages/Index_rabota.cshtml");
        }


        public IActionResult Private_office()
        {
            return View("~/Views/Home/Pages/Private_office.cshtml");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
    