using System;
namespace GameModels;

public class Ring : Accessory
{
    public Ring(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character character)
    {
        character.Ring = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}