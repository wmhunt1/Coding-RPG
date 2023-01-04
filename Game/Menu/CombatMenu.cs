using System;
using GameModels;

namespace GameSpace
{
    public class CombatMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = false;
            }
        }
        public void CombatOptions(Character char1, List<Character> enemies)
        {
            bool showOptions = true;
            while (showOptions)
            {
                Console.WriteLine($"{char1.Name} - Combat Options");
                Console.WriteLine("[1] Basic Attack");
                Console.WriteLine("[2] Use Ability");
                Console.WriteLine("[3] Cast Spell");
                Console.WriteLine("[4] Use Item");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        Console.WriteLine("Select target");
                        for (int enemy = 0; enemy < enemies.Count; enemy++)
                        {
                            Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
                        }
                        string? targetInput = Console.ReadLine();
                        if (targetInput != null)
                        {
                            int target = Int32.Parse(targetInput);
                            char1.BasicAttack(enemies[target - 1]);
                        }
                        char1.BasicAttack(enemies[0]);
                        break;
                    default:
                        break;
                }
                showOptions = false;
            }
        }
        public void CombatTurn(Character char1, List<Character> enemies)
        {
            if (char1.Ally == true)
            {
                CombatOptions(char1, enemies);
            }
            else
            {
                Random randomTarget = new Random();
                int target = randomTarget.Next(0, enemies.Count);
                char1.BasicAttack(enemies[target]);
            }
        }

        public void CombatRound(List<Character> allies, List<Character> enemies)
        {
            for (int ally = 0; ally < allies.Count; ally++)
            {
                if (allies[ally].CurrentHP > 0)
                {
                    CombatTurn(allies[ally], enemies);
                }
            }
            for (int enemy = 0; enemy < enemies.Count; enemy++)
            {
                if (enemies[enemy].CurrentHP > 0)
                {
                    CombatTurn(enemies[enemy], allies);
                }
            }

            AnyKey();
        }
        public void RunCombat(Character hero, List<Character> enemies)
        {
            bool combatOver = false;
            int round = 1;
            List<Character> defeatedEnemies = new List<Character>();
            List<Character> allies = new List<Character>();
            allies.Add(hero);
            for (int ally = 0; ally < hero.Companions.Count; ally++)
            {
                allies.Add(hero.Companions[ally]);
            }
            while (!combatOver)
            {
                if (hero.CurrentHP > 0 && enemies.Count > 0)
                {
                    for (int enemy = 0; enemy < enemies.Count; enemy++)
                    {
                        if (enemies[enemy].CurrentHP <= 0)
                        {
                            defeatedEnemies.Add(enemies[enemy]);
                            enemies.Remove(enemies[enemy]);
                        }
                    }
                    if (enemies.Count > 0)
                    {
                        for (int ally = 0; ally < allies.Count; ally++)
                        {
                            Console.WriteLine($"{allies[ally].Name}: {allies[ally].CurrentHP}/{allies[ally].MaxHP}");
                        }
                        Console.WriteLine("VS");
                        for (int enemy = 0; enemy < enemies.Count; enemy++)
                        {
                            Console.WriteLine($"{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
                        }
                        CombatRound(allies, enemies);
                        round++;
                    }
                }
                if (hero.CurrentHP <= 0 || enemies.Count == 0)
                {
                    if (hero.CurrentHP > 0)
                    {
                        Console.WriteLine($"{hero.Name} is Victorious");
                        for (int enemy = 0; enemy < defeatedEnemies.Count; enemy++)
                        {
                            hero.EarnXP(defeatedEnemies[enemy].CurrentXP);
                        }

                    }
                    else
                    {
                        Console.WriteLine($"{hero.Name} is Defeated");
                    }
                    AnyKey();
                    combatOver = true;
                }
            }

        }
    }
}