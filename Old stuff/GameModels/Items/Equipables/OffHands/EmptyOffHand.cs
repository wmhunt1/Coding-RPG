using System;
namespace GameModels;

public class EmptyOffHand : OffHand
{
    public EmptyOffHand(string name = "Empty", int cost = 0, int bonus = 0):base(name, cost, bonus)
    {
        Name = name;
        Cost = cost;
        Bonus = bonus;
    }
    public override void EquipItem(Character character)
    {
        character.OffHand = this;
    }
}