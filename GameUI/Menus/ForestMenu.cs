using System;

using GameModels;

namespace GameUI;
public class ForestMenu : Menu
{
    new public string Name = "Forest";
    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Enter Town");
            Console.WriteLine("[3] Bandit Hideout");
            Console.WriteLine("[0] To World Map");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero);
                    break;
                case "3":
                    Bandit bandit = new Bandit("Forest Bandit");
                    Bandit banditBoss = new Bandit("Forest Bandit Boss");
                    DungeonMenu banditHideout = new DungeonMenu("Bandit Hideout", bandit);
                    banditHideout.Boss = banditBoss;
                    banditHideout.ShowMenu(hero);
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