namespace GameModels;
public class Bandit : Character
{
    public Bandit(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Dagger();
        Attack = 2;
        Armor = new HideArmor();
        Defense = 1;
        CurrentXP = 5;
        Gold = 5;
    }
}