namespace GameModels;
public class Cleric : Job
{
    public Cleric(string name = "Cleric") : base(name)
    {
        Name = name;
    }
    public override Character AddJobPackage(Character hero)
    {
        HealSpell healSpell = new HealSpell();
        healSpell.LearnSpell(hero);
        return hero;
    }
}