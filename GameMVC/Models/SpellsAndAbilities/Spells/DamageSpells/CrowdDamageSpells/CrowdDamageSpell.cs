using System.Text.Json.Serialization;
namespace GameModels;
public class CrowdDamageSpell : DamageSpell
{
    public CrowdDamageSpell(string name, string school, int level, int cost, int spellDamage) : base(name, school, level, cost, spellDamage)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = spellDamage;
        SpellDamageType = new ForceDamage();
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {
        for (int enemy = 0; enemy < enemies.Count; enemy++)
        {
             caster.AttackSpell(enemies[enemy], SpellDamage, SpellDamageType);
        }
    }
}