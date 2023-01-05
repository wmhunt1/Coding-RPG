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

            Weapon club = new Club();
            Torso tunic = new Tunic();
            tunic.EquipItem(hero);
            club.EquipItem(hero);
        }
        public void StoreTest(Character hero)
        {
            hero.AddGold(5);
            HealingPotion healingPotion = new HealingPotion("Healing Potion", 2, 5);
            List<Item> inventory = new List<Item>();
            inventory.Add(healingPotion);
            StoreMenu storeTest = new StoreMenu("Test Store", inventory);
            storeTest.DisplayMenu(hero);
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
                Console.WriteLine("[4] Store Test");
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
                    case "4":
                        StoreTest(hero);
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