namespace GameModels;
public class BareFeet : Feet 
{   
    public BareFeet(string name = "Bare", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
}