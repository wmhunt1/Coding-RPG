using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class BlacksmithMenu : Menu
{
    ShoppingScripts blackSmith = new ShoppingScripts();
    StoryScripts story = new StoryScripts();
    UIScripts ui = new UIScripts();
    Blacksmith Blacksmith;

    public BlacksmithMenu(Blacksmith blacksmith)
    {
        Blacksmith = blacksmith;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Buy Weapons and Armor");
            Console.WriteLine("[3] Sell");
            Console.WriteLine("[4] Talk to Blacksmith");
            Console.WriteLine("[0] Leave Blacksmith");
            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero!);
                    break;
                case "2":
                    Console.WriteLine("Blacksmith Inventory");
                    blackSmith.BuyFromBlacksmith(hero, Blacksmith.Inventory);
                    break;
                case "3":
                    blackSmith.SellToShop(hero);
                    break;
                case "4":
                    story.GoblinQuest1(hero);
                    break;
                case "0":
                    Town town = new Town("Town");
                    TownMenu townMenu = new TownMenu(town);
                    townMenu.ShowMenu(hero!);
                    break;
                default:
                    break;
            }

        }
    }
}