using System.Text.Json.Serialization;

namespace GameModels;
public class Character
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    [JsonPropertyName("Level")]
    public int Level { get; set; } = 1;
    [JsonPropertyName("Job")]
    public Job Job { get; set; } = new Freelancer();
    [JsonPropertyName("CurrentXP")]
    public int CurrentXP { get; set; } = 0;
    [JsonPropertyName("MaxXP")]
    public int MaxXP { get; set; } = 100;
    [JsonPropertyName("CurrentHP")]
    public int CurrentHP { get; set; } = 10;
    [JsonPropertyName("MaxHP")]
    public int MaxHP { get; set; } = 10;
    [JsonPropertyName("HPBonus")]
    public int HPBonus { get; set; } = 0;
    [JsonPropertyName("HPPenalty")]
    public int HPPenalty { get; set; } = 0;
    [JsonPropertyName("HPRegen")]
    public int HPRegen { get; set; } = 0;
    [JsonPropertyName("HPRegenBonus")]
    public int HPRegenBonus { get; set; } = 0;
    [JsonPropertyName("HPRegenPenalty")]
    public int HPRegenPenalty { get; set; } = 0;
    [JsonPropertyName("CurrentMP")]
    public int CurrentMP { get; set; } = 10;
    [JsonPropertyName("MaxMP")]
    public int MaxMP { get; set; } = 10;
    [JsonPropertyName("MPBonus")]
    public int MPBonus { get; set; } = 10;
    [JsonPropertyName("MPPenalty")]
    public int MPPenalty { get; set; } = 0;
    [JsonPropertyName("MPRegen")]
    public int MPRegen { get; set; } = 0;
    [JsonPropertyName("MPRegenBonus")]
    public int MPRegenBonus { get; set; } = 0;
    [JsonPropertyName("MPRegenPenalty")]
    public int MPRegenPenalty { get; set; } = 0;
    [JsonPropertyName("CurrentSP")]
    public int CurrentSP { get; set; } = 10;
    [JsonPropertyName("MaxSP")]
    public int MaxSP { get; set; } = 10;
    [JsonPropertyName("SPBonus")]
    public int SPBonus { get; set; } = 0;
    [JsonPropertyName("SPPenalty")]
    public int SPPenalty { get; set; } = 0;
    [JsonPropertyName("SPRegen")]
    public int SPRegen { get; set; } = 0;
    [JsonPropertyName("SPRegenBonus")]
    public int SPRegenBonus { get; set; } = 0;
    [JsonPropertyName("SPRegenPenalty")]
    public int SPRegenPenalty { get; set; } = 0;
    [JsonPropertyName("Strength")]
    public int Strength { get; set; } = 10;
    [JsonPropertyName("StrengthBonus")]
    public int StrengthBonus { get; set; } = 0;
    [JsonPropertyName("StrengthPenalty")]
    public int StrengthPenalty { get; set; } = 0;
    [JsonPropertyName("Constitution")]
    public int Constitution { get; set; } = 10;
    [JsonPropertyName("ConstitutionBonus")]
    public int ConstitutionBonus { get; set; } = 0;
    [JsonPropertyName("ConstitutionPenalty")]
    public int ConstitutionPenalty { get; set; } = 0;
    [JsonPropertyName("Dexterity")]
    public int Dexterity { get; set; } = 10;
    [JsonPropertyName("DexterityBonus")]
    public int DexterityBonus { get; set; } = 0;
    [JsonPropertyName("DexterityPenalty")]
    public int DexterityPenalty { get; set; } = 0;
    [JsonPropertyName("Intelligence")]
    public int Intelligence { get; set; } = 10;
    [JsonPropertyName("IntelligenceBonus")]
    public int IntelligenceBonus { get; set; } = 0;
    [JsonPropertyName("IntelligencePenalty")]
    public int IntelligencePenalty { get; set; } = 0;
    [JsonPropertyName("Wisdom")]
    public int Wisdom { get; set; } = 10;
    [JsonPropertyName("WisdomBonus")]
    public int WisdomBonus { get; set; } = 0;
    [JsonPropertyName("WisdomPenalty")]
    public int WisdomPenalty { get; set; } = 0;
    [JsonPropertyName("Charisma")]
    public int Charisma { get; set; } = 10;
    [JsonPropertyName("CharismaBonus")]
    public int CharismaBonus { get; set; } = 0;
    [JsonPropertyName("CharismaPenalty")]
    public int CharismaPenalty { get; set; } = 0;
    [JsonPropertyName("WillPower")]
    public int WillPower { get; set; } = 10;
    [JsonPropertyName("WillPowerBonus")]
    public int WillPowerBonus { get; set; } = 0;
    [JsonPropertyName("WillPowerPenalty")]
    public int WillPowerPenalty { get; set; } = 0;
    [JsonPropertyName("Perception")]
    public int Perception { get; set; } = 10;
    [JsonPropertyName("PerceptionBonus")]
    public int PerceptionBonus { get; set; } = 0;
    [JsonPropertyName("PerceptionPenalty")]
    public int PerceptionPenalty { get; set; } = 0;
    [JsonPropertyName("Luck")]
    public int Luck { get; set; } = 10;
    [JsonPropertyName("LuckBonus")]
    public int LuckBonus { get; set; } = 0;
    [JsonPropertyName("LuckPenalty")]
    public int LuckPenalty { get; set; } = 0;
    [JsonPropertyName("Beauty")]
    public int Beauty { get; set; } = 10;
    [JsonPropertyName("BeautyBonus")]
    public int BeautyBonus { get; set; } = 0;
    [JsonPropertyName("BeautyPenalty")]
    public int BeautyPenalty { get; set; } = 0;
    [JsonPropertyName("Speed")]
    public int Speed { get; set; } = 10;
    [JsonPropertyName("SpeedBonus")]
    public int SpeedBonus { get; set; } = 0;
    [JsonPropertyName("SpeedPenalty")]
    public int SpeedPenalty { get; set; } = 0;
    [JsonPropertyName("Shield")]
    public int Shield { get; set; } = 0;
    [JsonPropertyName("ShieldBonus")]
    public int ShieldBonus { get; set; } = 0;
    [JsonPropertyName("ShieldPenalty")]
    public int ShieldPenalty { get; set; } = 0;
    [JsonPropertyName("OffHandDamage")]
    public int OffHandDamage { get; set; } = 0;
    [JsonPropertyName("OffHandDamageBonus")]
    public int OffHandDamageBonus { get; set; } = 0;
    [JsonPropertyName("OffHandDamagePenalty")]
    public int OffHandDamagePenalty { get; set; } = 0;
    [JsonPropertyName("Ally")]
    public bool Ally { get; set; } = true;
    [JsonPropertyName("Weapon")]
    public Weapon Weapon { get; set; } = new Fist();
    [JsonPropertyName("OffHand")]
    public OffHand OffHand { get; set; } = new EmptyHand();
    [JsonPropertyName("Head")]
    public Head Head { get; set; } = new BareHead();
    [JsonPropertyName("Torso")]
    public Torso Torso { get; set; } = new NakedTorso();
    [JsonPropertyName("Legs")]
    public Legs Legs { get; set; } = new BareLegs();
    [JsonPropertyName("Hands")]
    public Hands Hands { get; set; } = new BareHands();
    [JsonPropertyName("Feet")]
    public Feet Feet { get; set; } = new BareFeet();
    [JsonPropertyName("Neck")]
    public Neck Neck { get; set; } = new NoNeck();
    [JsonPropertyName("Ring")]
    public Ring Ring { get; set; } = new EmptyFinger();
    [JsonPropertyName("Back")]
    public Back Back { get; set; } = new NoBack();
    [JsonPropertyName("Companions")]
    public List<Character> Companions { get; set; } = new List<Character>();
    [JsonPropertyName("Gold")]
    public int Gold { get; set; } = 0;
    [JsonPropertyName("Inventory")]
    public List<Item> Inventory { get; set; } = new List<Item>();
    [JsonPropertyName("Abilities")]
    public List<Ability> Abilities { get; set; } = new List<Ability>();
    [JsonPropertyName("SpellBook")]
    public List<Spell> SpellBook { get; set; } = new List<Spell>();
    [JsonPropertyName("Journal")]
    public List<Quest> Journal { get; set; } = new List<Quest>();
    [JsonPropertyName("SkillBook")]
    public List<Skill> SkillBook { get; set; } = new List<Skill>();
    [JsonPropertyName("CraftingRecipesKnown")]
    public List<CraftingRecipe> CraftingRecipesKnown { get; set; } = new List<CraftingRecipe>();
    [JsonPropertyName("Factions")]
    public List<Faction> Factions { get; set; } = new List<Faction>();
    [JsonPropertyName("Relationships")]
    public List<Relationship> Relationships { get; set; } = new List<Relationship>();
    [JsonPropertyName("Reputations")]
    public List<Reputation> Reputations { get; set; } = new List<Reputation>();
    [JsonPropertyName("Immunities")]
    public List<DamageType> Immunities { get; set; } = new List<DamageType>();
    [JsonPropertyName("Resistances")]
    public List<DamageType> Resistances { get; set; } = new List<DamageType>();
    [JsonPropertyName("Weaknesses")]
    public List<DamageType> Weaknesses { get; set; } = new List<DamageType>();
    [JsonPropertyName("Buffs")]
    public List<Buff> Buffs { get; set; } = new List<Buff>();
    [JsonPropertyName("DeBuffs")]
    public List<DeBuff> DeBuffs { get; set; } = new List<DeBuff>();
    [JsonPropertyName("Conditions")]
    public List<Condition> Conditions { get; set; } = new List<Condition>();
    [JsonPropertyName("ConditionImmunities")]
    public List<Condition> ConditionImmunities { get; set; } = new List<Condition>();
    [JsonPropertyName("ItemDrop")]
    public Item ItemDrop { get; set; } = new Item("No Drop", 0);
    public Character(string name)
    {
        Name = name;
        Ally = true;
    }
    public int LevelUp()
    {
        this.Level++;
        Console.WriteLine($"{this.Name} Levels Up, reaching Level {this.Level}");
        this.BaseStats.HP.Max = this.BaseStats.HP.Max + this.Attributes.Constitution.Value;
        this.BaseStats.MP.Max = this.BaseStats.MP.Max + this.Attributes.Intelligence.Value;
        this.BaseStats.SP.Max = this.BaseStats.SP.Max + this.Attributes.Dexterity.Value;
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
        this.BaseStats.HP.Current += heal;

        if (this.BaseStats.HP.Current > this.BaseStats.HP.Max)
        {
            this.BaseStats.HP.Current = this.BaseStats.HP.Max;
        }
        return this.BaseStats.HP.Current;
    }
    public int TakeDamage(int damage)
    {
        if (damage >= 0)
        {
            this.BaseStats.HP.Current -= damage;
        }
        return this.BaseStats.HP.Current;
    }
    public int GainMana(int gain)
    {
        this.BaseStats.MP.Current += gain;

        if (this.BaseStats.MP.Current > this.BaseStats.MP.Max)
        {
            this.BaseStats.MP.Current = this.BaseStats.MP.Max;
        }
        return this.BaseStats.MP.Current;
    }
    public int SpendMana(int cost)
    {
        if (cost >= 0)
        {
            this.BaseStats.MP.Current -= cost;
        }
        return this.BaseStats.MP.Current;
    }
    public int RecoverStamina(int gain)
    {
        this.BaseStats.SP.Current += gain;

        if (this.BaseStats.SP.Current > this.BaseStats.SP.Max)
        {
            this.BaseStats.SP.Current = this.BaseStats.SP.Max;
        }
        return this.BaseStats.SP.Current;
    }
    public int SpendStamina(int cost)
    {
        if (cost >= 0)
        {
            this.BaseStats.SP.Current -= cost;
        }
        return this.BaseStats.SP.Current;
    }
    public int RegenHP()
    {
        int regen = this.BaseStats.HP.Regen + this.BaseStats.HP.RegenBonus - this.BaseStats.HP.RegenPenalty;
        this.BaseStats.HP.Current += regen;
        return this.BaseStats.HP.Current;
    }
    public int RegenMP()
    {
        int regen = this.BaseStats.MP.Regen + this.BaseStats.MP.RegenBonus - this.BaseStats.MP.RegenPenalty;
        this.BaseStats.MP.Current += regen;
        return this.BaseStats.MP.Current;
    }
    public int RegenSP()
    {
        int regen = this.BaseStats.SP.Regen + this.BaseStats.SP.RegenBonus - this.BaseStats.SP.RegenPenalty;
        this.BaseStats.SP.Current += regen;
        return this.BaseStats.SP.Current;
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
        for (int comp = 0; comp < this.Companions.Count; comp++)
        {
            Companions[comp].HealHP(Companions[comp].BaseStats.HP.Max);
            Companions[comp].GainMana(Companions[comp].BaseStats.MP.Max);
            Companions[comp].RecoverStamina(Companions[comp].BaseStats.SP.Max);
            Companions[comp].RecoverFromConditions(Companions[comp].Conditions);
        }
    }
    public int CheckForCrit(int damage)
    {
        Random rand = new Random();
        int number = rand.Next(0, 100);
        if (number <= this.Attributes.Luck.Value)
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
        // if (critDamage == damage * 2)
        // {
        //     calcDamage = 1;
        // }
        return calcDamage;
    }
    public void BasicAttack(Character target)
    {
        int totalArmor = target.Equipment.Torso.Protection;
        int totalStrength = this.Attributes.Strength.Value + this.Attributes.Strength.ValueBonus - this.Attributes.Strength.ValuePenalty;
        int totalOffHand = this.Equipment.OffHandDamage + this.Equipment.OffHandDamageBonus + this.Equipment.OffHandDamagePenalty;
        int totalDexterity = target.Attributes.Dexterity.Value + target.Attributes.Dexterity.ValueBonus - target.Attributes.Dexterity.ValuePenalty;
        int totalShield = target.Shield + target.BaseStats.Defense.Bonus - target.BaseStats.Defense.Penalty;
        int damage = this.Attributes.Strength.Value + this.Equipment.Weapon.Equipment.WeaponDmg + totalStrength + totalOffHand - totalArmor - totalDexterity - totalShield;
        int calculatedDamage = CalculateDamageWithPossibleCrit(target, damage, this.Equipment.Weapon.Equipment.WeaponDmgType);
        target.TakeDamage(calculatedDamage);
        if (calculatedDamage > 0)
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Equipment.Weapon.Name}, dealing {calculatedDamage} {this.Equipment.Weapon.Equipment.WeaponDmgType.Name} Damage");
            Weapon.EquipmentEnchantment.OnHitEnchantment(this, target);
        }
        else
        {
            if (totalArmor + totalShield > totalDexterity)
            {
                Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Equipment.Weapon.Name}, but the attack bounces off their armor");
            }
            else
            {
                Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Equipment.Weapon.Name}, but the attack misses");
            }

        }
    }
    public void ArmorIgnoringAttack(Character target)
    {
        int totalStrength = this.Attributes.Strength.Value + this.Attributes.Strength.ValueBonus - this.Attributes.Strength.ValuePenalty;
        int totalOffHand = this.Equipment.OffHandDamage + this.Equipment.OffHandDamageBonus + this.Equipment.OffHandDamagePenalty;
        int totalDexterity = target.Attributes.Dexterity.Value + target.Attributes.Dexterity.ValueBonus - target.Attributes.Dexterity.ValuePenalty;
        int damage = this.Attributes.Strength.Value + this.Equipment.Weapon.Equipment.WeaponDmg + totalStrength + totalOffHand - totalDexterity;
        int calculatedDamage = CalculateDamageWithPossibleCrit(target, damage, this.Equipment.Weapon.Equipment.WeaponDmgType);
        target.TakeDamage(calculatedDamage);
        if (calculatedDamage > 0)
        {
            Console.WriteLine($"{this.Name} sneak attacks {target.Name} with {this.Equipment.Weapon.Name}, dealing {calculatedDamage} {this.Equipment.Weapon.Equipment.WeaponDmgType.Name} Damage");
            Weapon.EquipmentEnchantment.OnHitEnchantment(this, target);
        }
        else
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Equipment.Weapon.Name}, but the attack misses");
        }
    }
    public void AttackSpell(Character target, int baseDamage, DamageType damageType)
    {
        int damage = CalculateDamage(target, baseDamage, damageType);
        target.TakeDamage(damage);
    }
    public virtual void CombatAI(Character char1, List<Character> allies, List<Character> enemies)
    {
        Random randomTarget = new Random();
        int target = randomTarget.Next(0, enemies.Count);
        char1.BasicAttack(enemies[target]);
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
