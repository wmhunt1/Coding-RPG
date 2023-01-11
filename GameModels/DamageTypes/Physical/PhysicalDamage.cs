using System.Text.Json.Serialization;

namespace GameModels;
public class PhysicalDamage : DamageType
{
    public PhysicalDamage(string name = "Physical"):base(name)
    {
        Name = name;
    }
}