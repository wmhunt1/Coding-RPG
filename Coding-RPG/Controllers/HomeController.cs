using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Coding_RPG.Models;

namespace Coding_RPG.Controllers;

public class HomeController : Controller
{
    public Character hero = new Character("Hero");
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        //ViewData["Character"] = hero;
        //ViewBag.Character = hero;
        //TempData["tempChar"] = hero;
        ViewBag.CharacterData=hero;
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Character()
    {
        ViewBag.CharacterData=hero;
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
