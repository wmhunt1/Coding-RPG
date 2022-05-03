﻿using System;
using GameModels;

namespace GameScripts;
public class CombatScripts
{
    public CombatScripts()
    {
    }
    public int CalculateDamage(Character char1, Character char2)
    {
        int damage = char1.Attack - char2.Defense;
        if (char1.CheckImmunities(char2.Weapon.DamageType) == true)
        {
            Console.WriteLine("i");
            damage = 0;
            Console.WriteLine(damage);
        }
        if (char1.CheckResistances(char2.Weapon.DamageType) == true)
        {
            Console.WriteLine("r");
            damage /= 2;
            Console.WriteLine(damage);
        }
        if (char1.CheckVulnerabilities(char2.Weapon.DamageType) == true)
        {
            Console.WriteLine("v");
            damage *= 2;
            Console.WriteLine(damage);
        }
        if (damage <= 0)
        {
            Console.WriteLine("d");
            damage = 0;
        }
        return damage;
    }
    public void Attack(Character char1, Character char2)
    {
        
        int damage = CalculateDamage(char1, char2);
        Console.WriteLine($"{char1.Name} attacks {char2.Name} with their {char1.Weapon.Name}, dealing {damage} damage");  
        char2.DamageHP(damage);
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
