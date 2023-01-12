namespace GameModels;
public class Trousers : Legs 
{   
    public Trousers(string name = "Trousers", int cost = 0, int protection = 0, string protectionType = "None"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}