using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class ForestMenu : Menu
{
    new public string Name = "Forest";
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
            Console.WriteLine();
            if (hero.Journal[0].QuestState > 0)
            {
                 Console.WriteLine("[5] Bandit Hideout");
            }
            Console.WriteLine("[0] To World Map");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    Console.WriteLine("Hunting Animals");
                    ui.AnyKey();
                    break;
                case "3":
                    Console.WriteLine("Visting Lumbermill");
                    ui.AnyKey();
                    break;
                case "4":
                    Console.WriteLine("Chopping Down Trees");
                    ui.AnyKey();
                    break;
                case "5":
                    if (hero.Journal[0].QuestState > 0)
                    {
                        
                        BanditDungeon banditHideout = new BanditDungeon();
                        ForestMenu forestMenu = new ForestMenu();
                        DungeonMenu banditHideoutMenu = new DungeonMenu(banditHideout, forestMenu);
                        banditHideoutMenu.ShowMenu(hero);
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