using System;
namespace GameModels;

public class Accessory : Equipable
{
    public Accessory(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character character)
    {
        character.Accessory = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}