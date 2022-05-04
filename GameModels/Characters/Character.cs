using System;
namespace GameModels;
public class Character
{
    public string Name;
    public Race Race = new Humanoid();
    public Job Job = new Job("Freelancer");
    //stats
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 50;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int CurrentMP = 0;
    public int MaxMP = 0;
    public int CurrentSP = 0;
    public int MaxSP = 0;
    public int Attack = 0;
    public int Defense = 0;
    public int MagicAttack = 1;
    public int MagicDefense = 0;
    public int Speed = 1;
    //inventory;
    public int Gold = 0;
    public List<Item>? Inventory = new List<Item>();
    //equipment
    public Accessory Accessory = new Accessory("None", 0);
    public Weapon Weapon = new Weapon("Unarmed", 0, 0);
    public Armor Armor = new Armor("Unarmored", 0, 0);
    //skills
    public Skill Mining = new Skill("Mining", 1);
    public Skill Woodcutting = new Skill("Woodcutting", 1);
    public List<Ability>? ActionBar;
    public List<Spell>? Spellbook;
    public List<Quest> Journal;
    public List<Type>? Immunities;
    public List<Type>? Resistances;
    public List<Type>? Vulnerabilities;
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
    }
    public void DisplayStats()
    {
        Console.WriteLine($"Level: {Level}\nEXP: {CurrentXP}/{MaxXP}\nHP: {CurrentHP}/{MaxHP}");
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
        MaxHP += 10;
        MaxMP += 10;
        MaxSP += 10;
        Console.WriteLine($"{Name} reaches level {Level}");
        FullRest();
        return Level;
    }
    public void CheckIfReadyToLevelUp()
    {
        if (CurrentXP >= MaxXP)
        {
            LevelUP();
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
        Console.WriteLine("v1");
        if (Vulnerabilities != null)
        {
            Console.WriteLine("v2");
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

}
