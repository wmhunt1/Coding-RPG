using System;
namespace GameModels;

public class Neck : Accessory
{
    public Neck(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character character)
    {
        character.Neck = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}