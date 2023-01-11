using System.Text.Json.Serialization;

namespace GameModels;
public class PoisonCondition : DamageCondition
{
    public PoisonCondition(string name = "Poisoned", int damageAmount = 5):base(name, damageAmount)
    {
        Name = name;
        DamageType = new PoisonDamage();
        DamageAmount = damageAmount;
    }
}