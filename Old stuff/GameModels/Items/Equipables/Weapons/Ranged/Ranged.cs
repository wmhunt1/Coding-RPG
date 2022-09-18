using System;
namespace GameModels;

public class RangedWeapon : Weapon
{
    public RangedWeapon(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }
    public override void EquipItem(Character character)
    {
        character.Weapon = this;
        Console.WriteLine($"{this.Name} Equipped");
    }
     public override void UnEquipItem(Character character)
    {
        character.Weapon = new Unarmed();
        character.AddToInventory(this);
    }
}