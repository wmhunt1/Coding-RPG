using System;
namespace GameModels;

public class Drink : Item
{
    public Drink(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}