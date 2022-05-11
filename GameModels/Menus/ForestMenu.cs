using System;
using GameModels;

namespace GameModels;
public class ForestMenu : Menu
{
    new public string Name = "Forest";
    StoryScripts story = new StoryScripts();
    UIScripts ui = new UIScripts();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
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

            Console.WriteLine("[0] To World Map");

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
                        ForestMenu forestMenu = new ForestMenu();
                        DungeonMenu banditHideoutMenu = new DungeonMenu(banditHideout, forestMenu);
                        banditHideoutMenu.ShowMenu(hero);
                    }
                    break;
                case "7":
                    if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState > 0)
                    {
                        GiantDungeon1 cave = new GiantDungeon1();
                        ForestMenu forestMenu = new ForestMenu();
                        DungeonMenu caveMenu = new DungeonMenu(cave, forestMenu);
                        caveMenu.ShowMenu(hero);
                    }
                    break;
                case "0":
                    ValleyMenu gameMenu = new ValleyMenu();
                    gameMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}