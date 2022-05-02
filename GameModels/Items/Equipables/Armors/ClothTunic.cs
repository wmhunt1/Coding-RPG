using System;
namespace GameModels;

public class ClothTunic : Armor
{

    public ClothTunic(string name = "Cloth Tunic", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Cloth();
    }
}