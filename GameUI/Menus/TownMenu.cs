using System;
using GameModels;

namespace GameUI;
public class TownMenu : Menu
{
    new public string Name = "Town";
    public override void ShowMenu(Character hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Go to Inn");
            Console.WriteLine("[9] Kill rats");
            Console.WriteLine("[0] Leave Town");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    Console.WriteLine("Character Sheet");
                    break;
                case "2":
                    InnMenu innMenu = new InnMenu();
                    innMenu.ShowMenu(hero);
                    break;
                case "0":
                    GameMenu gameMenu = new GameMenu();
                    gameMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}