namespace GameModels;
public class Boots : Feet 
{   
    public Boots(string name = "Boots", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new LeatherProtection();
    }
}