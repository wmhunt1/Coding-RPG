using System.Text.Json.Serialization;

namespace GameModels;
public class LeatherTorso : Torso 
{   
    public LeatherTorso(string name = "Leather Armor", int cost = 5, int protection = 1):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new LeatherProtection();
    }
}