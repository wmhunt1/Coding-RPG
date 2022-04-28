using System;
namespace GameModels;

public class Potion : Item
{
    public Potion(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}