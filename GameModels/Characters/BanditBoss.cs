namespace GameModels;
public class BanditBoss : Character
{
    public BanditBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Weapon("Dagger", 0, 2);
        Attack = 2;
        Armor = new Armor("Hide Armor", 0, 1);
        Defense = 1;
        CurrentXP = 50;
        Gold = 50;
        BanditQuest = 1;;
    }
}