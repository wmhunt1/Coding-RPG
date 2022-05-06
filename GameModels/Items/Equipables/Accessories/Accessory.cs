using System;
namespace GameModels;

public class Accessory : Equipable
{
    public Accessory(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}