namespace GameModels;
public class SummonSkeletonSpell : SummoningSpell
{
    public SummonSkeletonSpell(string name = "Summon Skeleton", string school = "Summoning", int level = 1, int cost = 5):base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        Summon = new Skeleton();
        Summon.Ally = true;
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {
        Console.WriteLine($"{caster.Name} summons a {Summon.Name}");
        Character newSummon = new Skeleton();
        if (caster.Ally == false)
        {
            newSummon.Ally = false;
        }
        allies.Add(newSummon);
    }
}