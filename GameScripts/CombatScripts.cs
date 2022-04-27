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
        Console.WriteLine($"{char1.Name} attacks {char2.Name} with their {char1.Weapon}, dealing {char1.Attack} damage");
        char2.DamageHP(char1.Attack);
    }
    public void CombatTurn(Character char1, Character char2)
    {
        Attack(char1, char2);
    }
    public void CombatRound(Character char1, Character char2)
    {
        CombatTurn(char1, char2);
        CombatTurn(char2, char1);
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
                Console.WriteLine($"{char1.Name} gains {char2.CurrentXP} XP");
                char1.GainXP(char2.CurrentXP);
            }
        }
        else
        {
            Console.WriteLine($"{char1.Name} was defeated!");
        }
    }
}
