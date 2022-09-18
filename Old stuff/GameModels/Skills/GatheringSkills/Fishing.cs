using System;
namespace GameModels;

public class Fishing : GatheringSkill
{
    public Fishing(string name = "Fishing", int level = 1, string stat = "Endurance") : base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
    public override Character GatherResource(Character character, Resource resource)
    {
        Console.WriteLine($"You start fishing for {resource.Name}");
        bool energy = character.HasEnoughSP(1);
        if (energy == true)
        {
            character.SpendSP(1);
            character.AddToInventory(resource);
            GainXP(resource.XP);
        }
        else
        {
            Console.WriteLine($"You are too tired to fish for {resource.Name}");
        }
        return character;
    }
}