namespace GameModels;
public class FireDamage : EnergyDamage
{
    public FireDamage(string name  = "Fire"):base(name)
    {
        Name = name;
    }
}