namespace GameModels;
public class Wizard : Job
{
    public Wizard(string name = "Wizard") : base(name)
    {
        Name = name;
    }
    public override Character AddJobPackage(Character hero)
    {
        MagicMissile magicMissile = new MagicMissile();
        magicMissile.LearnSpell(hero);
        return hero;
    }
}