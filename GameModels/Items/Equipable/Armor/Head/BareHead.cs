namespace GameModels;
public class BareHead : Head 
{   
    public BareHead(string name = "Bare", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
}