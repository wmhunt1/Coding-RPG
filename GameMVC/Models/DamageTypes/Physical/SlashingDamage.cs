using System.Text.Json.Serialization;

namespace GameModels;
public class SlashingDamage: PhysicalDamage
{
    public SlashingDamage(string name = "Slashing"):base(name)
    {
        Name = name;
    }
}