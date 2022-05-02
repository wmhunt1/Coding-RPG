using System;
namespace GameModels;

public class Beer : Drink
{
    public Beer(string name = "Beer", int cost = 1):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}