using System.Text.Json.Serialization;

namespace GameModels;
public class FireDamage : ElementalDamage
{
    public FireDamage(string name  = "Fire"):base(name)
    {
        Name = name;
    }
}