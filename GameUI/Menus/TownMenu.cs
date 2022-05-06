using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class TownMenu : Menu
{
    new public string Name = "Town";
    public UIScripts ui = new UIScripts();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Inn");
            Console.WriteLine("[3] Blacksmith");
            Console.WriteLine("[4] General Store");
            Console.WriteLine("[5] Mayor's House");
            Console.WriteLine("[6] Church");
            if (hero.Journal[3].QuestState > 0)
            {
                Console.WriteLine("[7] Graveyard");
            }

            Console.WriteLine("[0] Leave Town");

            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    InnMenu innMenu = new InnMenu();
                    innMenu.ShowMenu(hero);
                    break;
                case "3":
                    BlacksmithMenu blacksmithMenu = new BlacksmithMenu();
                    blacksmithMenu.ShowMenu(hero);
                    break;
                case "4":
                    StoreMenu store = new StoreMenu("General Store");
                    store.ShowMenu(hero);
                    break;
                case "5":
                    Console.WriteLine("Mayor's House");
                    if (hero.Journal[0].QuestState == 0)
                    {
                        Console.WriteLine("I've put out a bounty on bandits in the forest");
                        hero.Journal[0].QuestState++;
                        ui.AnyKey();
                    }
                    else if (hero.Journal[0].QuestState == 1 && hero.Journal[0].QuestObjectiveProgess < hero.Journal[0].QuestObjective)
                    {
                        Console.WriteLine("Please kill those bandits");
                        ui.AnyKey();
                    }
                    else if (hero.Journal[0].QuestObjective <= hero.Journal[0].QuestObjectiveProgess && hero.Journal[0].QuestState < 100)
                    {
                        Console.WriteLine("You killed the bandits. Here's some gold");
                        hero.AddGold(100);
                        hero.Journal[2].QuestState = 100;
                        ui.AnyKey();
                    }
                    else
                    {
                        Console.WriteLine("Thanks for killing those bandits");
                        ui.AnyKey();
                    }
                    break;
                case "6":
                    Console.WriteLine("Visting Church");
                    if (hero.Journal[3].QuestState == 0)
                    {
                        Console.WriteLine("Can you deal with the skeletons rising in the graveyard");
                        hero.Journal[3].QuestState++;
                        ui.AnyKey();
                    }
                    else if (hero.Journal[3].QuestState == 1 && hero.Journal[3].QuestObjectiveProgess < hero.Journal[3].QuestObjective)
                    {
                        Console.WriteLine("Please kill those skeletons");
                        ui.AnyKey();
                    }
                    else if (hero.Journal[3].QuestObjective <= hero.Journal[3].QuestObjectiveProgess && hero.Journal[3].QuestState < 100)
                    {
                        Console.WriteLine("You killed the skeletons. Here's some gold");
                        hero.AddGold(100);
                        hero.Journal[2].QuestState = 50;
                        ui.AnyKey();
                    }
                    else
                    {
                        Console.WriteLine("Thanks for killing those skeletons");
                        ui.AnyKey();
                    }
                    break;
                case "7":
                    if (hero.Journal[3].QuestState > 0)
                    {
                        SkeletonDungeon skeletonDungeon = new SkeletonDungeon();
                        TownMenu townMenuExit = new TownMenu();
                        DungeonMenu skeletonDungeonMenu = new DungeonMenu(skeletonDungeon, townMenuExit);
                        skeletonDungeonMenu.ShowMenu(hero);
                    }
                    break;
                case "0":
                    GameMenu gameMenu = new GameMenu();
                    gameMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}