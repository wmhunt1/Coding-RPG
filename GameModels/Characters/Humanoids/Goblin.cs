namespace GameModels;
public class Goblin : Character
{
    public Goblin(string name):base(name)
    {
        Name = name;
        Race = new GoblinRace();
        Weapon = new Spear();
        Torso = new LeatherScraps();
        CurrentXP = 5;
        Gold = 5;
        Endurance = 5;
        CalculateStats();
    }
}