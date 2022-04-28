using System;
namespace GameModels;

public class Consumable : Item
{
    public Consumable(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}