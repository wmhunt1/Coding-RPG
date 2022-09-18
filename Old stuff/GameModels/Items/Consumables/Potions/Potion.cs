using System;
namespace GameModels;

public class Potion : Consumable
{
    public Potion(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void UseItem(Character character)
    {
        Console.WriteLine("Drinking");
    }
}