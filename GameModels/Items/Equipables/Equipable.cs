using System;
namespace GameModels;

public class Equipable : Item
{
    public Equipable(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void EquipItem(Character character)
    {

    }
    public virtual void UnEquipItem(Character character)
    {
        
    }
}