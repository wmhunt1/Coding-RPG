using System;
namespace GameModels;
public class Character
{
    public string Name;
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 100;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int CurrentMP = 0;
    public int MaxMP = 0;
    public int CurrentSP = 0;
    public int MaxSP = 0;
    public int Attack = 1;
    public int Defense = 0;
    public string Weapon = "";
    public string Armor = "";
    public Character(string name)
    {
        Name = name;
    }
    public void DisplayCharacterSheet()
    {
        Console.WriteLine($"Character Sheet\nName: {Name} - Level: {Level}\nEXP: {CurrentXP}/{MaxXP}\nHP: {CurrentHP}/{MaxHP}");
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
    public int LevelUP()
    {
        Level++;
        MaxXP += 100;
        MaxHP += 10;
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
}
