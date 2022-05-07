using System;
namespace GameModels;

public class TwoHand : Weapon
{
    public TwoHand(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }
     public override void EquipItem(Character character)
    {
        character.Weapon = this;
        character.OffHand = new OffHandWeapon(this.Name, 0, 0);
        Console.WriteLine($"{this.Name} Equipped");
    }

}