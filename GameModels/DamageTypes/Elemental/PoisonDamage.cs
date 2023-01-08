namespace GameModels;
public class PoisonDamage : ElementalDamage
{
    public PoisonDamage(string name  = "Poison"):base(name)
    {
        Name = name;
    }
}