using System;
namespace GameModels;

public class Weapon : Equipable
{
    public int Damage;
    public Weapon(string name, int cost, int damage):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }
    public override void EquipItem(Character character)
    {
        character.Weapon = this;
        character.Attack = this.Damage;
        Console.WriteLine($"{this.Name} Equipped");
    }
}