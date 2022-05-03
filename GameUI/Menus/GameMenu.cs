using System;

using GameModels;

namespace GameUI;
public class GameMenu : Menu
{
    new public string Name = "Valley of Dale";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Visit Town");
            Console.WriteLine("[3] Explore Forest");
            if (hero.Journal[1].QuestState > 0)
            {
                Console.WriteLine("[4] Dwarven Mine");
            }
            if (hero.Journal[1].QuestState > 1)
            {
                Console.WriteLine("[5] Mine Ore");
            }
            Console.WriteLine("[0] Back to Main Menu");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero);
                    break;
                case "3":
                    ForestMenu forestMenu = new ForestMenu();
                    forestMenu.ShowMenu(hero);
                    break;
                case "4":
                    if (hero.Journal[1].QuestState > 0)
                    {
                        GoblinDungeon dwarfMine = new GoblinDungeon();
                        GameMenu gameMenuExit = new GameMenu();
                        DungeonMenu dwarfMineMenu = new DungeonMenu(dwarfMine, gameMenuExit);
                        dwarfMineMenu.ShowMenu(hero);
                    }
                    break;
                case "5":
                    if (hero.Journal[1].QuestState > 1)
                    {
                        Console.WriteLine("Mining Ore");
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
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
}
