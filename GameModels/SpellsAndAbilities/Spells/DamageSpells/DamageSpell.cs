namespace GameModels;
public class DamageSpell : Spell
{
    public DamageType SpellDamageType;
    public int SpellDamage;
    public DamageSpell(string name, string school, int level, int cost, int spellDamage) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = spellDamage;
        SpellDamageType = new EnergyDamage();
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {

    }
}