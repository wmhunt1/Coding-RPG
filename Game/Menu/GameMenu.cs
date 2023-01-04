using System;
using GameModels;

namespace GameSpace
{
    public class GameMenu : Menu
    {
        public void CombatTest(Character hero)
        {
            CombatMenu combatMenu = new CombatMenu();
            List<Character> rats = new List<Character>();
            Rat rat1 = new Rat();
            Rat rat2 = new Rat();
            Rat rat3 = new Rat();
            rats.Add(rat1);
            rats.Add(rat2);
            rats.Add(rat3);
            combatMenu.RunCombat(hero, rats);
        }
        public void EquipmentTest(Character hero)
        {
            Armor tunic = new Armor("Tunic", 1, "Cloth");
            Weapon club = new Weapon("Club", 1, "Bludegeoning");
            tunic.Equip(hero);
            club.Equip(hero);
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine("===== Coding RPG =====");
                Console.WriteLine("[1] Character Sheet");
                Console.WriteLine("[2] Combat Test");
                Console.WriteLine("[3] Equip Test");
                Console.WriteLine("[9] Heal");
                Console.WriteLine("[0] Main Menu");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        CharacterSheetMenu characterSheetMenu = new CharacterSheetMenu();
                        characterSheetMenu.DisplayMenu(hero);
                        break;
                    case "2":
                        CombatTest(hero);
                        break;
                    case "3":
                        EquipmentTest(hero);
                        break;
                    case "9":
                        hero.FullRest();
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