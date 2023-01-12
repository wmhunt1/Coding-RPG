namespace GameModels;
public class Boots : Feet 
{   
    public Boots(string name = "Boots", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}