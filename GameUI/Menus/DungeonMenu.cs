using System;
using GameModels;

namespace GameUI;
public class DungeonnMenu : Menu
{
    new public string Name = "Dungeon";
    TownMenu townMenu = new TownMenu();
    public override void ShowMenu(Character hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine($"[0] Leave {Name}");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    Console.WriteLine("Character Sheet");
                    break;
                case "0":
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}