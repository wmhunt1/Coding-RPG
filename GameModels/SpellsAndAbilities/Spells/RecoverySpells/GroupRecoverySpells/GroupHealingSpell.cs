using System.Text.Json.Serialization;

namespace GameModels;
public class GroupHealingSpell : GroupRecoverySpell
{
    [JsonPropertyName("HealingAmount")]
    public int HealingAmount { get; set; }
    public GroupHealingSpell(string name, string school, int level, int cost, int healingAmount) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        HealingAmount = healingAmount;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        for (int ally = 0; ally < allies.Count; ally++)
        {
            allies[ally].HealHP(HealingAmount);
        }
    }
}