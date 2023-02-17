using System.Text.Json.Serialization;
namespace GameModels
{
    public class DungeonMenu : LocationMenu
    {
        [JsonPropertyName("Dungeon")]
        public Dungeon Dungeon {get; set;}

        public DungeonMenu(Dungeon dungeon) : base(dungeon)
        {
            Dungeon = dungeon;
        }
        public void RunEncounter(Character hero, List<Character> enemies)
        {
            CombatMenu combatMenu = new CombatMenu();
            combatMenu.RunCombat(hero, enemies);
        }
        public override void DisplayMenu(Character hero, Character inventory)
        {
            bool showMenu = true;
            bool e1 = false;
            bool e2 = false;
            bool e3 = false;
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine("[1] Encounter 1");
                if (e1 == true)
                {
                    Console.WriteLine("[2] Encounter 2");
                }
                if (e2 == true)
                {
                    Console.WriteLine("[3] Encounter 3");
                }
                if (e3 == true)
                {
                    Console.WriteLine("[4] Boss Encounter");
                }
                Console.WriteLine("[0] Leave Dungeon");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "0":
                        showMenu = false;
                        break;
                    case "1":
                        RunEncounter(hero, Dungeon.Encounter1);
                        if (hero.BaseStats.HP.Current > 0)
                        {
                            e1 = true;
                        }
                        else
                        {
                            showMenu = false;
                        }
                        break;
                    case "2":
                        if (e1 == true)
                        {
                            RunEncounter(hero, Dungeon.Encounter2);
                            if (hero.BaseStats.HP.Current > 0)
                            {
                                e2 = true;
                            }
                            else
                            {
                                showMenu = false;
                            }
                        }
                        break;
                    case "3":
                        if (e2 == true)
                        {
                            RunEncounter(hero, Dungeon.Encounter3);
                            if (hero.BaseStats.HP.Current > 0)
                            {
                                e3 = true;
                            }
                            else
                            {
                                showMenu = false;
                            }
                        }
                        break;
                    case "4":
                        if (e3 == true)
                        {
                            RunEncounter(hero, Dungeon.BossEncounter);
                            if (hero.BaseStats.HP.Current > 0)
                            {
                                Console.WriteLine($"You have defeated the {Dungeon.Name} Dungeon");
                                List<DungeonQuest> dungeonQuests = new List<DungeonQuest>();
                                if (hero.Journal.Count > 0)
                                {
                                    for (int quest = 0; quest < hero.Journal.Count; quest++)
                                    {
                                        if (hero.Journal[quest] is DungeonQuest)
                                        {
                                            var dungeonQuest = (DungeonQuest)hero.Journal[quest];
                                            dungeonQuests.Add(dungeonQuest);
                                        }
                                        if (dungeonQuests.Count > 0)
                                        {
                                            for (int dq = 0; dq < dungeonQuests.Count; dq++)
                                            {
                                                if (dungeonQuests[dq].TargetDungeon == Dungeon.Name)
                                                {
                                                    dungeonQuests[dq].TargetDungeonCleared = true;
                                                }
                                            }
                                        }
                                    }
                                }
                                showMenu = false;
                            }
                            else
                            {
                                showMenu = false;
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}