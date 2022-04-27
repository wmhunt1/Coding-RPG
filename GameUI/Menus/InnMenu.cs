using System;
using GameModels;

namespace GameUI;
public class InnMenu : Menu
{
    new public string Name = "Inn";
    public override void ShowMenu(Character hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Rest");
            Console.WriteLine("[0] Leave Inn");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    Console.WriteLine("Character Sheet");
                    break;
                case "2":
                    Console.WriteLine("Resting");
                    hero.CurrentHP = hero.MaxHP;
                    break;
                case "0":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }       
    }
}