namespace GameModels;
public class Goblin : Character
{
    public Goblin(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Spear();
        Attack = 2;
        Armor = new LeatherScraps();
        Defense = 1;
        CurrentXP = 5;
        Gold = 5;
    }
}