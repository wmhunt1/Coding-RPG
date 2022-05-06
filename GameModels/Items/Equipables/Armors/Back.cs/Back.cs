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
}