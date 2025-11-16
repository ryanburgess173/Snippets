using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MVCTestingGround.Models;

namespace MVCTestingGround.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IMemoryCache _cache;

    public HomeController(ILogger<HomeController> logger, IMemoryCache cache)
    {
        _logger = logger;
        _cache = cache;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult SubmitForm()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Process(string username)
    {
        if (_cache.Get("inProc_"+username) != null)
        {
            return Ok("ignore");
        }
        else {
            _cache.Set("inProc_" + username, true, TimeSpan.FromMinutes(2));
            Console.WriteLine("Processing submission...");
            Console.WriteLine("CACHED VALUE....: " + _cache.Get("inProc_" + username).ToString());
            return Ok("processing");
        }
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult ResultScreen()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

