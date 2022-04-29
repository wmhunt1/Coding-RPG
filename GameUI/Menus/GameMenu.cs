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
            Console.WriteLine("[4] Dwarven Mine");
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
                    Goblin goblin = new Goblin("Goblin");
                    GoblinBoss goblinBoss = new GoblinBoss("Goblin Boss");
                    DungeonMenu dwarfMine = new DungeonMenu("Dwarven Mine", goblin);
                    dwarfMine.Boss = goblinBoss;
                    dwarfMine.ShowMenu(hero);
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
