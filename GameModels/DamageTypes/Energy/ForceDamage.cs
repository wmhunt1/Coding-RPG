namespace GameModels;
public class ForceDamage : EnergyDamage
{
    public ForceDamage(string name  = "Force"):base(name)
    {
        Name = name;
    }
}