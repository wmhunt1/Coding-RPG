using System;
namespace GameModels;

public class GatheringSkill : Skill
{
    public GatheringSkill(string name, int level, string stat) : base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
    public virtual Character GatherResource(Character character, Resource resource)
    {
        bool energy = character.HasEnoughSP(1);
        if (energy == true)
        {
            character.SpendSP(1);
            character.AddToInventory(resource);
            GainXP(resource.XP);
        }
        else
        {
            Console.WriteLine($"You are too tired to gather {resource.Name}");
        }
        return character;
    }
}