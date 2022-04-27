using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class DungeonMenu : Menu
{
    new public string Name;
    public Character Encounter;
    public Character? Boss;
    ForestMenu forestMenu = new ForestMenu();
    GameMenu gameMenu = new GameMenu();
    TownMenu townMenu = new TownMenu();
    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
    public DungeonMenu(string name, Character encounter)
    {
        Name = name;
        Encounter = encounter;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine($"[2] Fight {Encounter.Name}s");
            if (Boss != null)
            {
                Console.WriteLine($"[3] Fight {Boss?.Name} (Dungeon Boss)");
            }
            Console.WriteLine($"[0] Leave {Name}");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    if (hero.CurrentHP > 0)
                    {
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, Encounter);
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "3":
                    if (Boss != null)
                    {
                        CombatScripts bossCombat = new CombatScripts();
                        bossCombat.RunCombat(hero, Boss);
                    }
                    break;
                case "0":
                    
                    if (Encounter.Name == "Bandit")
                    {
                        forestMenu.ShowMenu(hero);
                    }
                    else if(Encounter.Name == "Rat")
                    {
                        townMenu.ShowMenu(hero);
                    }
                    else
                    {
                        gameMenu.ShowMenu(hero);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}