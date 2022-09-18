using System;
namespace GameModels;

public class Skill
{
    public string Name;
    public int Level;
    public int CurrentXP = 0;
    public int MaxXP = 50;
    public string Stat;
    public Skill(string name, int level, string stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
    public int LevelUP()
    {
        Level++;
        MaxXP += 50 * Level;
        Console.WriteLine($"{Name} reaches level {Level}");
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
    public bool IsSkilledEnough(int requiredSkill)
    {
        if (this.Level >= requiredSkill)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}