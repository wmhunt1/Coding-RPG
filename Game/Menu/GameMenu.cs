using System;
using GameModels;

namespace GameSpace
{
    public class GameMenu : Menu
    {
        public void CombatTest(Character hero)
        {
            CombatMenu combatMenu = new CombatMenu();
            //List<Character> rats = new List<Character>{new Rat(), new Rat(), new Rat()};
            List<Character> skeletons = new List<Character>{new Skeleton()};
            //combatMenu.RunCombat(hero, rats);
            combatMenu.RunCombat(hero, skeletons);
        }
        public void EquipmentTest(Character hero)
        {

            Weapon club = new Club();
            Dagger dagger = new Dagger();
            Torso tunic = new Tunic();
            Cleave cleave = new Cleave();
            MagicMissile magicMissile = new MagicMissile();
            tunic.EquipItem(hero);
            //club.EquipItem(hero);
            dagger.EquipItem(hero);
            hero.LearnAbility(cleave);
            hero.LearnSpell(magicMissile);
        }
        public void StoreTest(Character hero)
        {
            hero.AddGold(5);
            Store store = new Store("Test Store", new List<Item>{new HealingPotion("Healing Potion", 2, 5)});
            StoreMenu storeTest = new StoreMenu(store.Name, store);
            storeTest.DisplayMenu(hero);
        }
        public void DungeonTest(Character hero)
        {

            List<Character> e1 = new List<Character> { new Rat() };
            List<Character> e2 = new List<Character> { new Rat() };
            List<Character> e3 = new List<Character> { new Rat() };
            List<Character> boss = new List<Character> { new Rat() };
            Dungeon dungeon = new Dungeon("Test Dungeon", e1, e2, e3, boss);
            DungeonMenu dungeonTest = new DungeonMenu(dungeon.Name, dungeon);
            dungeonTest.DisplayMenu(hero);
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
                Console.WriteLine("[5] Dungeon Test");
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
                    case "5":
                        DungeonTest(hero);
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