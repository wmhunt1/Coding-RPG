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
            Console.WriteLine("[3] Cut Wood");
            Console.WriteLine("[4] Go Hunting");
            if (hero.BanditQuest)
            {
                 Console.WriteLine("[5] Bandit Hideout");
            }
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
                    Console.WriteLine("Go Hunting");
                    break;
                case "4":
                    Console.WriteLine("Chopping Down Trees");
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "5":
                    if (hero.BanditQuest)
                    {
                        Bandit bandit = new Bandit("Forest Bandit");
                        BanditBoss banditBoss = new BanditBoss("Forest Bandit Boss");
                        DungeonMenu banditHideout = new DungeonMenu("Bandit Hideout", bandit);
                        banditHideout.Boss = banditBoss;
                        banditHideout.ShowMenu(hero);
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