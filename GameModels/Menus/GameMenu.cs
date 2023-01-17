namespace GameModels
{
    public class GameMenu : Menu
    {
        public void CombatTest(Character hero)
        {
            CombatMenu combatMenu = new CombatMenu();
            List<Character> rats = new List<Character> { new Rat(), new Rat(), new Rat() };
            List<Character> skeletons = new List<Character> { new Skeleton() };
            List<Character> orcs = new List<Character> { new Orc() };
            List<Character> mages = new List<Character> { new Mage() };
            List<Character> healers = new List<Character> { new Healer() };
            List<Character> summoners = new List<Character> { new Summoner() };
            combatMenu.RunCombat(hero, rats);
            //combatMenu.RunCombat(hero, skeletons);
            //combatMenu.RunCombat(hero, orcs);
            //combatMenu.RunCombat(hero, mages);
            //combatMenu.RunCombat(hero, healers);
            //combatMenu.RunCombat(hero, summoners);
        }
        public void EquipmentTest(Character hero)
        {
           
        }
        public void StoreTest(Character hero)
        {
            hero.AddGold(5);
            Store store = new Store("Test Store", new List<Item> { new HealthPotion("Healing Potion", 2, 5) });
            StoreMenu storeTest = new StoreMenu(store);
            storeTest.DisplayMenu(hero, hero);
        }
        public void DungeonTest(Character hero)
        {

            List<Character> e1 = new List<Character> { new Rat() };
            List<Character> e2 = new List<Character> { new Rat() };
            List<Character> e3 = new List<Character> { new Rat() };
            List<Character> boss = new List<Character> { new Rat() };
            Dungeon dungeon = new Dungeon("Test Dungeon", e1, e2, e3, boss);
            DungeonMenu dungeonTest = new DungeonMenu(dungeon);
            dungeonTest.DisplayMenu(hero, hero);
        }
        public void DialogueTest(Character hero)
        {
            KillQuestDialogue questDialogue = new KillQuestDialogue("Test QuestDialogue", new KillQuest("Rat Slayer", "Kill Rats", 10, 3, "Rat"));
            DialogueMenu dTest = new DialogueMenu(questDialogue);
            dTest.DisplayMenu(hero, hero);
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
            testSkill.DisplayMenu(hero, hero);
            AnyKey();
        }
        public void LocationTest(Character hero)
        {
            TestTown town = new TestTown();
            LocationMenu locationMenu = new LocationMenu(town);
            locationMenu.DisplayMenu(hero, hero);
            AnyKey();
        }
        public void FactionTest(Character hero)
        {
            Faction testFaction = new Faction("Test Faction", new List<string> { "1", "2", "3" });
            testFaction.GetPromotion(hero);
            testFaction.JoinFaction(hero);
            AnyKey();
        }
        public void TestingMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine("[1] Character Sheet");
                Console.WriteLine("[2] Combat Test [3] Equip Test [4] Store Test [5] Dungeon Test");
                Console.WriteLine("[6] Dialogue Test [7] Quest Test [8] Skill Test [9] Test Town");
                Console.WriteLine("[10] Faction Test");
                Console.WriteLine("[0] Back to Game");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        CharacterSheetMenu characterSheetMenu = new CharacterSheetMenu();
                        characterSheetMenu.DisplayMenu(hero, hero);
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
                        LocationTest(hero);
                        break;
                    case "10":
                        FactionTest(hero);
                        break;
                    case "0":
                        showMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
        public override void DisplayMenu(Character hero, Character inventory)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine("[1] Character Sheet");
                Console.WriteLine("[2] Testing Menu");
                Console.WriteLine("[3] Enter Dale Valley");
                Console.WriteLine("[9] Save Game");
                Console.WriteLine("[0] Main Menu");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        CharacterSheetMenu characterSheetMenu = new CharacterSheetMenu();
                        characterSheetMenu.DisplayMenu(hero, hero);
                        break;
                    case "2":
                        TestingMenu(hero);
                        break;
                    case "3":
                        DaleValley daleValley = new DaleValley();
                        LocationMenu daleValleyMenu = new LocationMenu(daleValley);
                        daleValleyMenu.DisplayMenu(hero, hero);
                        break;
                    case "9":
                        SaveGame(hero);
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