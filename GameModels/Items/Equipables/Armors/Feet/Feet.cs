using System;
namespace GameModels;

public class Feet : Armor
{

    public Feet(string name, int cost, int protection):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Feet = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}