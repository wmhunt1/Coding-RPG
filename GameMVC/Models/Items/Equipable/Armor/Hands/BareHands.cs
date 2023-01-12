namespace GameModels;
public class BareHands : Hands 
{   
    public BareHands(string name = "Bare", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
}