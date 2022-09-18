using System;
namespace GameModels;

public class GeneralStore : Store
{

    ShoppingScripts store = new ShoppingScripts();
    UIScripts ui = new UIScripts();
    public GeneralStore(string name = "Test") : base(name)
    {
        Name = name;
        HealthPotion healthPotion = new HealthPotion("Health Potion", 5, 10);
        Inventory.Add(healthPotion);
    }
    public override void VisitLocation(Hero hero)
    {
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

                Console.WriteLine($"{Name} Inventory");
                store.BuyFromShop(hero, Inventory);
                break;
            case "3":
                store.SellToShop(hero);
                break;
            case "0":
                DaleTown town = new DaleTown();
                TownMenu townMenu = new TownMenu(town);
                townMenu.ShowMenu(hero!);
                break;
            default:
                break;
        }

    }
}