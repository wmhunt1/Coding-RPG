using System;
namespace GameModels;

public class TwoHandRanged : RangedWeapon
{
    public TwoHandRanged(string name, int cost, int damage):base(name, cost, damage)
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
        character.AddToInventory(this);
    }

}