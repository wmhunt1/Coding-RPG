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
        public void IterateThroughCharacterList(List<Character> characters)
        {
            for (int character = 0; character < characters.Count; character++)
            {
                Console.WriteLine($"{characters[character].Name} - HP: {characters[character].CurrentHP}/{characters[character].MaxHP} MP: {characters[character].CurrentMP}/{characters[character].MaxMP} SP: {characters[character].CurrentSP}/{characters[character].MaxSP}");
            }
        }
        public void AttackOption(Character char1, List<Character> enemies)
        {
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
            else
            {
                Console.WriteLine("You choose no target and miss");
            }
            AnyKey();
        }
        public void AbilityOption(Character char1, List<Character> targets)
        {
            Console.WriteLine("Select Ability");
            for (int ability = 0; ability < char1.Abilities.Count; ability++)
            {
                Console.WriteLine($"[{ability + 1}]{char1.Abilities[ability].Name} : {char1.Abilities[ability].StaminaCost}");
            }
            string? selectionInput = Console.ReadLine();
            if (selectionInput != null)
            {
                int selection = Int32.Parse(selectionInput);
                char1.Abilities[selection - 1].UseAbility(char1, targets);
            }
            AnyKey();
        }
        public void SpellOption(Character char1, List<Character> targets)
        {
              Console.WriteLine("Select Spell");
            for (int spell = 0; spell < char1.SpellBook.Count; spell++)
            {
                Console.WriteLine($"[{spell + 1}]{char1.SpellBook[spell].Name} : {char1.SpellBook[spell].ManaCost}");
            }
            string? selectionInput = Console.ReadLine();
            if (selectionInput != null)
            {
                int selection = Int32.Parse(selectionInput);
                char1.SpellBook[selection - 1].CastSpell(char1, targets);
            }
            AnyKey();
        }
        public void UseItemOption(Character char1, List<Character> enemies)
        {
            Console.WriteLine("Select Item");
            if (char1.Inventory.Count > 0)
            {
                List<Item> consumables = new List<Item>();
                for (int item = 0; item < char1.Inventory.Count; item++)
                {
                    if (char1.Inventory[item] is Consumable)
                    {
                        consumables.Add(char1.Inventory[item]);
                    }
                }
                if (consumables.Count > 0)
                {
                    for (int item = 0; item < consumables.Count; item++)
                    {
                        Console.WriteLine($"[{item + 1}]{consumables[item].Name}");
                        string? selectionInput = Console.ReadLine();
                        if (selectionInput != null)
                        {
                            int selection = Int32.Parse(selectionInput);
                            consumables[selection - 1].ConsumeItem(char1);
                        }
                    }
                }
            }
            else
            {
                Console.WriteLine("You have no items that can be used in combat!");
            }
            AnyKey();
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
                        AttackOption(char1, enemies);
                        break;
                    case "2":
                        AbilityOption(char1, enemies);
                        break;
                    case "3":
                        SpellOption(char1, enemies);
                        break;
                    case "4":
                        UseItemOption(char1, enemies);
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
                        IterateThroughCharacterList(allies);
                        Console.WriteLine("VS");
                        IterateThroughCharacterList(enemies);
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