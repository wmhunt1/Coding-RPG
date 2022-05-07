using System;
namespace GameModels;

public class WoodCutting : GatheringSkill
{
    public WoodCutting(string name = "WoodCutting", int level = 1, string stat = "Endurance") : base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
    public override Character GatherResource(Character character, Resource resource)
    {
        Console.WriteLine($"You start chopping down a {resource.Name} Tree");
        bool energy = character.HasEnoughSP(1);
        if (energy == true)
        {
            character.SpendSP(1);
            character.AddToInventory(resource);
            GainXP(resource.XP);
        }
        else
        {
            Console.WriteLine($"You are too tired to chop down the {resource.Name} tree");
        }
        return character;
    }
}