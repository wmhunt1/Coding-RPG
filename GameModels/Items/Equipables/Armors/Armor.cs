using System;
namespace GameModels;

public class Armor : Equipable
{
    public int Protection;
    public Armor(string name, int cost, int protection):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Armor = this;
        character.Defense = this.Protection;
        Console.WriteLine($"{this.Name} Equipped");
    }
}