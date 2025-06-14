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
            return View();
        }

        

        public IActionResult RAEX()
        {
            return View();
        }
        public IActionResult Kabinet()
        {
            return View();
        }
        public IActionResult Guide()
        {
            return View();
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

        public IActionResult Prof()
        {
            return View();
        }

        public IActionResult Result()
        {
            return View();
        }

        public IActionResult Calc()
        {
            return View();
        }

        public IActionResult Open_doors()
        {
            return View();
        }

        public IActionResult Index_rabota()
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
    