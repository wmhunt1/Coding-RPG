using System;
using GameModels;

namespace GameSpace
{
    public class GameMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine("===== Coding RPG =====");
                Console.WriteLine("[1] Character Sheet");
                Console.WriteLine("[2] Combat Test");
                Console.WriteLine("[3] Heal");
                Console.WriteLine("[0] Main Menu");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        CharacterSheetMenu characterSheetMenu = new CharacterSheetMenu();
                        characterSheetMenu.DisplayMenu(hero);
                        break;
                    case "2":
                        CombatMenu combatMenu = new CombatMenu();
                        List<Character> rats = new List<Character>();
                        Rat rat1 = new Rat();
                        Rat rat2 = new Rat();
                        Rat rat3 = new Rat();
                        rats.Add(rat1);
                        rats.Add(rat2);
                        rats.Add(rat3);
                        combatMenu.RunCombat(hero, rats);
                        break;
                    case "3":
                        hero.HealHP(hero.MaxHP);
                        break;
                    case "0":
                        showMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}