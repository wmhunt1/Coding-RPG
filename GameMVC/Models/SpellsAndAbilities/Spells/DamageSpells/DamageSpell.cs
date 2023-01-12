using System.Text.Json.Serialization;

namespace GameModels;
public class DamageSpell : Spell
{
    [JsonPropertyName("SpellDamageType")]
    public DamageType SpellDamageType { get; set; }
    [JsonPropertyName("SpellDamage")]
    public int SpellDamage { get; set; }
    public DamageSpell(string name, string school, int level, int cost, int spellDamage) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = spellDamage;
        SpellDamageType = new ElementalDamage();
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {

    }
}