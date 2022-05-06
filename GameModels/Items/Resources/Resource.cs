using System;
namespace GameModels;

public class Resource : Item
{
    public Resource(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}