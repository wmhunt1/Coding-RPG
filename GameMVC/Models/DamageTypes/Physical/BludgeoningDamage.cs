using System.Text.Json.Serialization;

namespace GameModels;
public class BludgeoningDamage: PhysicalDamage
{
    public BludgeoningDamage(string name = "Bludgeoning"):base(name)
    {
        Name = name;
    }
}