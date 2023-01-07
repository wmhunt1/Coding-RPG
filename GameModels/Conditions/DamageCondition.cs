namespace GameModels;
public class DamageCondition : Condition
{
    public DamageType DamageType = new DamageType("Typeless");
    public int DamageAmount;
    public DamageCondition(string name, int damageAmount):base(name)
    {
        Name = name;
        DamageAmount = damageAmount;
    }
    public void ApplyConditionDamage(Character char1)
    {
        char1.AttackSpell(char1, DamageAmount, DamageType);
    }
}