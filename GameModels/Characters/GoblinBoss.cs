namespace GameModels;
public class GoblinBoss : Character
{
    public GoblinBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Weapon("Spear", 0, 2);
        Attack = 2;
        Armor = new Armor("Hide Armor", 0, 1);
        Defense = 1;
        CurrentXP = 50;
        Gold = 50;
    }
}