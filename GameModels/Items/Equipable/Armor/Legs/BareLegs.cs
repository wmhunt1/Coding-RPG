namespace GameModels;
public class BareLegs : Legs 
{   
    public BareLegs(string name = "Bare", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}