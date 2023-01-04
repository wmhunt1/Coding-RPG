namespace GameModels;
public class Tunic : Torso 
{   
    public Tunic(string name = "Tunic", int cost = 0, int protection = 0, string protectionType = "Cloth"):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
}