using System;
namespace GameModels;

public class HealthPotion : Potion
{
    public int HealingAmount;
    public HealthPotion(string name, int cost, int healingAmount):base(name, cost)
    {
        Name = name;
        Cost = cost;
        HealingAmount = healingAmount;
    }
    public override void UseItem(Character character)
    {
        Console.WriteLine($"{character.Name} drinks a potion, restoring {HealingAmount}");
        character.GainHP(HealingAmount);
        character.RemoveFromInventory(this);
    }
}