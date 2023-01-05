namespace GameModels;
public class PiercingDamage: PhysicalDamage
{
    public PiercingDamage(string name = "Piercing"):base(name)
    {
        Name = name;
    }
}