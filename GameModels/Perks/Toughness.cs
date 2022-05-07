using System;
namespace GameModels;

public class Toughness : Perk
{
    public string Name;
    public Toughness(string name = "Toughness"):base(name)
    {
        Name = name;
        Description = "Increases HP";
    }
    public override Character ApplyPerk(Character character)
    {
        character.HealthBonus = 5;
        character.Perks.Add(this);
        character.CalculateStats();
        Has = true;
        return character;
    }

}