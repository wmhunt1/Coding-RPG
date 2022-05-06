using System;
namespace GameModels;

public class Fish : Resource
{
    public Fish(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}