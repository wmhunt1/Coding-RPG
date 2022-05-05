using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class DungeonMenu : Menu
{
    public Dungeon Dungeon;
    public Menu Exit;
    public DungeonMenu(Dungeon dungeon, Menu exit)
    {
        Dungeon = dungeon;
        Exit = exit;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Dungeon.Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine($"[2] Fight {Dungeon.Encounter.Name}s");
            if (Dungeon.Boss != null)
            {
                Console.WriteLine($"[3] Fight {Dungeon.Boss?[0].Name} (Dungeon Boss)");
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
                     
                        List<Character> encounterEnemies = Dungeon.GenerateEncounter();
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, encounterEnemies);
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "3":
                    if (Dungeon.Boss != null)
                    {
                        for (int i = 0; i < Dungeon.Boss.Count; i++)
                        {
                            Dungeon.Boss[i].GainHP(Dungeon.Boss[i].MaxHP);
                        }
                        CombatScripts bossCombat = new CombatScripts();
                        bossCombat.RunCombat(hero, Dungeon.Boss);
                    }
                    break;
                case "0":
                    Exit.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}