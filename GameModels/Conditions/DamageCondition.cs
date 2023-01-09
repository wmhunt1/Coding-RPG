namespace GameModels;
public class DamageCondition : Condition
{
    public DamageType DamageType = new DamageType("Typeless");
    public int DamageAmount;
    public DamageCondition(string name, int damageAmount) : base(name)
    {
        Name = name;
        DamageAmount = damageAmount;
    }
    public void ApplyConditionDamage(Character char1)
    {
        char1.AttackSpell(char1, DamageAmount, DamageType);
    }
    public override Character ResistCondition(Character char1)
    {
        Random random = new Random();
        int resistingAttribute = char1.Constitution + char1.ConstitutionBonus + char1.ConstitutionPenalty;
        int chance = random.Next(resistingAttribute, 100);
        if (chance >= 50)
        {
            Console.WriteLine($"{char1.Name}'s {Name}'s condition ends");
            this.RemoveCondition(char1);
        }
        return char1;
    }
}