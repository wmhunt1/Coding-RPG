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
        public void CombatOptions(Character char1, Character char2)
        {
            bool showOptions = true;
            while (showOptions)
            {
                Console.WriteLine("Combat Options");
                Console.WriteLine("[1] Attack");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        char1.Attack(char2);
                        break;
                    default:
                        break;
                }
                showOptions = false;
            }
        }
        public void CombatTurn(Character char1, Character char2)
        {
            if (char1.Name == "Hero")
            {
                CombatOptions(char1, char2);
            }
            else
            {
                char1.Attack(char2);
            }
        }
        public void CombatRound(Character char1, Character char2)
        {
            if (char1.Dexterity >= char2.Dexterity)
            {
                if (char1.CurrentHP > 0)
                {
                    CombatTurn(char1, char2);
                }
                if (char2.CurrentHP > 0)
                {
                    CombatTurn(char2, char1);
                }
                AnyKey();
            }
            else
            {
                if (char2.CurrentHP > 0)
                {
                    CombatTurn(char2, char1);
                }
                if (char1.CurrentHP > 0)
                {
                    CombatTurn(char1, char2);
                }
            }
        }
        public void RunCombat(Character hero, Character enemy)
        {
            bool combatOver = false;
            int round = 1;
            while (!combatOver)
            {
                Console.WriteLine($"Round: {round} - {hero.Name}: {hero.CurrentHP}/{hero.MaxHP} VS {enemy.Name}: {enemy.CurrentHP}/{enemy.MaxHP}");
                CombatRound(hero, enemy);
                round++;
                if (hero.CurrentHP <= 0 || enemy.CurrentHP <= 0)
                {
                    if (hero.CurrentHP > 0)
                    {
                        Console.WriteLine($"{hero.Name} is Victorious");
                        hero.EarnXP(enemy.CurrentXP);
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