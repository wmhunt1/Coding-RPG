using System;
namespace GameModels;

public class Food : Item
{
    public Food(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}