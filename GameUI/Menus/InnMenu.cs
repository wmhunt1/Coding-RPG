using System;
using GameModels;

namespace GameUI;
public class InnMenu : Menu
{
    new public string Name = "Inn";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Rest");
            Console.WriteLine("[3] Enter cellar");
            Console.WriteLine("[0] Leave Inn");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    hero.DisplayCharacterSheet();
                    break;
                case "2":
                    Console.WriteLine("Resting");
                    hero.CurrentHP = hero.MaxHP;
                    break;
                case "3":
                    DungeonMenu ratCellar = new DungeonMenu();
                    ratCellar.ShowMenu(hero);
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