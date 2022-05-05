namespace GameModels;
public class GoblinBoss : Character
{
    public GoblinBoss(string name):base(name)
    {
        Name = name;
        Weapon = new Spear();
        Armor = new LeatherScraps();
        CurrentXP = 50;
        Gold = 50;
        CalculateStats();
    }
}