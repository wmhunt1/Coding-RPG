namespace GameModels;
public class Rogue : Job
{
    public Rogue(string name = "Rogue") : base(name)
    {
        Name = name;
    }
     public override Character AddJobPackage(Character hero)
    {
        SneakAttack sneakAttack = new SneakAttack();
        sneakAttack.LearnAbility(hero);
        return hero;
    }
}