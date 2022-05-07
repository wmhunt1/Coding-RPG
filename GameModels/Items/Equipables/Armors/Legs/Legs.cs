using System;
namespace GameModels;

public class Legs : Armor
{

    public Legs(string name, int cost, int protection) : base(name, cost, protection)
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
    public override void UnEquipItem(Character character)
    {
        character.Legs = new Legs("None", 0, 0);
        character.AddToInventory(this);
    }

}