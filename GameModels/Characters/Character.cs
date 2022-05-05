using System;
namespace GameModels;
public class Character
{
    public string Name;
    public Race Race = new Humanoid();
    public Job Job = new Job("Freelancer");
    public List<Character> Companions = new List<Character>();
    //stats
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 50;

    //BaseStats
    public int Strength = 10;
    public int Agility = 10;
    public int Endurance = 10;
    public int Intelligence = 10;
    public int Perception = 10;
    public int WillPower = 10;
    public int Charisma = 10;
    public int Attractiveness = 10;
    public int Luck = 10;

    //Derived Stats
    public int CurrentHP = 0;
    public int MaxHP = 0;
    public int CurrentMP = 0;
    public int MaxMP = 0;
    public int CurrentSP = 0;
    public int MaxSP = 0;
    public int Attack = 0;
    public int Defense = 0;
    public int MagicAttack = 0;
    public int MagicDefense = 0;
    public int Speed = 0;
    public int CritChance = 0;
    public Buff Buff = new Buff("No Buff");
    public DeBuff DeBuff = new DeBuff("No Debuff");
    //inventory;
    public int Gold = 0;
    public List<Item>? Inventory = new List<Item>();
    //equipment
    public Accessory Accessory = new Accessory("None", 0);
    public Weapon Weapon = new Weapon("Unarmed", 0, 0);
    public Armor Armor = new Armor("Unarmored", 0, 0);
    //skills
    public List<Skill> Skills = new List<Skill>();
    public List<Ability>? ActionBar = new List<Ability>();
    public List<Spell>? Spellbook = new List<Spell>();
    public List<Quest> Journal = new List<Quest>();
    public List<Type>? Immunities = new List<Type>();
    public List<Type>? Resistances = new List<Type>();
    public List<Type>? Vulnerabilities = new List<Type>();
    public Character(string name)
    {
        Name = name;
        BanditQuest banditQuest = new BanditQuest();
        Journal = new List<Quest>();
        Journal.Add(banditQuest);
        GoblinQuest goblinQuest = new GoblinQuest();
        Journal.Add(goblinQuest);
        RatQuest ratQuest = new RatQuest();
        Journal.Add(ratQuest);
        SkeletonQuest skeletonQuest = new SkeletonQuest();
        Journal.Add(skeletonQuest);
        CalculateStats();
    }
    public void DisplayStats()
    {
        Console.WriteLine($"Level: {Level}\nEXP: {CurrentXP}/{MaxXP}\nHP: {CurrentHP}/{MaxHP} MP: {CurrentMP}/{MaxMP} SP: {CurrentSP}/{MaxSP}");
        Console.WriteLine($"Stats\n STR: {Strength} AGL: {Agility} END: {Endurance}\nINT: {Intelligence} PER: {Perception} WIL:{WillPower}\nCHA: {Charisma} ATR: {Attractiveness} LCK: {Luck}");
    }
    public void DisplayEquipment()
    {
        Console.WriteLine($"Equipment\nAccessory: {Accessory.Name}\nWeapon: {Weapon.Name} ({Attack} Damage)\nArmor: {Armor.Name} ({Defense} Protection)");
    }
    public void DisplayInventory()
    {
        Console.WriteLine($"Inventory\nGold: {Gold}");
        for (int i = 0; i < Inventory.Count; i++)
        {
            Console.WriteLine($"{Inventory[i].Name}");
        }
    }
    public void DisplayJournal()
    {
        Console.WriteLine("Journal");
        for (int i = 0; i < Journal.Count; i++)
        {
            if (Journal[i].QuestState > 0)
            {
                Console.WriteLine($"Name: {Journal[i].Name} - Description: {Journal[i].Description}");
            }
        }
    }
    public void DisplayCompanions()
    {
          Console.WriteLine("Companions");
        for (int i = 0; i < Companions.Count; i++)
        {
            Console.WriteLine($"Name: {Companions[i].Name} - Job: {Companions[i].Job.Name}");
        }
    }
    public Character CalculateStats()
    {
        CurrentHP = Endurance*Level;
        MaxHP = Endurance*Level;
        CurrentMP = Intelligence*Level;
        MaxMP = Intelligence*Level;
        CurrentSP = Endurance*Level;
        MaxSP = MaxSP*Level;
        Attack = (Strength + Agility)/5;
        Defense = (Endurance + Agility)/5;
        MagicAttack = Intelligence/5;
        MagicDefense = WillPower/5;
        Speed = Agility/5;
        CritChance = Luck/5;
        return this;
    }
    public int IncreaseSTR(int inc)
    {   
        Strength += inc;
        return Strength;
    }
    public int IncreaseAGL(int inc)
    {   
        Agility += inc;
        return Agility;
    }
    public int IncreaseEND(int inc)
    {   
        Endurance += inc;
        return Endurance;
    }
    public int IncreaseINT(int inc)
    {   
        Intelligence += inc;
        return Intelligence;
    }
    public int IncreasePER(int inc)
    {   
        Perception += inc;
        return Perception;
    }
    public int IncreaseWIL(int inc)
    {   
        WillPower += inc;
        return WillPower;
    }
    public int IncreaseCHA(int inc)
    {   
        Charisma += inc;
        return Charisma;
    }
    public int IncreaseATR(int inc)
    {   
        Attractiveness += inc;
        return Attractiveness;
    }
    public int IncreaseLCK(int inc)
    {   
        Luck += inc;
        return Luck;
    }
    public int GainHP(int hp)
    {
        CurrentHP += hp;
        if (CurrentHP > MaxHP)
        {
            CurrentHP = MaxHP;
        }
        return CurrentHP;
    }
    public int DamageHP(int damage)
    {
        CurrentHP -= damage;
        if (CurrentHP < 0)
        {
            CurrentHP = 0;
        }
        return CurrentHP;
    }
    public int GainMP(int mp)
    {
        CurrentMP += mp;
        if (CurrentMP > MaxMP)
        {
            CurrentMP = MaxMP;
        }
        return CurrentMP;
    }
    public int SpendMP(int cost)
    {
        CurrentMP -= cost;
        if (CurrentMP < 0)
        {
            CurrentMP = 0;
        }
        return CurrentMP;
    }
    public bool HasEnoughMP(int mp)
    {
        if (CurrentMP >= mp)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
     public int GainSP(int sp)
    {
        CurrentSP += sp;
        if (CurrentSP > MaxSP)
        {
            CurrentSP = MaxSP;
        }
        return CurrentSP;
    }
    public int SpendSP(int cost)
    {
        CurrentSP -= cost;
        if (CurrentSP < 0)
        {
            CurrentSP = 0;
        }
        return CurrentSP;
    }
    public bool HasEnoughSP(int sp)
    {
        if (CurrentSP >= sp)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    public void FullRest()
    {
        GainHP(MaxHP);
        GainMP(MaxMP);
        GainSP(MaxSP);
    }
    public int LevelUP()
    {
        Level++;
        MaxXP += 50*Level;
        Console.WriteLine($"{Name} reaches level {Level}");
        Console.WriteLine("Choose Stat Increases");
        int inc = 5;
        while (inc > 0)
        {
            Console.WriteLine($"[1] STR - {Strength}");
            Console.WriteLine($"[2] AGL - {Agility}");
            Console.WriteLine($"[3] END - {Endurance}");
            Console.WriteLine($"[4] INT - {Intelligence}");
            Console.WriteLine($"[5] PER - {Perception}");
            Console.WriteLine($"[6] WIL - {WillPower}");
            Console.WriteLine($"[7] CHA - {Charisma}");
            Console.WriteLine($"[8] ATR - {Attractiveness}");
            Console.WriteLine($"[9] LCK - {Luck}");
            string selection = Console.ReadLine();
            switch (selection)
            {
                case "1":
                    inc--;
                    IncreaseSTR(1);
                    break;
                case "2":
                    inc--;
                    IncreaseAGL(1);
                    break;
                case "3":
                    inc--;
                    IncreaseEND(1);
                    break;
                case "4":
                    inc--;
                    IncreaseINT(1);
                    break;
                case "5":
                    inc--;
                    IncreasePER(1);
                    break;
                case "6":
                    inc--;
                    IncreaseWIL(1);
                    break;
                case "7":
                    inc--;
                    IncreaseCHA(1);
                    break;
                case "8":
                    inc--;
                    IncreaseATR(1);
                    break;
                case "9":
                    IncreaseLCK(1);
                    break;
                default:
                    break;
            }
        }
        CalculateStats();
        FullRest();
        return Level;
    }
    public void CheckIfReadyToLevelUp()
    {
        if (CurrentXP >= MaxXP)
        {
            LevelUP();
            for (int i = 0; i < Companions.Count; i++)
            {
                Companions[i].LevelUP();
            }
        }
    }
    public int GainXP(int xp)
    {
        CurrentXP += xp;
        CheckIfReadyToLevelUp();
        return CurrentXP;
    }
    public int AddGold(int gold)
    {
        Gold += gold;
        return Gold;
    }
    public int RemoveGold(int gold)
    {
        Gold -= gold;
        return Gold;
    }
    public bool HasEnoughGold(int gold)
    {
        if (Gold >= gold)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    public List<Item> AddToInventory(Item item)
    {
        Inventory.Add(item);
        Console.WriteLine($"{item.Name} added to Inventory");
        return Inventory;
    }
    public List<Item> RemoveFromInventory(Item item)
    {
        Inventory.Remove(item);
        Console.WriteLine($"{item.Name} removed from Inventory");
        return Inventory;
    }
    public List<Character> AddToParty(Character character)
    {
        Companions.Add(character);
        Console.WriteLine($"{character.Name} joins the your party");
        return Companions;
    }
    public List<Character> RemoveFromParty(Character character)
    {
        Companions.Remove(character);
        Console.WriteLine($"{character.Name} leaves your party");
        return Companions;
    }
    public bool CheckImmunities(Type type)
    {
        
        bool immunity = false;
        if (Immunities != null)
        {
            for (int i = 0; i < Immunities.Count; i++)
            {
                if (type.Name == Immunities[i].Name)
                {
                    immunity = true;
                }
            }
        }
        return immunity;
    }
    public bool CheckforCriticalHit()
    {
        Random rnd = new Random();
        int crit = rnd.Next(1, 20);
        if (crit + CritChance >= 20)
        {
            Console.WriteLine("Critical Hit!");
            return true;
        }
        else
        {
            return false;
        }
    }
    public bool CheckResistances(Type type)
    {
        bool resistance = false;
        if (Resistances != null)
        {
            for (int i = 0; i < Resistances.Count; i++)
            {
                if (type.Name == Resistances[i].Name)
                {
                    resistance = true;
                }
            }
        }
        return resistance;
    }
    public bool CheckVulnerabilities(Type type)
    {
        bool vunerability = false;
        if (Vulnerabilities != null)
        {
            for (int i = 0; i < Vulnerabilities.Count; i++)
            {
                if (type.Name == Vulnerabilities[i].Name)
                {
                    return true;
                }
            }
        }
        return vunerability;
    }
    public int CalculateDamage(Character char1, Character char2, bool spell)
    {
        int damage;
        if (char1.Weapon.DamageType.Name == "Bludgeoning" || char1.Weapon.DamageType.Name == "Natural" || char1.Weapon.DamageType.Name == "Piercing" || char1.Weapon.DamageType.Name == "Slashing" && spell == false)
        {
             damage = char1.Attack+char1.Weapon.Damage - char2.Defense+char2.Armor.Protection;
        }
        else
        {
             damage = char1.MagicAttack - char2.MagicDefense;
        }
        if (char1.CheckImmunities(char2.Weapon.DamageType) == true)
        {
            damage = 0;
            Console.WriteLine(damage);
        }
        if (char1.CheckResistances(char2.Weapon.DamageType) == true)
        {
            damage /= 2;
            Console.WriteLine(damage);
        }
        if (char1.CheckVulnerabilities(char2.Weapon.DamageType) == true)
        {
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
    public void BasicAttack(Character char1, Character char2)
    {
        
        int damage = CalculateDamage(char1, char2, false);
        Console.WriteLine($"{char1.Name} attacks {char2.Name} with their {char1.Weapon.Name}, dealing {damage} damage");
        bool crit = char1.CheckforCriticalHit();
        if (crit == true)
        {
            damage *= 2;
        }
        char2.DamageHP(damage);
    }

}
