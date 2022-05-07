using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class BlacksmithMenu : StoreMenu
{
    ShoppingScripts blackSmith = new ShoppingScripts();
    UIScripts ui = new UIScripts();

    List<Equipable> inventory = new List<Equipable>();
    public BlacksmithMenu(string name = "Blacksmith"):base(name)
    {
        Name = name;
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
                    Dagger dagger = new Dagger();
                    Sword sword = new Sword();
                    LeatherVest leatherVest = new LeatherVest();
                    blackSmith.BuyFromBlacksmith(hero, inventory);
                    break;
                case "3":
                    blackSmith.SellToShop(hero);
                    break;
                case "4":
                    if (hero!.Journal?[1].QuestState == 0 && hero.Journal[1] != null)
                    {
                        Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
                        hero.Journal[1].QuestState += 1;
                        ui.AnyKey();
                    }
                    else if (hero?.Journal?[1].QuestState == 1 && hero.Journal[1].QuestObjectiveProgess < hero.Journal[1].QuestObjective)
                    {
                        Console.WriteLine("Please kill those goblins");
                        ui.AnyKey();
                    }
                    else if (hero!.Journal?[1].QuestObjective <= hero.Journal?[1].QuestObjectiveProgess && hero.Journal?[1].QuestState < 100)
                    {
                        Console.WriteLine("You killed the goblins. Here's some gold");
                        hero.AddGold(100);
                        hero.Journal[2].QuestState = 75;
                        ui.AnyKey();
                    }
                    else
                    {
                        Console.WriteLine("Feel free to mine ore if you need it");
                        ui.AnyKey();
                    }
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