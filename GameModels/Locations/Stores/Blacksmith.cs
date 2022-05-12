using System;
namespace GameModels;

public class Blacksmith : Store
{
    new public List<Equipable> Inventory = new List<Equipable>();

    ShoppingScripts blackSmith = new ShoppingScripts();
    UIScripts ui = new UIScripts();
    public Blacksmith(string name) : base(name)
    {
        Name = name;
        Dagger dagger = new Dagger();
        GreatSword greatSword = new GreatSword();
        Sword sword = new Sword();
        LeatherVest leatherVest = new LeatherVest();
        Inventory.Add(dagger);
        Inventory.Add(greatSword);
        Inventory.Add(sword);
        Inventory.Add(leatherVest);
    }
    public override void VisitLocation(Hero hero)
    {
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
                blackSmith.BuyFromBlacksmith(hero, Inventory);
                break;
            case "3":
                blackSmith.SellToShop(hero);
                break;
            case "4":
                hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestDialogue(hero);
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