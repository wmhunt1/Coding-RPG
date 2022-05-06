using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class StoreMenu : Menu
{
    new public string Name;
    ShoppingScripts store = new ShoppingScripts();
    List<Item> inventory = new List<Item>();
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
            Console.WriteLine("[2] Buy");
            Console.WriteLine("[3] Sell");
            Console.WriteLine($"[0] Leave {Name}");
            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero!);
                    break;
                case "2":
                    HealthPotion healthPotion = new HealthPotion("Health Potion", 5, 10);
                    inventory.Add(healthPotion);
                    Console.WriteLine($"{Name} Inventory");
                    store.BuyFromShop(hero, inventory);
                    break;
                case "3":
                    store.SellToShop(hero);
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