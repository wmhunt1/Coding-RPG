using System;
namespace GameModels;

public class Armor : Equipable
{
    public int Protection;
    public Type ProtectionType = new ArmorType();
    public Armor(string name, int cost, int protection):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
    public override void EquipItem(Character character)
    {
        character.Armor = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
}