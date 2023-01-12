namespace GameModels;
public class Gloves : Hands 
{   
    public Gloves(string name = "Gloves", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new ClothProtection();
    }
}