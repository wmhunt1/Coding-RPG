namespace GameModels;
public class BanditBoss : Character
{
    public BanditBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Dagger();
        Attack = 2;
        Armor = new HideArmor();
        Defense = 1;
        CurrentXP = 50;
        Gold = 50;
    }
}