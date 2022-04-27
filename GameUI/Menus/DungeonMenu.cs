using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class DungeonMenu : Menu
{
    new public string Name = "Dungeon";
    TownMenu townMenu = new TownMenu();
    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Slay Rats");
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
                        Rat rat1 = new Rat("Rat 1");
                        CombatScripts ratCombat = new CombatScripts();
                        ratCombat.RunCombat(hero, rat1);
                    }
                    else
                    {
                        Console.WriteLine("You cannot fight in your current condition");
                    }
                    break;
                case "0":
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}