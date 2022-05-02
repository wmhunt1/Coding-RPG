using System;
using GameModels;

namespace GameScripts;
public class CombatScripts
{
    public CombatScripts()
    {
    }
    public void Attack(Character char1, Character char2)
    {
        
        if (char2.Defense >= char1.Attack)
        {
            Console.WriteLine($"{char1.Name} attacks {char2.Name} with their {char1.Weapon.Name}, but {char2.Name}'s Armor deflects most of the {char1.Attack-char2.Defense} damage");
            char2.DamageHP(1);
        }
        else
        {
            Console.WriteLine($"{char1.Name} attacks {char2.Name} with their {char1.Weapon.Name}, dealing {char1.Attack-char2.Defense} {char1.Weapon.DamageType.Name} damage");
            char2.DamageHP(char1.Attack-char2.Defense);
        }
    }
    public void CombatTurn(Character char1, Character char2)
    {
        if (char1.CurrentHP > 0)
        {
            Attack(char1, char2);
        } 
    }
    public void CombatRound(Character char1, Character char2)
    {
        if (char1.Speed >= char2.Speed)
        {
            CombatTurn(char1, char2);
            CombatTurn(char2, char1);
        }
        else
        {
            CombatTurn(char2, char1);
            CombatTurn(char1, char2);
        }
      
    }
    public void RunCombat(Character char1, Character char2)
    {
        bool ranAway = false;
        while (char1.CurrentHP > 0 && char2.CurrentHP > 0 && ranAway == false)
        {
            Console.WriteLine($"{char1.Name}: {char1.CurrentHP}/{char1.MaxHP} VS {char2.Name}: {char2.CurrentHP}/{char2.MaxHP}");
            Console.WriteLine("[1] Attack");
            Console.WriteLine("[0] Run Away");
            string? userInput = Console.ReadLine();
            switch (userInput)
            {
                case "1":
                    CombatRound(char1, char2);
                    break;
                case "0":
                    Console.WriteLine("You Run Away");
                    ranAway = true;
                    break;
                default:
                    break;
            }
        }
        if (char1.CurrentHP > 0)
        {
            if (ranAway != true)
            {
                Console.WriteLine($"{char1.Name} Wins!");
                Console.WriteLine($"{char1.Name} gains {char2.CurrentXP} XP and {char2.Gold} Gold");
                char1.AddGold(char2.Gold);
                char1.GainXP(char2.CurrentXP);
                if (char2.BanditQuest == 1)
                {
                    char1.BanditQuest++;
                }
                if (char2.GoblinQuest == 1)
                {
                    char1.GoblinQuest++;
                }
                 if (char2.RatQuest == 1)
                {
                    char1.RatQuest++;
                }
            }
        }
        else
        {
            Console.WriteLine($"{char1.Name} was defeated!");
        }
        Console.WriteLine("Press any key to continue");
        Console.ReadLine();
    }
}
