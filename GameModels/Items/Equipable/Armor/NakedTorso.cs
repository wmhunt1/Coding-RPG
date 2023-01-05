namespace GameModels;
public class NakedTorso : Torso 
{   
    public NakedTorso(string name = "Naked", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}