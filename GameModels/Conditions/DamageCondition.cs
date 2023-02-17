using System.Text.Json.Serialization;

namespace GameModels;
public class DamageCondition : Condition
{
    [JsonPropertyName("DamageType")]
    public DamageType DamageType  {get; set;} = new DamageType("Typeless");
    [JsonPropertyName("DamageAmount")]
    public int DamageAmount {get; set;}
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
        int resistingAttribute = char1.Attributes.Constitution.Value + char1.Attributes.Constitution.ValueBonus + char1.Attributes.Constitution.ValuePenalty;
        int chance = random.Next(resistingAttribute, 100);
        if (chance >= 50)
        {
            Console.WriteLine($"{char1.Name}'s {Name}'s condition ends");
            this.RemoveCondition(char1);
        }
        return char1;
    }
}