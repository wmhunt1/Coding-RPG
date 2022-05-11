using System;

namespace GameModels;
public class CombatScripts
{
    UIScripts ui = new UIScripts();
    public CombatScripts()
    {
    }
    public void CombatTurn(Character char1, Character char2)
    {
        if (char1.CurrentHP > 0)
        {
            char1.BasicAttack(char1, char2);
            ui.AnyKey();
        }
    }
    public async void CombatRound(List<Character> allies, Character target, List<Character> enemies, bool skippedTurn, bool usedAbility, Ability ability, bool spellUsed, Spell spell)
    {
        if (allies[0].Speed >= target.Speed)
        {
            if (skippedTurn == false)
            {
                if (usedAbility == true)
                {
                    ability.UseAbility(allies[0], enemies);
                    ui.AnyKey();
                }
                else if (spellUsed == true)
                {
                    if (spell is BuffingSpell || spell is HealingSpell || spell is SummoningSpell)
                    {
                        spell.CastSpell(allies[0], allies);
                    }
                    else
                    {
                        spell.CastSpell(allies[0], enemies);
                    }
                    ui.AnyKey();
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
                CombatTurn(allies[0].Companions[i], enemies[rndTarget - 1]);
            }
            for (int i = 0; i < enemies.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(0, allies.Count);
                CombatTurn(enemies[i], allies[rndTarget]);
            }
        }
        else
        {
            for (int i = 0; i < enemies.Count; i++)
            {
                Random rnd = new Random();
                int rndTarget = rnd.Next(0, allies.Count);
                CombatTurn(enemies[i], allies[0]);
            }
            if (skippedTurn == false)
            {
                if (usedAbility == true)
                {
                    ability.UseAbility(allies[0], enemies);
                    ui.AnyKey();
                }
                else if (spellUsed == true)
                {
                    if (spell is BuffingSpell || spell is HealingSpell || spell is SummoningSpell)
                    {
                        spell.CastSpell(allies[0], allies);
                    }
                    else
                    {
                        spell.CastSpell(allies[0], enemies);
                    }
                    ui.AnyKey();
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
                CombatTurn(allies[0].Companions[i], enemies[rndTarget - 1]);
            }
        }
        for (int i = 0; i < enemies.Count; i++)
        {
            if (enemies[i].CurrentHP <= 0)
            {
                enemies.Remove(enemies[i]);
            }
        }
        for (int i = 0; i < allies.Count; i++)
        {
            if (allies[i].CurrentHP <= 0)
            {
                allies.Remove(allies[i]);
            }
        }
        for (int i = 0; i < allies.Count; i++)
        {
            if (allies[i].Buffs.Count > 0)
            {
                for (int j = 0; j < allies[i].Buffs.Count; j++)
                {
                    allies[i].DecreaseBuffDuration(allies[i].Buffs[j]);
                    allies[i].RemoveBuff(allies[i].Buffs[j]);
                }
            }
            if (allies[i].DeBuffs.Count > 0)
            {
                for (int j = 0; j < allies[i].DeBuffs.Count; j++)
                {
                    allies[i].DecreaseDeBuffDuration(allies[i].DeBuffs[j]);
                    allies[i].RemoveDeBuff(allies[i].DeBuffs[j]);
                }
            }
        }
        for (int i = 0; i < enemies.Count; i++)
        {
            if (enemies[i].Buffs.Count > 0)
            {
                for (int j = 0; j < enemies[i].Buffs.Count; j++)
                {
                    enemies[i].DecreaseBuffDuration(enemies[i].Buffs[j]);
                    enemies[i].RemoveBuff(enemies[i].Buffs[j]);
                }
            }
            if (enemies[i].DeBuffs.Count > 0)
            {
                for (int j = 0; j < enemies[i].DeBuffs.Count; j++)
                {
                    enemies[i].DecreaseDeBuffDuration(enemies[i].DeBuffs[j]);
                    enemies[i].RemoveDeBuff(enemies[i].DeBuffs[j]);
                }
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
        bool combat = true;
        bool ranAway = false;
        int round = 0;
        while (char1.CurrentHP > 0 && enemies.Count > 0 && ranAway == false && combat == true)
        {
            round++;
            if (enemies.Count == 0)
            {
                combat = false;
            }
            Console.WriteLine($"Fight! - Round: {round}");
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
            ui.AnyKey();
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
                                Console.WriteLine($"[{i + 1}] {enemies[i].Name}: {enemies[i].CurrentHP}/{enemies[i].MaxHP}");
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
                            CombatRound(allies, enemies[target - 1], enemies, false, false, null, false, null);
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
                            Console.WriteLine($"[{i + 1}] {char1.ActionBar[i].Name}");
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
                            if (char1.ActionBar[selection - 1].StaminaCost > char1.CurrentSP)
                            {
                                Console.WriteLine("Not enought stamina");
                            }
                            else
                            {
                                CombatRound(allies, enemies[0], enemies, false, true, char1.ActionBar[selection - 1], false, null);
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
                            Console.WriteLine($"[{i + 1}] {char1.Spellbook[i].Name}");
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
                            if (char1.Spellbook[selection - 1].ManaCost > char1.CurrentMP)
                            {
                                Console.WriteLine("Not enought mana");
                            }
                            else
                            {
                                CombatRound(allies, enemies[0], enemies, false, true, null, true, char1.Spellbook[selection - 1]);
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
                            if (char1.Inventory[i] is Consumable)
                            {
                                Console.WriteLine($"[{i + 1}] {char1.Inventory[i].Name}");
                            }
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
                            UseItem(char1.Inventory[selection - 1], char1);
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
                    for (int j = 0; j < char1.Journal.Count; j++)
                    {
                        if (rewards[i].Name == char1.Journal[j].QuestTarget)
                        {
                            char1.Journal[j].TrackQuestProgress();
                        }
                    }
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
        for (int i = 0; i < allies.Count; i++)
        {
            allies[i].RemoveAllBuffs(allies[i].Buffs);
            allies[i].RemoveAllDeBuffs(allies[i].DeBuffs);
        }
        ui.AnyKey();
    }
}
