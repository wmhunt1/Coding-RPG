namespace GameModels;
public class Hat : Head 
{   
    public Hat(string name = "Hat", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new ClothProtection();
    }
}