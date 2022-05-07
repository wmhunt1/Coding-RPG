using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class StoreMenu : Menu
{
    new public string Name;
    ShoppingScripts store = new ShoppingScripts();
    UIScripts ui = new UIScripts();
    Store Store;
    public StoreMenu(Store store)
    {
        Store = store;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Store.Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Buy");
            Console.WriteLine("[3] Sell");
            Console.WriteLine($"[0] Leave {Store.Name}");
            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero!);
                    break;
                case "2":
                    
                    Console.WriteLine($"{Store.Name} Inventory");
                    store.BuyFromShop(hero, Store.Inventory);
                    break;
                case "3":
                    store.SellToShop(hero);
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