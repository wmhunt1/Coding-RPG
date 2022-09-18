using System;
namespace GameModels;

public class Pants : Legs
{

    public Pants(string name = "Pants", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Cloth();
    }
     public override void EquipItem(Character character)
    {
        character.Legs = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}