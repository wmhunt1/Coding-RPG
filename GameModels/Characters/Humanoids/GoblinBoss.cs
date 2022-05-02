namespace GameModels;
public class GoblinBoss : Character
{
    public GoblinBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Spear();
        Attack = 2;
        Armor = new LeatherScraps();
        Defense = 1;
        CurrentXP = 50;
        Gold = 50;
    }
}