using System;
namespace GameModels;

public class Dungeon : Location
{
    public Character Encounter = new Character("char");
    public List<Character>? Boss;
    public Menu Exit = new WorldMenu();
    public UIScripts ui = new UIScripts();
    public int EncountersDefeated = 0;
    public bool BossDoor = false;
    public Dungeon(string name) : base(name)
    {
        Name = name;
    }
    public virtual List<Character> GenerateEncounter(int x, int y)
    {
        List<Character> newEncounter = new List<Character>();
        return newEncounter;
    }
    public virtual List<Character> GenerateEncounter1()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;

    }
    public virtual List<Character> GenerateEncounter2()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;
    }
    public virtual List<Character> GenerateEncounter3()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;
    }
    public virtual void EnteringDungeonEvent(Character hero)
    {

    }
    public void AfterEncounter1Event(Character hero)
    {

    }
    public void AfterEncounter2Event(Character hero)
    {

    }
    public void AfterEncounter3Event(Character hero)
    {

    }
    public virtual void AfterBossEvent(Character hero)
    {
        Console.WriteLine("Boss Defeated");
    }
    public virtual void VisitLocation(Hero hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine($"[2] Encounter 1: Fight {Encounter.Name}s");
        if (EncountersDefeated > 0)
        {
            Console.WriteLine($"[3] Encounter 2: Fight {Encounter.Name}s");
        }
        if (EncountersDefeated > 1)
        {
            Console.WriteLine($"[4] Encounter 3: Fight {Encounter.Name}s");
        }
        if (Boss != null && BossDoor == true)
        {
            Console.WriteLine($"[5] Fight {Boss?[0].Name} (Dungeon Boss)");
        }
        Console.WriteLine($"[0] Leave {Name}");

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

                    List<Character> encounterEnemies = GenerateEncounter1();
                    CombatScripts dungeonCombat = new CombatScripts();
                    dungeonCombat.RunCombat(hero, encounterEnemies);
                    if (hero.CurrentHP > 0)
                    {
                        EncountersDefeated = 1;
                        AfterEncounter1Event(hero);
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

                    List<Character> encounterEnemies = GenerateEncounter2();
                    CombatScripts dungeonCombat = new CombatScripts();
                    dungeonCombat.RunCombat(hero, encounterEnemies);
                    if (hero.CurrentHP > 0)
                    {
                        EncountersDefeated = 2;
                        AfterEncounter2Event(hero);
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

                    List<Character> encounterEnemies = GenerateEncounter3();
                    CombatScripts dungeonCombat = new CombatScripts();
                    dungeonCombat.RunCombat(hero, encounterEnemies);
                    if (hero.CurrentHP > 0)
                    {
                        BossDoor = true;
                        AfterEncounter3Event(hero);
                    }
                }
                else
                {
                    Console.WriteLine("You cannot fight in your current condition");
                }
                break;
            case "5":
                if (hero.CurrentHP > 0 && Boss != null && BossDoor == true)
                {
                    for (int i = 0; i < Boss.Count; i++)
                    {
                        Boss[i].GainHP(Boss[i].MaxHP);
                    }
                    List<Character> bossPlusMinions = GenerateEncounter1();
                    for (int i = 0; i < Boss.Count; i++)
                    {
                        bossPlusMinions.Add(Boss[i]);
                    }
                    CombatScripts bossCombat = new CombatScripts();
                    bossCombat.RunCombat(hero, bossPlusMinions);
                    if (hero.CurrentHP > 0)
                    {
                        AfterBossEvent(hero);
                    }
                }
                else
                {
                    Console.WriteLine("You cannot fight in your current condition");
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