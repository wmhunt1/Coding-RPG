using System;
using GameModels;

namespace GameUI;
public class TownMenu : Menu
{
    new public string Name = "Town";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Inn");
            Console.WriteLine("[3] Blacksmith");
            Console.WriteLine("[4] General Store");
            Console.WriteLine("[5] Mayor's House");
            Console.WriteLine("[0] Leave Town");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    InnMenu innMenu = new InnMenu();
                    innMenu.ShowMenu(hero);
                    break;
                case "3":
                    BlacksmithMenu blacksmithMenu = new BlacksmithMenu();
                    blacksmithMenu.ShowMenu(hero);
                    break;
                case "4":
                    Console.WriteLine("General Store");
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "5":
                    Console.WriteLine("Mayor's House");
                    if (hero.BanditQuest == 0)
                    {
                        Console.WriteLine("I've put out a bounty on bandits in the forest");
                        hero.BanditQuest++;
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    break;
                case "0":
                    GameMenu gameMenu = new GameMenu();
                    gameMenu.ShowMenu(hero);
                    // Console.WriteLine("Explore Forest [1] or View World Map [2]?");
                    // string? leaveInput = Console.ReadLine();
                    // switch(leaveInput)
                    // {
                    //     case "1":
                    //         ForestMenu forestMenu = new ForestMenu();
                    //         forestMenu.ShowMenu(hero);
                    //         break;
                    //     case "2":
                    //         GameMenu gameMenu = new GameMenu();
                    //         gameMenu.ShowMenu(hero);
                    //         break;
                    //     default:
                    //         break;
                    // }
                    break;
                default:
                    break;
            }
        }
    }
}