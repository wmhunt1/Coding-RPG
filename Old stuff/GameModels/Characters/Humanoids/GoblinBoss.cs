namespace GameModels;
public class GoblinBoss : Character
{
    public GoblinBoss(string name):base(name)
    {
        Name = name;
        Race = new GoblinRace();
        Weapon = new Spear();
        Torso = new LeatherScraps();
        CurrentXP = 50;
        Gold = 50;
        CalculateStats();
    }
}