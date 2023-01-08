namespace GameModels;
public class SummoningSpell : Spell
{
    public Character Summon = new Character("Summon");
    public SummoningSpell(string name, string school, int level, int cost):base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {
        Console.WriteLine($"{caster.Name} summons a {Summon.Name}");
        allies.Add(Summon);
    }
}