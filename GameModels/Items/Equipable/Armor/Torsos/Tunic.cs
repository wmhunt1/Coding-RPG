using System.Text.Json.Serialization;

namespace GameModels;
public class Tunic : Torso 
{   
    public Tunic(string name = "Tunic", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new ClothProtection();
    }
}