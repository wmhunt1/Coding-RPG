using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class TownMenu : Menu
{
    public Town Town;
    StoryScripts story = new StoryScripts();
    UIScripts ui = new UIScripts();
    public TownMenu(Town town)
    {
        Town = town;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Town.Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Inn");
            Console.WriteLine("[3] Blacksmith");
            Console.WriteLine("[4] General Store");
            Console.WriteLine("[5] Mayor's House");
            Console.WriteLine("[6] Church");
            if (hero.Journal.Find(x => x.Name == "Skeleton Quest").QuestState > 0)
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
                    Blacksmith blacksmith = new Blacksmith("Blacksmith");
                    BlacksmithMenu blacksmithMenu = new BlacksmithMenu(blacksmith);
                    blacksmithMenu.ShowMenu(hero);
                    break;
                case "4":
                    GeneralStore store = new GeneralStore("General Store");
                    StoreMenu storeMenu = new StoreMenu(store);
                    storeMenu.ShowMenu(hero);
                    break;
                case "5":
                    Console.WriteLine("Mayor's House");
                    story.BanditQuest(hero);
                    break;
                case "6":
                    Console.WriteLine("Visting Church");
                    story.SkeletonQuest(hero);
                    break;
                case "7":
                    if (hero.Journal.Find(x => x.Name == "Skeleton Quest").QuestState > 0)
                    {
                        SkeletonDungeon skeletonDungeon = new SkeletonDungeon();
                        Town town = new Town("Town");
                        TownMenu townMenuExit = new TownMenu(town);
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