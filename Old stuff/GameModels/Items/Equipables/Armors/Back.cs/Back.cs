using System;
namespace GameModels;

public class Back: Armor
{

    public Back(string name, int cost, int protection):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Back = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        character.Back = new Back("None", 0 , 0);
        character.AddToInventory(this);
    }
}