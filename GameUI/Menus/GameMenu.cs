using System;

using GameModels;

namespace GameUI;
public class GameMenu : Menu
{
    new public string Name = "Game Menu";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Enter Town");
            Console.WriteLine("[0] Back to Main Menu");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    hero.DisplayCharacterSheet();
                    break;
                case "2":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero);
                    break;
                case "0":
                    MainMenu mainMenu = new MainMenu();
                    mainMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}
