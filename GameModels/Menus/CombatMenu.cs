namespace GameModels
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
        public void RemoveBuffOrDeBuffIfDurationExpired(List<Character> allies)
        {
            for (int ally = 0; ally < allies.Count; ally++)
            {

                if (allies[ally].Buffs.Count > 0)
                {
                    for (int buff = 0; buff < allies[ally].Buffs.Count; buff++)
                    {
                        allies[ally].Buffs[buff].RemainingDuration--;
                    }
                    if (allies[ally].Buffs.Find(x => x.RemainingDuration == 0) != null)
                    {
                        allies[ally].Buffs.Find(x => x.RemainingDuration == 0)?.RemoveBuff(allies[ally]);
                    }
                }
                if (allies[ally].DeBuffs.Count > 0)
                {
                    for (int deBuff = 0; deBuff < allies[ally].DeBuffs.Count; deBuff++)
                    {
                        allies[ally].DeBuffs[deBuff].RemainingDuration--;
                    }
                     if (allies[ally].DeBuffs.Find(x => x.RemainingDuration == 0) != null)
                    {
                        allies[ally].DeBuffs.Find(x => x.RemainingDuration == 0)?.RemoveDeBuff(allies[ally]);
                    }
                }
            }
        }
        public void IterateThroughCharacterList(List<Character> characters)
        {
            for (int character = 0; character < characters.Count; character++)
            {
                if (characters[character].CurrentHP > 0)
                {
                    characters[character].RegenAll();
                    Console.WriteLine($"{characters[character].Name} - HP: {characters[character].CurrentHP}/{characters[character].MaxHP} MP: {characters[character].CurrentMP}/{characters[character].MaxMP} SP: {characters[character].CurrentSP}/{characters[character].MaxSP}");
                    if (characters[character].Conditions.Count > 0)
                    {
                        for (int cond = 0; cond < characters[character].Conditions.Count; cond++)
                        {
                            Console.WriteLine($"{characters[character].Conditions[cond].Name}");
                        }
                    }
                }
            }
        }
        public void AttackOption(Character char1, List<Character> enemies)
        {
            Console.WriteLine("Select target");
            for (int enemy = 0; enemy < enemies.Count; enemy++)
            {
                if (enemies[enemy].CurrentHP > 0)
                {
                    Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
                }
            }
            string? selectionInput = Console.ReadLine();
            int selection;
            bool parseSucess = Int32.TryParse(selectionInput, out selection);
            if (parseSucess == true && selection > 0 && selection <= enemies.Count)
            {
                char1.BasicAttack(enemies[selection - 1]);
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
            int selection;
            bool parseSucess = Int32.TryParse(selectionInput, out selection);
            if (parseSucess == true && selection > 0 && selection <= char1.Abilities.Count)
            {
                char1.Abilities[selection - 1].UseAbility(char1, targets);
            }
            AnyKey();
        }
        public void SpellOption(Character char1, List<Character> allies, List<Character> enemies)
        {
            Console.WriteLine("Select Spell");
            for (int spell = 0; spell < char1.SpellBook.Count; spell++)
            {
                Console.WriteLine($"[{spell + 1}]{char1.SpellBook[spell].Name} : {char1.SpellBook[spell].ManaCost}");
            }
            string? selectionInput = Console.ReadLine();
            int selection;
            bool parseSucess = Int32.TryParse(selectionInput, out selection);
            if (parseSucess == true && selection > 0 && selection <= char1.SpellBook.Count)
            {
                char1.SpellBook[selection - 1].CastSpell(char1, allies, enemies);
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
                        int selection;
                        bool parseSucess = Int32.TryParse(selectionInput, out selection);
                        if (parseSucess == true && selection > 0 && selection <= consumables.Count)
                        {
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
        public bool CheckIfEnemiesLeft(List<Character> enemies)
        {
            bool left = false;
            for (int enemy = 0; enemy < enemies.Count; enemy++)
            {
                if (enemies[enemy].CurrentHP > 0)
                {
                    left = true;
                }
            }
            return left;
        }
        public void CombatOptions(Character char1, List<Character> allies, List<Character> enemies)
        {
            bool showOptions = true;
            bool check = CheckIfEnemiesLeft(enemies);
            if (check == true)
            {
                while (showOptions)
                {
                    for (int enemy = 0; enemy < enemies.Count; enemy++)
                    {
                        if (enemies[enemy].CurrentHP > 0)
                        {
                            Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
                        }
                    }
                    Console.WriteLine($"{char1.Name} - Combat Options");
                    Console.WriteLine("[1] Basic Attack");
                    if (char1.Abilities.Count > 0)
                    {
                        Console.WriteLine("[2] Use Ability");
                    }
                    if (char1.SpellBook.Count > 0)
                    {
                        Console.WriteLine("[3] Cast Spell");
                    }
                    Console.WriteLine("[4] Use Item");
                    string? input = Console.ReadLine();
                    switch (input)
                    {
                        case "1":
                            AttackOption(char1, enemies);
                            break;
                        case "2":
                            if (char1.Abilities.Count > 0)
                            {
                                AbilityOption(char1, enemies);
                            }
                            break;
                        case "3":
                            if (char1.SpellBook.Count > 0)
                            {
                                SpellOption(char1, allies, enemies);
                            }
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
        }
        public void CombatTurn(Character char1, List<Character> allies, List<Character> enemies)
        {
            if (char1.Ally == true)
            {
                CombatOptions(char1, allies, enemies);
            }
            else
            {
                char1.CombatAI(char1, allies, enemies);
            }
        }
        public void ChanceForConditionToEnd(Character char1)
        {
            if (char1.Conditions.Count > 0)
            {
                for (int cond = 0; cond < char1.Conditions.Count; cond++)
                {
                    Random random = new Random();
                    int chance = random.Next(0, 100);
                    if (chance >= 50)
                    {
                        Console.WriteLine($"{char1.Name}'s {char1.Conditions[cond].Name}'s condition ends");
                        char1.Conditions[cond].RemoveCondition(char1);
                    }
                }
            }
        }
        public bool CheckForTurnSkippingConditions(Character char1)
        {
            bool turnSkip = false;
            if (char1.Conditions.Count > 0)
            {
                for (int cond = 0; cond < char1.Conditions.Count; cond++)
                {
                    if (char1.Conditions[cond].Name == "Asleep")
                    {
                        turnSkip = true;
                    }
                }
            }
            return turnSkip;
        }
        public void TakeConditionalDamage(Character char1)
        {
            List<DamageCondition> damageConds = new List<DamageCondition>();
            if (char1.Conditions.Count > 0)
            {
                for (int cond = 0; cond < char1.Conditions.Count; cond++)
                {
                    if (char1.Conditions[cond] is DamageCondition)
                    {
                        var damageCondition = (DamageCondition)char1.Conditions[cond];
                        damageConds.Add(damageCondition);
                    }
                }
            }
            if (damageConds.Count > 0)
            {
                for (int cond = 0; cond < damageConds.Count; cond++)
                {
                    Console.WriteLine($"{char1.Name} takes {damageConds[cond].DamageAmount} {damageConds[cond].DamageType.Name} Damage due to {damageConds[cond].Name}");
                    damageConds[cond].ApplyConditionDamage(char1);
                }
            }
        }
        public void GroupTurn(List<Character> allies, List<Character> enemies)
        {
            for (int ally = 0; ally < allies.Count; ally++)
            {
                if (allies[ally].CurrentHP > 0)
                {
                    ChanceForConditionToEnd(allies[ally]);
                    bool turnSkip = CheckForTurnSkippingConditions(allies[ally]);
                    if (turnSkip != true)
                    {
                        CombatTurn(allies[ally], allies, enemies);
                    }
                    else
                    {
                        Console.WriteLine($"{allies[ally].Name} lost their turn due to sleep");
                    }
                    TakeConditionalDamage(allies[ally]);
                }
            }
        }
        public void CombatRound(List<Character> allies, List<Character> enemies)
        {
            GroupTurn(allies, enemies);
            GroupTurn(enemies, allies);
            RemoveBuffOrDeBuffIfDurationExpired(allies);
            RemoveBuffOrDeBuffIfDurationExpired(enemies);
            AnyKey();
        }
        public void EndOfCombatBuffAndDeBuffRemoval(List<Character> allies)
        {
            for (int ally = 0; ally < allies.Count; ally++)
            {
                for (int buff = 0; buff < allies[ally].Buffs.Count; buff++)
                {
                    allies[ally].Buffs[buff].RemoveBuff(allies[ally]);
                }
                for (int deBuff = 0; deBuff < allies[ally].DeBuffs.Count; deBuff++)
                {
                    allies[ally].DeBuffs[deBuff].RemoveDeBuff(allies[ally]);
                }
            }
        }
        public void EndofCombatConditionRemoval(List<Character> allies)
        {
            for (int ally = 0; ally < allies.Count; ally++)
            {
                if (allies[ally].Conditions.Count > 0)
                {
                    for (int cond = 0; cond < allies[ally].Conditions.Count; cond++)
                    {
                        allies[ally].Conditions[cond].RemoveCondition(allies[ally]);
                    }
                }
            }
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
                            hero.AddGold(defeatedEnemies[enemy].Gold);
                            if (defeatedEnemies[enemy].ItemDrop.Name != "No Drop")
                            {
                                defeatedEnemies[enemy].ItemDrop.AddItemToInventory(hero);
                            }
                            if (hero.Companions.Count > 0)
                            {
                                for (int comp = 0; comp < hero.Companions.Count; comp++)
                                {
                                    hero.Companions[comp].EarnXP(defeatedEnemies[enemy].CurrentXP);
                                }
                            }

                        }
                        for (int enemy = 0; enemy < defeatedEnemies.Count; enemy++)
                        {
                            List<KillQuest> killQuests = new List<KillQuest>();
                            if (hero.Journal.Count > 0)
                            {
                                for (int quest = 0; quest < hero.Journal.Count; quest++)
                                {
                                    if (hero.Journal[quest] is KillQuest)
                                    {
                                        var killQuest = (KillQuest)hero.Journal[quest];
                                        killQuests.Add(killQuest);
                                    }
                                    if (killQuests.Count > 0)
                                    {
                                        for (int kq = 0; kq < killQuests.Count; kq++)
                                        {
                                            if (killQuests[kq].TargetMonster == defeatedEnemies[enemy].Name)
                                            {
                                                killQuests[kq].TotalKilled++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine($"{hero.Name} is Defeated");
                    }
                    EndOfCombatBuffAndDeBuffRemoval(allies);
                    EndOfCombatBuffAndDeBuffRemoval(hero.Companions);
                    EndofCombatConditionRemoval(allies);
                    EndofCombatConditionRemoval(hero.Companions);
                    AnyKey();
                    combatOver = true;
                }
            }

        }
    }
}