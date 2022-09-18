using System;
namespace GameModels;

public class OffHandWeapon : OffHand
{
    public OffHandWeapon(string name, int cost, int bonus) : base(name, cost, bonus)
    {
        Name = name;
        Cost = cost;
        Bonus = bonus;
    }
    public override void EquipItem(Character character)
    {
        this.UnEquipItem(character);
        character.OffHand = this;
        if (character.Weapon is TwoHand)
        {
            character.Weapon = new Weapon("Unarmed", 0, 0);
        }
        character.AttackBonus += this.Bonus;
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        character.AttackBonus -= Bonus;
        character.OffHand = new EmptyOffHand();
    }
}