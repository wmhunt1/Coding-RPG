using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GameMVC.Models;
using GameModels;

namespace GameMVC.Controllers;

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

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Character()
    {
        return View();
    }
    public IActionResult Abilities()
    {
        return View();
    }
    public IActionResult Equipment()
    {
        return View();
    }
    public IActionResult Factions()
    {
        return View();
    }
    public IActionResult Inventory()
    {
        return View();
    }
    public IActionResult Journal()
    {
        return View();
    }
    public IActionResult Party()
    {
        return View();
    }
    public IActionResult Skills()
    {
        return View();
    }
    public IActionResult SpellBook()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
