using System;
namespace GameModels;

public class Legs : Armor
{

    public Legs(string name, int cost, int protection):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
     public override void EquipItem(Character character)
    {
        character.Legs = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}