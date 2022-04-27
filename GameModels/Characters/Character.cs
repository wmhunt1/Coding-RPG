using System;
namespace GameModels;
public class Character
{
    public string Name;
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 50;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int CurrentMP = 0;
    public int MaxMP = 0;
    public int CurrentSP = 0;
    public int MaxSP = 0;
    public int Attack = 1;
    public int Defense = 0;
    public int Gold = 0;
    public string Weapon = "";
    public string Armor = "";
    public Character(string name)
    {
        Name = name;
    }
    public void DisplayStats()
    {
        Console.WriteLine($"Level: {Level}\nEXP: {CurrentXP}/{MaxXP}\nHP: {CurrentHP}/{MaxHP}");
    }
    public void DisplayEquipment()
    {
        Console.WriteLine($"Equipment\nWeapon: {Weapon} ({Attack} Damage)\nArmor: {Armor} ({Defense} Protection)");
    }
    public void DisplayInventory()
    {
        Console.WriteLine($"Inventory\nGold: {Gold}");
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
}
