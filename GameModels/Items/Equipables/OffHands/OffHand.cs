using System;
namespace GameModels;

public class OffHand : Equipable
{
    public OffHand(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character character)
    {
        character.OffHand = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}