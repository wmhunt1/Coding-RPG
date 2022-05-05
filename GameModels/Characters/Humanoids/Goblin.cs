namespace GameModels;
public class Goblin : Character
{
    public Goblin(string name):base(name)
    {
        Name = name;
        Weapon = new Spear();
        Armor = new LeatherScraps();
        CurrentXP = 5;
        Gold = 5;
        CalculateStats();
    }
}