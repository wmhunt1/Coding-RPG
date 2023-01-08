namespace GameModels;
public class Character
{
    public string Name = "";
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 100;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int HPBonus = 0;
    public int HPPenalty = 0;
    public int HPRegen = 0;
    public int HPRegenBonus = 0;
    public int HPRegenPenalty = 0;
    public int CurrentMP = 10;
    public int MaxMP = 10;
    public int MPBonus = 10;
    public int MPPenalty = 0;
    public int MPRegen = 0;
    public int MPRegenBonus = 0;
    public int MPRegenPenalty = 0;
    public int CurrentSP = 10;
    public int MaxSP = 10;
    public int SPBonus = 0;
    public int SPPenalty = 0;
    public int SPRegen = 0;
    public int SPRegenBonus = 0;
    public int SPRegenPenalty = 0;
    public int Strength = 10;
    public int StrengthBonus = 0;
    public int StrengthPenalty = 0;
    public int Constitution = 10;
    public int ConstitutionBonus = 0;
    public int ConstitutionPenalty = 0;
    public int Dexterity = 10;
    public int DexterityBonus = 0;
    public int DexterityPenalty = 0;
    public int Intelligence = 10;
    public int IntelligenceBonus = 0;
    public int IntelligencePenalty = 0;
    public int Wisdom = 10;
    public int WisdomBonus = 0;
    public int WisdomPenalty = 0;
    public int Charisma = 10;
    public int CharismaBonus = 0;
    public int CharismaPenalty = 0;
    public int WillPower = 10;
    public int WillPowerBonus = 0;
    public int WillPowerPenalty = 0;
    public int Perception = 10;
    public int PerceptionBonus = 0;
    public int PerceptionPenalty = 0;
    public int Luck = 10;
    public int LuckBonus = 0;
    public int LuckPenalty = 0;
    public int Beauty = 10;
    public int BeautyBonus = 0;
    public int BeautyPenalty = 0;
    public bool Ally = true;
    public Weapon Weapon = new Fist();
    public Torso Torso = new NakedTorso();
    public Ring Ring = new Ring("No Ring", 0);
    public List<Character> Companions = new List<Character>();
    public int Gold = 0;
    public List<Item> Inventory = new List<Item>();
    public List<Ability> Abilities = new List<Ability>();
    public List<Spell> SpellBook = new List<Spell>();
    public List<Quest> Journal = new List<Quest>();
    public List<Skill> SkillBook = new List<Skill>();
    public List<DamageType> Immunities = new List<DamageType>();
    public List<DamageType> Resistances = new List<DamageType>();
    public List<DamageType> Weaknesses = new List<DamageType>();
    public List<Buff> Buffs = new List<Buff>();
    public List<DeBuff> DeBuffs = new List<DeBuff>();
    public List<Condition> Conditions = new List<Condition>();
    public List<Condition> ConditionImmunities = new List<Condition>();
    public Item ItemDrop = new Item("No Drop", 0);
    public Character(string name)
    {
        Name = name;
        Ally = true;
    }
    public int LevelUp()
    {
        this.Level++;
        Console.WriteLine($"{this.Name} Levels Up, reaching Level {this.Level}");
        this.MaxHP = this.MaxHP + this.Constitution;
        this.MaxMP = this.MaxMP + this.Intelligence;
        this.MaxSP = this.MaxSP + this.Dexterity;
        this.MaxXP = this.Level * this.MaxXP;
        FullRest();
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
    public int RegenHP()
    {
        int regen = this.HPRegen + this.HPRegenBonus - this.HPRegenPenalty;
        this.CurrentHP += regen;
        return this.CurrentHP;
    }
    public int RegenMP()
    {
        int regen = this.MPRegen + this.MPRegenBonus - this.MPRegenPenalty;
        this.CurrentMP += regen;
        return this.CurrentMP;
    }
    public int RegenSP()
    {
        int regen = this.SPRegen + this.SPRegenBonus - this.SPRegenPenalty;
        this.CurrentSP += regen;
        return this.CurrentSP;
    }
    public void RegenAll()
    {
        RegenHP();
        RegenMP();
        RegenSP();
    }
    public List<Condition> RecoverFromConditions(List<Condition> conds)
    {
        this.Conditions = new List<Condition>();
        return this.Conditions;
    }
    public void FullRest()
    {
        Console.WriteLine($"{this.Name} rests and fully recovers.");
        HealHP(MaxHP);
        GainMana(MaxMP);
        RecoverStamina(MaxSP);
        RecoverFromConditions(this.Conditions);
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
        if (target.Immunities.Find(x => x.Name == damageType.Name) != null)
        {
            check = true;
            Console.WriteLine($"{target.Name} is immune to {damageType.Name}");
        }
        return check;
    }
    public bool CheckForResistance(Character target, DamageType damageType)
    {
        bool check = false;
        if (target.Resistances.Find(x => x.Name == damageType.Name) != null)
        {
            check = true;
            Console.WriteLine($"{target.Name} is resistant to {damageType.Name}");
        }
        return check;
    }
    public bool CheckForWeakness(Character target, DamageType damageType)
    {
        bool check = false;
        if (target.Weaknesses.Find(x => x.Name == damageType.Name) != null)
        {
            check = true;
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
        int totalStrength = this.Strength + this.StrengthBonus - this.StrengthPenalty;
        int totalDexterity = target.Dexterity + target.DexterityBonus - target.DexterityPenalty;
        int damage = this.Strength + this.Weapon.WeaponDmg + totalStrength - totalArmor - totalDexterity;
        int calculatedDamage = CalculateDamageWithPossibleCrit(target, damage, this.Weapon.WeaponDmgType);
        target.TakeDamage(calculatedDamage);
        if (calculatedDamage > 0)
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, dealing {calculatedDamage} {this.Weapon.WeaponDmgType.Name} Damage");
            Weapon.EquipmentEnchantment.OnHitEnchantment(this, target);
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
    public List<Character> JoinParty(Character leader)
    {
        leader.Companions.Add(this);
        return leader.Companions;
    }
}
