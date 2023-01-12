namespace GameModels;
public class BareFeet : Feet 
{   
    public BareFeet(string name = "Bare", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}