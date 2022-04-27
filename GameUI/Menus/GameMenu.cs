using System;

using GameModels;

namespace GameUI;
public class GameMenu : Menu
{
    new public string Name = "World Map";
    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Explore Forest");
            Console.WriteLine("[3] Enter Town");
            Console.WriteLine("[0] Back to Main Menu");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    ForestMenu forestMenu = new ForestMenu();
                    forestMenu.ShowMenu(hero);
                    break;
                case "3":
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
