using System;
namespace GameModels;

public class Store : Location
{
    public List<Item> Inventory = new List<Item>();
    public Store(string name):base(name)
    {
        Name = name;
    }
}