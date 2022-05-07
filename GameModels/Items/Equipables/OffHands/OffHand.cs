using System;
namespace GameModels;

public class OffHand : Equipable
{
    public int Bonus;
    public OffHand(string name, int cost, int bonus):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Bonus = bonus;
    }
    public override void EquipItem(Character character)
    {
        character.OffHand = this;
        if (character.Weapon is TwoHand)
        {
            character.Weapon = new Weapon("Unarmed", 0, 0);
        }
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        
    }
}