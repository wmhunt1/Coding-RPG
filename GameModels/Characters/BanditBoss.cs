namespace GameModels;
public class BanditBoss : Character
{
    public BanditBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = "Dagger";
        Attack = 2;
        Armor = "Hide Armor";
        Defense = 1;
        CurrentXP = 5;
        Gold = 50;
    }
}