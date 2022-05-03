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
    public void CombatRound(Character char1, Character target, List<Character> enemies)
    {
        if (char1.Speed >= target.Speed)
        {
            CombatTurn(char1, target);
            for (int i = 0; i < enemies.Count; i++)
            {
                CombatTurn(enemies[i], char1);
            }
        }
        else
        {
            for (int i = 0; i < enemies.Count; i++)
            {
                CombatTurn(enemies[i], char1);
            }
            CombatTurn(char1, target);
        }
        for (int i = 0; i < enemies.Count; i++)
        {
            if (enemies[i].CurrentHP <= 0)
            {
                enemies.Remove(enemies[i]);
            }
        }
      
    }
    public async void RunCombat(Character char1, List<Character> enemies)
    {
        List<Character> rewards = new List<Character>();
        for (int i = 0; i < enemies.Count; i++)
        {
            rewards.Add(enemies[i]);
        }
        bool ranAway = false;
        while (char1.CurrentHP > 0 && enemies.Count > 0 && ranAway == false)
        {
            Console.WriteLine ("Fight!");
            Console.WriteLine($"{char1.Name}: {char1.CurrentHP}/{char1.MaxHP}\nVS");
            for (int i = 0; i < enemies.Count; i++)
            {
                if (enemies[i].CurrentHP > 0)
                {
                    Console.WriteLine($"{enemies[i].Name}: {enemies[i].CurrentHP}/{enemies[i].MaxHP}");
                }
            }
            Console.WriteLine("[1] Attack");
            Console.WriteLine("[0] Run Away");
            string? userInput = Console.ReadLine();
            switch (userInput)
            {
                case "1":
                    if (enemies.Count > 1)
                    {
                        Console.WriteLine("Select Target");
                        for (int i = 0; i < enemies.Count; i++)
                        {
                            if (enemies[i].CurrentHP > 0)
                            {
                                Console.WriteLine($"[{i+1}] {enemies[i].Name}: {enemies[i].CurrentHP}/{enemies[i].MaxHP}");
                            }
                            
                        }
                        Console.WriteLine("[0] Back");
                        int target = int.Parse(Console.ReadLine());
                        if (target == 0)
                        {
                            break;
                        }
                        else
                        {
                            //need input validation
                            CombatRound(char1, enemies[target-1], enemies);
                        }
                        
                    }
                    else
                    {
                        CombatRound(char1, enemies[0], enemies);
                    }                    
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
                for (int i = 0; i < rewards.Count; i++)
                {
                    Console.WriteLine($"{char1.Name} gains {rewards[i].CurrentXP} XP and {rewards[i].Gold} Gold");
                    char1.AddGold(rewards[i].Gold);
                    char1.GainXP(rewards[i].CurrentXP);
                }
              
            }
        }
        else
        {
            Console.WriteLine($"{char1.Name} was defeated!");
        }
        for (int i = 0; i < rewards.Count; i++)
        {
            enemies.Add(rewards[i]);
        }
        Console.WriteLine("Press any key to continue");
        Console.ReadLine();
    }
}
