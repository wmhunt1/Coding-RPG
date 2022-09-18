using System;
namespace GameModels;

public class Head : Armor
{

    public Head(string name, int cost, int protection) : base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Head = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        character.Head = new Head("None", 0, 0);
        character.AddToInventory(this);
    }
}