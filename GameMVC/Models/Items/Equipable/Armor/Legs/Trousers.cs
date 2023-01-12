namespace GameModels;
public class Trousers : Legs 
{   
    public Trousers(string name = "Trousers", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new ClothProtection();
    }
}