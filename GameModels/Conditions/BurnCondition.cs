using System.Text.Json.Serialization;

namespace GameModels;
public class BurnCondition : DamageCondition
{
    public BurnCondition(string name = "Burned", int damageAmount = 5):base(name, damageAmount)
    {
        Name = name;
        DamageType = new FireDamage();
        DamageAmount = damageAmount;
    }
}