using System;
namespace GameModels;

public class Shield : OffHand
{
    public int Protection;
    public Shield(string name, int cost, int bonus):base(name, cost, bonus)
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
            character.Weapon = new Unarmed();
        }
        character.DefenseBonus += Bonus;
        Console.WriteLine($"{this.Name} Equipped");
    }
    public override void UnEquipItem(Character character)
    {
        character.DefenseBonus -= Bonus;
        character.OffHand = new EmptyOffHand();
    }
}