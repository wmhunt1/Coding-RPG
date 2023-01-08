namespace GameModels;
public class SummonSkeletonSpell : SummoningSpell
{
    public SummonSkeletonSpell(string name = "Summon Spell", string school = "Summoning", int level = 1, int cost = 5):base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        Summon = new Skeleton();
        Summon.Ally = true;
    }
}