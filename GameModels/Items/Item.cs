using System;
namespace GameModels;

public class Item
{
    public string Name;
    public int Cost;
    public int Quantity = 1;
    public Item(string name, int cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void UseItem(Character character)
    {

    }

}