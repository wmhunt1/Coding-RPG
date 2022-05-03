using System;
namespace GameModels;

public class Item
{
    public string Name;
    public int Cost;
    public Item(string name, int cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void UseItem(Character character)
    {

    }

}