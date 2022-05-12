using System;
namespace GameModels;

public class DaleForest : Location
{
    public StoryScripts story = new StoryScripts();
    public UIScripts ui = new UIScripts();
    public DaleForest(string name = "Dale Forest") : base(name)
    {
        Name = name;
    }
    public override void VisitLocation(Hero hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[2] Visit Lumbermill");
        Console.WriteLine("[3] Chop Wood");
        Console.WriteLine("[4] Go Hunting");
        Console.WriteLine("[5] Collect Herbs");
        if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState > 0)
        {
            Console.WriteLine("[6] Bandit Hideout");
        }
        if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState > 0)
        {
            Console.WriteLine("[7] Giant Cave");
        }

        Console.WriteLine("[0] To Dale Valley");

        string? UserInput = Console.ReadLine();
        switch (UserInput)
        {
            case "1":
                CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                characterSheet.ShowMenu(hero);
                break;

            case "2":
                story.GiantQuest1(hero);
                ui.AnyKey();
                break;
            case "3":
                PineWood pineWood = new PineWood();
                hero.WoodCutting.GatherResource(hero, pineWood);
                ui.AnyKey();
                break;
            case "4":
                Console.WriteLine("Hunting Animals");
                ui.AnyKey();
                break;
            case "5":
                Console.WriteLine("Collecting Herbs");
                ui.AnyKey();
                break;
            case "6":
                if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState > 0)
                {
                    BanditDungeon1 banditHideout = new BanditDungeon1();
                    DaleForest forest = new DaleForest();
                    LocationMenu forestMenu = new LocationMenu(forest);
                    DungeonMenu banditHideoutMenu = new DungeonMenu(banditHideout, forestMenu);
                    banditHideoutMenu.ShowMenu(hero);
                }
                break;
            case "7":
                if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState > 0)
                {
                    GiantDungeon1 cave = new GiantDungeon1();
                    DaleForest forest = new DaleForest();
                    LocationMenu forestMenu = new LocationMenu(forest);
                    DungeonMenu caveMenu = new DungeonMenu(cave, forestMenu);
                    caveMenu.ShowMenu(hero);
                }
                break;
            case "0":
                DaleValley daleValley = new DaleValley();
                LocationMenu gameMenu = new LocationMenu(daleValley);
                gameMenu.ShowMenu(hero);
                break;
            default:
                break;
        }
    }
}