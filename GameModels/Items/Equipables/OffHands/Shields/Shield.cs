using System;
namespace GameModels;

public class Shield : Equipable
{
    public int Protection;
    public Shield(string name, int cost, int protection):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
    }
}