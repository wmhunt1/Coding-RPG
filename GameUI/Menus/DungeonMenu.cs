using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class DungeonMenu : Menu
{
    public Dungeon Dungeon;
    public Menu Exit;
    public UIScripts ui = new UIScripts();
    public int EncountersDefeated = 0;
    public bool BossDoor = false;
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
            Console.WriteLine($"[2] Encounter 1: Fight {Dungeon.Encounter.Name}s");
            Console.WriteLine($"[2] Encounter 2: Fight {Dungeon.Encounter.Name}s");
            Console.WriteLine($"[2] Encounter 3: Fight {Dungeon.Encounter.Name}s");
            if (Dungeon.Boss != null && BossDoor == true)
            {
                Console.WriteLine($"[5] Fight {Dungeon.Boss?[0].Name} (Dungeon Boss)");
            }
            Console.WriteLine($"[0] Leave {Dungeon.Name}");

            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    if (hero.CurrentHP > 0)
                    {

                        List<Character> encounterEnemies = Dungeon.GenerateEncounter1();
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, encounterEnemies);
                        if (hero.CurrentHP > 0)
                        {
                            EncountersDefeated = 1;
                        }
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "3":
                    if (hero.CurrentHP > 0 && EncountersDefeated > 0)
                    {

                        List<Character> encounterEnemies = Dungeon.GenerateEncounter2();
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, encounterEnemies);
                        if (hero.CurrentHP > 0)
                        {
                            EncountersDefeated = 2;
                        }
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "4":
                    if (hero.CurrentHP > 0 && EncountersDefeated > 1)
                    {

                        List<Character> encounterEnemies = Dungeon.GenerateEncounter3();
                        CombatScripts dungeonCombat = new CombatScripts();
                        dungeonCombat.RunCombat(hero, encounterEnemies);
                        if (hero.CurrentHP > 0)
                        {
                            BossDoor = true;
                        }
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "5":
                    if (Dungeon.Boss != null && BossDoor == true)
                    {
                        for (int i = 0; i < Dungeon.Boss.Count; i++)
                        {
                            Dungeon.Boss[i].GainHP(Dungeon.Boss[i].MaxHP);
                        }
                        List<Character> bossPlusMinions = Dungeon.GenerateEncounter3();
                        for (int i = 0; i < Dungeon.Boss.Count; i++)
                        {
                            bossPlusMinions.Add(Dungeon.Boss[i]);
                        }
                        CombatScripts bossCombat = new CombatScripts();
                        bossCombat.RunCombat(hero, bossPlusMinions);
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