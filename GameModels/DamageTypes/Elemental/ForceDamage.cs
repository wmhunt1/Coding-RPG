namespace GameModels;
public class ForceDamage : ElementalDamage
{
    public ForceDamage(string name  = "Force"):base(name)
    {
        Name = name;
    }
}