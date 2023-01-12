namespace GameModels;
public class Gloves : Hands 
{   
    public Gloves(string name = "Gloves", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}