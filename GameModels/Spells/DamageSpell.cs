namespace GameModels;
public class DamageSpell : Spell
{
    public DamageSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character caster, List<Character> enemies)
    {

    }
}