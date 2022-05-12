using System;
namespace GameModels;

public class DaleValley : Location
{
    public UIScripts ui = new UIScripts();
    public DaleValley(string name = "Dale Valley") : base(name)
    {
        Name = name;
    }
    public override void VisitLocation(Hero hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[2] Visit Dale Town");
        //if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState > 0)
        // {
        Console.WriteLine("[3] Explore Forest");
        // }
        if (hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestState > 0)
        {
            Console.WriteLine("[4] Dwarven Mine");
        }
        if (hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestState == 100)
        {
            Console.WriteLine("[5] Dwarven Mine - Mine Copper");
            Console.WriteLine("[6] Dwarven Mine - Mine Tin");
        }
        Console.WriteLine("[0] Back to Main Menu");

        string? UserInput = Console.ReadLine();
        switch (UserInput)
        {
            case "1":
                CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                characterSheet.ShowMenu(hero);
                break;
            case "2":

                if (hero.Journal.Find(x => x.QuestID == "MQ1")?.QuestState == 2)
                {
                    hero.Journal.Find(x => x.QuestID == "MQ1")?.QuestDialogue(hero);
                }
                DaleTown town = new DaleTown();
                TownMenu townMenu = new TownMenu(town);
                townMenu.ShowMenu(hero);
                break;
            case "3":
                //if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState > 0)
                //{
                DaleForest forest = new DaleForest();
                LocationMenu forestMenu = new LocationMenu(forest);
                forestMenu.ShowMenu(hero);
                //}
                break;
            case "4":
                if (hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestState > 0)
                {
                    GoblinDungeon1 dwarfMine = new GoblinDungeon1();
                    DaleValley daleValley = new DaleValley();
                    LocationMenu gameMenuExit = new LocationMenu(daleValley);
                    DungeonMenu dwarfMineMenu = new DungeonMenu(dwarfMine, gameMenuExit);
                    dwarfMineMenu.ShowMenu(hero);
                }
                break;
            case "5":
                if (hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestState == 100)
                {
                    CopperOre copper = new CopperOre();
                    hero.Mining.GatherResource(hero, copper);
                    ui.AnyKey();
                }
                break;
            case "6":
                if (hero.Journal.Find(x => x.QuestID == "GQ1")?.QuestState > 100)
                {
                    TinOre tin = new TinOre();
                    hero.Mining.GatherResource(hero, tin);
                    ui.AnyKey();
                }
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