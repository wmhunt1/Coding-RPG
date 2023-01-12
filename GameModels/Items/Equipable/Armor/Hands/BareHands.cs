namespace GameModels;
public class BareHands : Hands 
{   
    public BareHands(string name = "Bare", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}