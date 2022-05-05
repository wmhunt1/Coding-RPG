using System;
using GameModels;

namespace GameScripts;
public class CombatScripts
{
    public CombatScripts()
    {
    }
    public void CombatTurn(Character char1, Character char2)
    {
        if (char1.CurrentHP > 0)
        {
            char1.BasicAttack(char1, char2);
        } 
    }
    public void CombatRound(List<Character> allies, Character target, List<Character> enemies, bool skippedTurn, bool usedAbility, Ability ability, bool spellUsed, Spell spell)
    {
        if (allies[0].Speed >= target.Speed)
        {
             if (skippedTurn == false)
            {
                if (usedAbility == true)
                {
                    ability.UseAbility(allies[0], enemies);
                }
                else if(spellUsed == true)
                {
                    spell.CastSpell(allies[0], enemies);
                }
                else
                {
                    CombatTurn(allies[0], target);
                }
            }
            for (int i = 0; i < allies[0].Companions.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(1, enemies.Count);
                CombatTurn(allies[0].Companions[i], enemies[rndTarget-1]);
            }
            for (int i = 0; i < enemies.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(1, allies.Count);
                CombatTurn(enemies[i], allies[rndTarget-1]);
            }
        }
        else
        {
            for (int i = 0; i < enemies.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(1, allies.Count);
                CombatTurn(enemies[i], allies[rndTarget-1]);
            }
            if (skippedTurn == false)
            {
                 if (usedAbility == true)
                {
                    ability.UseAbility(allies[0], enemies);
                }
                else
                {
                    CombatTurn(allies[0], target);
                }
            }
            for (int i = 0; i < allies[0].Companions.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(1, enemies.Count);
                CombatTurn(allies[0].Companions[i], enemies[rndTarget-1]);
            }
        }
        for (int i = 0; i < enemies.Count; i++)
        {
            if (enemies[i].CurrentHP <= 0)
            {
                enemies.Remove(enemies[i]);
            }
        }
      
    }
    public void UseItem(Item consumable, Character character)
    {
        consumable.UseItem(character);
    }
    public async void RunCombat(Character char1, List<Character> enemies)
    {
        List<Character> rewards = new List<Character>();
        List<Character> allies = new List<Character>();
        allies.Add(char1);
        for (int i = 0; i < char1.Companions.Count; i++)
        {
            allies.Add(char1.Companions[i]);
        }
        for (int i = 0; i < enemies.Count; i++)
        {
            rewards.Add(enemies[i]);
        }
        bool ranAway = false;
        int round = 0;
        while (char1.CurrentHP > 0 && enemies.Count > 0 && ranAway == false)
        {
            round++;
            Console.WriteLine ($"Fight! - Round: {round}");
            for (int i = 0; i < allies.Count; i++)
            {
                Console.WriteLine($"{allies[i].Name} - HP: {allies[i].CurrentHP}/{allies[i].MaxHP} MP: {allies[i].CurrentMP}/{allies[i].MaxMP} SP: {allies[i].CurrentSP}/{allies[i].MaxSP}");
            }
            Console.WriteLine("VS");
            for (int i = 0; i < enemies.Count; i++)
            {
                if (enemies[i].CurrentHP > 0)
                {
                    Console.WriteLine($"{enemies[i].Name} - HP: {enemies[i].CurrentHP}/{enemies[i].MaxHP}");
                }
            }
            Console.WriteLine("[1] Attack");
            Console.WriteLine("[2] Ability");
            Console.WriteLine("[3] Use Spell");
            Console.WriteLine("[4] Use Item");
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
                        // need input validatioon
                        if (target == 0)
                        {
                            break;
                        }
                        else
                        {
                            //need input validation
                            CombatRound(allies, enemies[target-1], enemies, false, false, null, false, null);
                        }
                        
                    }
                    else
                    {
                        CombatRound(allies, enemies[0], enemies, false, false, null, false, null);
                    }                    
                    break;
                case "2":
                 if (char1.ActionBar?.Count > 0)
                    {
                        for (int i = 0; i < char1.ActionBar.Count; i++)
                        {
                            Console.WriteLine($"[{i+1}] {char1.ActionBar[i].Name}");
                        }
                        Console.WriteLine("[0] Back");
                        int selection = int.Parse(Console.ReadLine());
                        // need input validatioon
                        if (selection == 0)
                        {
                            break;
                        }
                        else
                        {
                            if (char1.ActionBar[selection-1].StaminaCost > char1.CurrentSP)
                            {
                                Console.WriteLine("Not enought stamina");
                            }
                            else
                            {
                                CombatRound(allies, enemies[0], enemies, false, true, char1.ActionBar[selection-1], false, null);
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine("You don't have an abilities");
                    }
                    break;
                    case "3":
                 if (char1.Spellbook?.Count > 0)
                    {
                        for (int i = 0; i < char1.Spellbook.Count; i++)
                        {
                            Console.WriteLine($"[{i+1}] {char1.Spellbook[i].Name}");
                        }
                        Console.WriteLine("[0] Back");
                        int selection = int.Parse(Console.ReadLine());
                        // need input validatioon
                        if (selection == 0)
                        {
                            break;
                        }
                        else
                        {
                            if (char1.Spellbook[selection-1].ManaCost > char1.CurrentMP)
                            {
                                Console.WriteLine("Not enought man");
                            }
                            else
                            {
                                CombatRound(allies, enemies[0], enemies, false, true, null, true, char1.Spellbook[selection-1]);
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine("You don't know any spells");
                    }
                    break;
                case "4":
                    if (char1.Inventory?.Count > 0)
                    {
                        for (int i = 0; i < char1.Inventory.Count; i++)
                        {
                            Console.WriteLine($"[{i+1}] {char1.Inventory[i].Name}");
                        }
                        Console.WriteLine("[0] Back");
                        int selection = int.Parse(Console.ReadLine());
                        // need input validatioon
                        if (selection == 0)
                        {
                            break;
                        }
                        else
                        {
                            //need input validation
                            UseItem(char1.Inventory[selection-1], char1);
                            CombatRound(allies, enemies[0], enemies, true, false, null, false, null);
                        }
                    }
                    else
                    {
                        Console.WriteLine("Inventory empty");
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
