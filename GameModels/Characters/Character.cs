namespace GameModels;
public class Character
{
    public string Name = "";
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 100;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int CurrentMP = 10;
    public int MaxMP = 10;
    public int CurrentSP = 10;
    public int MaxSP = 10;
    public int Strength = 10;
    public int Constitution = 10;
    public int Dexterity = 10;
    public int Intelligence = 10;
    public int Wisdom = 10;
    public int Charisma = 10;
    public int WillPower = 10;
    public int Perception = 10;
    public int Luck = 10;
    public int Beauty = 10;
    public int StrengthBonus = 0;
    public int StrengthPenalty = 0;
    public bool Ally = false;
    public Weapon Weapon = new Fist();
    public Torso Torso = new NakedTorso();
    public Accessory Accessory = new Accessory("None", 0);
    public List<Character> Companions = new List<Character>();
    public int Gold = 0;
    public List<Item> Inventory = new List<Item>();
    public List<Ability> Abilities = new List<Ability>();
    public List<Spell> SpellBook = new List<Spell>();
    public List<Quest> Journal = new List<Quest>();
    public List<DamageType> Immunities = new List<DamageType>();
    public List<DamageType> Resistances = new List<DamageType>();
    public List<DamageType> Weaknesses = new List<DamageType>();
    public List<Buff> Buffs = new List<Buff>();
    public List<DeBuff> DeBuffs = new List<DeBuff>();
    public Character(string name)
    {
        Name = name;
        Ally = true;
    }
    public int LevelUp()
    {
        this.Level++;
        Console.WriteLine($"{this.Name} Levels Up, reaching Level {this.Level}");
        this.MaxXP = this.Level * this.MaxXP;
        HealHP(this.MaxHP);
        return this.Level;
    }
    public bool CheckForLevelUp()
    {
        if (this.CurrentXP >= this.MaxXP)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public int EarnXP(int exp)
    {
        this.CurrentXP += exp;
        Console.WriteLine($"{this.Name} gains {exp} XP");
        bool levelUp = this.CheckForLevelUp();
        if (levelUp == true)
        {
            this.LevelUp();
        }
        return this.CurrentXP;
    }
    public int HealHP(int heal)
    {
        this.CurrentHP += heal;

        if (this.CurrentHP > this.MaxHP)
        {
            this.CurrentHP = this.MaxHP;
        }
        return this.CurrentHP;
    }
    public int TakeDamage(int damage)
    {
        if (damage >= 0)
        {
            this.CurrentHP -= damage;
        }
        return this.CurrentHP;
    }
    public int GainMana(int gain)
    {
        this.CurrentMP += gain;

        if (this.CurrentMP > this.MaxMP)
        {
            this.CurrentMP = this.MaxMP;
        }
        return this.CurrentMP;
    }
    public int SpendMana(int cost)
    {
        if (cost >= 0)
        {
            this.CurrentMP -= cost;
        }
        return this.CurrentMP;
    }
    public int RecoverStamina(int gain)
    {
        this.CurrentSP += gain;

        if (this.CurrentSP > this.MaxSP)
        {
            this.CurrentSP = this.MaxSP;
        }
        return this.CurrentSP;
    }
    public int SpendStamina(int cost)
    {
        if (cost >= 0)
        {
            this.CurrentSP -= cost;
        }
        return this.CurrentSP;
    }
    public void FullRest()
    {
        Console.WriteLine($"{this.Name} rests and fully recovers.");
        HealHP(MaxHP);
        GainMana(MaxMP);
        RecoverStamina(MaxSP);
    }
    public int CheckForCrit(int damage)
    {
        Random rand = new Random();
        int number = rand.Next(0, 100);
        if (number <= this.Luck)
        {
            Console.WriteLine("Critical Hit!");
            damage *= 2;
        }
        return damage;
    }
    public bool CheckForImmunity(Character target, DamageType damageType)
    {
        bool check = false;
        if (target.Immunities.Count > 0)
        {
            for (int damage = 0; damage < target.Immunities.Count; damage++)
            {
                if (damageType.Name == target.Immunities[damage].Name)
                {
                    check = true;
                }
            }
        }
        if (check == true)
        {
            Console.WriteLine($"{target.Name} is immune to {damageType.Name}");
        }
        return check;
    }
    public bool CheckForResistance(Character target, DamageType damageType)
    {
        bool check = false;
        if (target.Resistances.Count > 0)
        {
            for (int damage = 0; damage < target.Resistances.Count; damage++)
            {
                if (damageType.Name == target.Resistances[damage].Name)
                {
                    check = true;
                }
            }
        }
        if (check == true)
        {
            Console.WriteLine($"{target.Name} is resistant to {damageType.Name}");
        }
        return check;
    }
    public bool CheckForWeakness(Character target, DamageType damageType)
    {
        bool check = false;
        if (target.Weaknesses.Count > 0)
        {
            for (int damage = 0; damage < target.Weaknesses.Count; damage++)
            {
                if (damageType.Name == target.Weaknesses[damage].Name)
                {
                    check = true;
                }
            }
        }
        if (check == true)
        {
            Console.WriteLine($"{target.Name} is weak to {damageType.Name}");
        }
        return check;
    }
    public int CalculateDamage(Character target, int damage, DamageType damageType)
    {
        bool immune = CheckForImmunity(target, damageType);
        bool resistant = CheckForResistance(target, damageType);
        bool weak = CheckForWeakness(target, damageType);
        if (immune == true)
        {
            damage = 0;
        }
        if (resistant == true)
        {
            damage /= 2;
        }
        if (weak == true)
        {
            damage *= 2;
        }
        return damage;
    }
    public int CalculateDamageWithPossibleCrit(Character target, int damage, DamageType damageType)
    {
        int critDamage = CheckForCrit(damage);
        int calcDamage = CalculateDamage(target, critDamage, damageType);
        if (critDamage == damage * 2)
        {
            calcDamage = 1;
        }
        return calcDamage;
    }
    public void BasicAttack(Character target)
    {
        int totalArmor = target.Torso.Protection;
        int damage = this.Strength + this.Weapon.WeaponDmg + this.StrengthBonus - totalArmor - target.Dexterity - this.StrengthPenalty;
        int calculatedDamage = CalculateDamageWithPossibleCrit(target, damage, this.Weapon.WeaponDmgType);
        target.TakeDamage(calculatedDamage);
        if (calculatedDamage > 0)
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, dealing {calculatedDamage} {this.Weapon.WeaponDmgType.Name} Damage");
        }
        else
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, but deals no damage");
        }
    }
    public void AttackSpell(Character target, int baseDamage, DamageType damageType)
    {
        int damage = CalculateDamage(target, baseDamage, damageType);
        target.TakeDamage(damage);
    }
    public int AddGold(int gp)
    {
        Gold += gp;
        return Gold;
    }
    public int RemoveGold(int gp)
    {
        Gold -= gp;
        return Gold;
    }
    public List<Item> AddItemToInventory(Item item)
    {
        bool alreadyOwned = false;
        if (Inventory.Count > 0)
        {
            for (int itm = 0; itm < Inventory.Count; itm++)
            {
                if (Inventory[itm].Name == item.Name)
                {
                    alreadyOwned = true;
                    Inventory[itm].Quantity++;
                }
            }
        }
        if (alreadyOwned == false)
        {
             Inventory.Add(item);
        }
        return Inventory;
    }
    public List<Item> RemoveItemFromInventory(Item item)
    {
        bool onlyOne = true;
        if (Inventory.Count > 0)
        {
            for (int itm = 0; itm < Inventory.Count; itm++)
            {
                if (Inventory[itm].Name == item.Name)
                {
                    onlyOne = false;
                    Inventory[itm].Quantity--;
                }
            }
        }
        if (onlyOne == true)
        {
             Inventory.Remove(item);
        }
        return Inventory;
    }
    public List<Ability> LearnAbility(Ability ability)
    {
        bool alreadyKnown = false;
        if (Abilities.Count > 0)
        {
            for (int abil = 0; abil < Abilities.Count; abil++)
            {
                if (Abilities[abil].Name == ability.Name)
                {
                    alreadyKnown = true;
                }
            }
        }
        if (alreadyKnown == false)
        {
            Abilities.Add(ability);
        }
        return Abilities;
    }
    public List<Spell> LearnSpell(Spell spell)
    {
        bool alreadyKnown = false;
        if (SpellBook.Count > 0)
        {
            for (int abil = 0; abil < SpellBook.Count; abil++)
            {
                if (SpellBook[abil].Name == spell.Name)
                {
                    alreadyKnown = true;
                }
            }
        }
        if (alreadyKnown == false)
        {
            SpellBook.Add(spell);
        }
        return SpellBook;
    }
    public List<Quest> AddQuestToJournal(Quest quest)
    {
        Journal.Add(quest);
        return Journal;
    }
}
