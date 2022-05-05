using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class StoreMenu : Menu
{
    new public string Name;
    ShoppingScripts store = new ShoppingScripts();
    public StoreMenu(string name)
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
            Console.WriteLine("[2] Shop");
            Console.WriteLine($"[0] Leave {Name}");
            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero!);
                    break;
                case "2":
                    Console.WriteLine($"{Name} Inventory");
                    Console.WriteLine("[1] Buy Potion: 10 GP");
                    Console.WriteLine("[0] Go Back");
                    string? BuyingInput = Console.ReadLine();
                    switch (BuyingInput)
                    {
                        case "1":
                            HealthPotion healthPotion = new HealthPotion("Health Potion", 5, 10);
                            store.BuyItem(hero!, healthPotion);
                            break;
                        case "0":
                            break;
                        default:
                            break;
                    }
                    break;
                case "3":
                    if (hero!.Journal[1].QuestState == 0 && hero.Journal[1] != null)
                    {
                        Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
                        hero.Journal[1].QuestState += 1;
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    else if (hero?.Journal?[1].QuestState == 1)
                    {
                        Console.WriteLine("Please kill those goblins");
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    else
                    {
                        Console.WriteLine("Thank you for help");
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    break;
                case "0":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero!);
                    break;
                default:
                    break;
            }

        }
    }
}