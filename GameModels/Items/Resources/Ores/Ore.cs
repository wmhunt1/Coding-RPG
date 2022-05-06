using System;
namespace GameModels;

public class Ore : Resource
{
    public Ore(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}