using System;
namespace GameModels;

public class Wood : Resource
{
    public Wood(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}