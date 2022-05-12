using System;
namespace GameModels;

public class Inn : Store
{
    UIScripts ui = new UIScripts();
    public Inn(string name = "Inn") : base(name)
    {
        Name = name;
    }
    public override void VisitLocation(Hero hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[2] Buy Beer (1 Gold)");
        Console.WriteLine("[3] Rent Room (1 Gold)");
        Console.WriteLine("[4] Talk to InnKeeper");
        if (hero.Journal.Find(x => x.QuestID == "RQ1")?.QuestState > 0)
        {
            Console.WriteLine("[5] Enter cellar");
        }
        Console.WriteLine("[0] Leave Inn");

        string? UserInput = Console.ReadLine();
        switch (UserInput)
        {
            case "1":
                CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                characterSheet.ShowMenu(hero);
                break;
            case "2":
                Beer beer = new Beer();
                if (hero.HasEnoughGold(beer.Cost) == false)
                {
                    hero.RemoveGold(beer.Cost);
                    beer.UseItem(hero);
                }
                else
                {
                    Console.WriteLine("You don't have enough Gold for a Beer");
                }
                Console.WriteLine("Press any key to continue");
                Console.ReadLine();
                break;
            case "3":
                if (hero.HasEnoughGold(1) == false)
                {
                    hero.RemoveGold(1);
                    Console.WriteLine("You rest for the night");
                    hero.FullRest();
                    for (int i = 0; i < hero.Companions.Count; i++)
                    {
                        hero.Companions[i].FullRest();
                    }
                }
                else
                {
                    Console.WriteLine("You don't have enough Gold for a Room");
                }
                Console.WriteLine("Press any key to continue");
                Console.ReadLine();
                break;
            case "4":
                hero.Journal.Find(x => x.QuestID == "RQ1")?.QuestDialogue(hero);
                break;
            case "5":
                if (hero.Journal.Find(x => x.QuestID == "RQ1")?.QuestState > 0)
                {
                    RatDungeon1 ratCellar = new RatDungeon1();
                    Inn inn = new Inn("Inn");
                    StoreMenu innMenu = new StoreMenu(inn);
                    DungeonMenu ratCellarMenu = new DungeonMenu(ratCellar, innMenu);
                    ratCellarMenu.ShowMenu(hero);
                }
                break;
            case "0":
                DaleTown town = new DaleTown();
                TownMenu townMenu = new TownMenu(town);
                townMenu.ShowMenu(hero);
                break;
            default:
                break;
        }
    }
}