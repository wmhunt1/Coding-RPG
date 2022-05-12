using System;

namespace GameModels;
public class TownMenu : Menu
{
    public Town Town;
    UIScripts ui = new UIScripts();
    public TownMenu(Town town)
    {
        Town = town;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Town.Name}  ----------");
            Town.VisitLocation(hero);
        }
    }
}