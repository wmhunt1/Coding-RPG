using System;
namespace GameModels;

public class HideArmor : Torso
{

    public HideArmor(string name = "Hide Armor", int cost = 5, int protection = 1):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Leather();
        
    }
}