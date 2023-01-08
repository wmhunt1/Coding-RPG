using System;
using GameModels;

namespace GameSpace
{
    public class GameMenu : Menu
    {
        public void CombatTest(Character hero)
        {
            CombatMenu combatMenu = new CombatMenu();
            List<Character> rats = new List<Character> { new Rat(), new Rat(), new Rat() };
            //List<Character> skeletons = new List<Character>{new Skeleton()};
            combatMenu.RunCombat(hero, rats);
            //combatMenu.RunCombat(hero, skeletons);
        }
        public void EquipmentTest(Character hero)
        {

            Weapon club = new Club();
            Dagger dagger = new Dagger();
            Torso tunic = new Tunic();
            Cleave cleave = new Cleave();
            MagicMissile magicMissile = new MagicMissile();
            Rage rage = new Rage();
            SleepSpell sleep = new SleepSpell();
            FireBallSpell fireBall = new FireBallSpell();
            SummonSkeletonSpell skeleton = new SummonSkeletonSpell();
            tunic.EquipItem(hero);
            //club.AddItemToInventory(hero);
            //dagger.AddItemToInventory(hero);
            //dagger.EquipItem(hero);
            //club.EquipItem(hero);
            PoisonedDagger poisonedDagger = new PoisonedDagger();
            poisonedDagger.EquipItem(hero);
            RingOfStrength ring = new RingOfStrength();
            //ring.EquipItem(hero);
            //cleave.LearnAbility(hero);
            //magicMissile.LearnSpell(hero);
            //rage.LearnAbility(hero);
            //sleep.LearnSpell(hero);
            //fireBall.LearnSpell(hero);
            Dog dog = new Dog();
            dog.JoinParty(hero);
            skeleton.LearnSpell(hero);
        }
        public void StoreTest(Character hero)
        {
            hero.AddGold(5);
            Store store = new Store("Test Store", new List<Item> { new HealingPotion("Healing Potion", 2, 5) });
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
        public void DialogueTest(Character hero)
        {
            KillQuestDialogue questDialogue = new KillQuestDialogue("Test QuestDialogue", new KillQuest("Rat Slayer", "Kill Rats", 10, 3, "Rat"));
            DialogueMenu dTest = new DialogueMenu(questDialogue);
            dTest.DisplayMenu(hero);
        }
        public void QuestTest(Character hero)
        {
            KillQuest testKill = new KillQuest("Rat Slayer", "Kill Rats", 10, 3, "Rat");
            testKill.StartQuest(hero);
            DungeonQuest testDungeonClear = new DungeonQuest("Clear Test Dungeon", "Defeat the Boss of the Test Dungeon", 10, "Test Dungeon");
            testDungeonClear.StartQuest(hero);
        }
        public void SkillTest(Character hero)
        {
            SkillMenu testSkill = new SkillMenu();
            testSkill.DisplayMenu(hero);
            AnyKey();
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine("===== Coding RPG =====");
                Console.WriteLine("[1] Character Sheet");
                Console.WriteLine("[2] Combat Test [3] Equip Test [4] Store Test [5] Dungeon Test");
                Console.WriteLine("[6] Dialogue Test [7] Quest Test [8] Skill Test");
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
                    case "6":
                        DialogueTest(hero);
                        break;
                    case "7":
                        QuestTest(hero);
                        break;
                    case "8":
                        SkillTest(hero);
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