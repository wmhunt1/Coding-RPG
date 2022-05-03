using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class DungeonMenu : Menu
{
    public Dungeon Dungeon;
    public DungeonMenu(Dungeon dungeon)
    {
        Dungeon = dungeon;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Dungeon.Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine($"[2] Fight {Dungeon.Encounter[0].Name}s");
            if (Dungeon.Boss != null)
            {
                Console.WriteLine($"[3] Fight {Dungeon.Boss?.Name} (Dungeon Boss)");
            }
            Console.WriteLine($"[0] Leave {Dungeon.Name}");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    if (hero.CurrentHP > 0)
                    {
                        Dungeon.Encounter[0].GainHP(Dungeon.Encounter[0].MaxHP);
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, Dungeon.Encounter[0]);
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "3":
                    if (Dungeon.Boss != null)
                    {
                        CombatScripts bossCombat = new CombatScripts();
                        bossCombat.RunCombat(hero, Dungeon.Boss);
                    }
                    break;
                case "0":
                    
                    if (Dungeon.Encounter[0].Name == "Forest Bandit")
                    {
                        ForestMenu forestMenu = new ForestMenu();
                        forestMenu.ShowMenu(hero);
                    }
                    else if (Dungeon.Encounter[0].Name == "Goblin")
                    {
                        GameMenu gameMenu = new GameMenu();
                        gameMenu.ShowMenu(hero);
                    }
                    else if(Dungeon.Encounter[0].Name == "Cellar Rat")
                    {
                        InnMenu innMenu = new InnMenu();
                        innMenu.ShowMenu(hero);
                    }
                    else
                    {
                        GameMenu gameMenu = new GameMenu();
                        gameMenu.ShowMenu(hero);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}