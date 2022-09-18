namespace GameModels;
public class BasicSkeleton : Character
{
    public BasicSkeleton(string name):base(name)
    {
        Name = name;
        Race = new Undead();
        Weapon = new Spear();
        CurrentXP = 5;
        Gold = 5;
        Vulnerabilities?.Add(new Bludgeoning());
        CalculateStats();
    }
}