using System.Text.Json.Serialization;

namespace GameModels;
public class NakedTorso : Torso 
{   
    public NakedTorso(string name = "Naked", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
}