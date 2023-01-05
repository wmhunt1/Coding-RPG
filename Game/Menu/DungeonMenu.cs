using System;
using GameModels;

namespace GameSpace
{
    public class DungeonMenu : LocationMenu
    {
        public List<Character> Encounter1;
        public List<Character> Encounter2;
        public List<Character> Encounter3;
        public List<Character> BossEncounter;
        public DungeonMenu(string name, List<Character> encounter1, List<Character> encounter2, List<Character> encounter3, List<Character> bossEncounter) : base(name)
        {
            Name = name;
            Encounter1 = encounter1;
            Encounter2 = encounter2;
            Encounter3 = encounter3;
            BossEncounter = bossEncounter;
        }
        public void RunEncounter(Character hero, List<Character> enemies)
        {
            CombatMenu combatMenu = new CombatMenu();
            combatMenu.RunCombat(hero, enemies);
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            bool e1 = false;
            bool e2 = false;
            bool e3 = false;
            while (showMenu)
            {
                Console.WriteLine(" ===== Coding RPG ===== ");
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
                        RunEncounter(hero, Encounter1);
                        if (hero.CurrentHP > 0)
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
                            RunEncounter(hero, Encounter2);
                            if (hero.CurrentHP > 0)
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
                            RunEncounter(hero, Encounter3);
                            if (hero.CurrentHP > 0)
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
                            RunEncounter(hero, BossEncounter);
                            if (hero.CurrentHP > 0)
                            {
                                Console.WriteLine($"You have defeated the {Name} Dungeon");
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