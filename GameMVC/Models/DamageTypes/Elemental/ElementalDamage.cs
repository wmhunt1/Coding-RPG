using System.Text.Json.Serialization;

namespace GameModels;
public class ElementalDamage : DamageType
{
    public ElementalDamage(string name = "Elemental"):base(name)
    {
        Name = name;
    }
}