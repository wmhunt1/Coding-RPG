using System;
namespace GameModels;

public class Torso : Armor
{

    public Torso(string name, int cost, int protection):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Torso = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}