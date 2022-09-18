using System;
namespace GameModels;

public class Hands : Armor
{
    public Hands(string name, int cost, int protection) : base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Hands = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        character.Hands = new Hands("None", 0, 0);
        character.AddToInventory(this);
    }
}