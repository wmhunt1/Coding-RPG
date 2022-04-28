namespace GameModels;
public class Bandit : Character
{
    public Bandit(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Weapon("Dagger", 0, 2);
        Attack = 2;
        Armor = new Armor("Hide Armor", 0, 1);
        Defense = 1;
        CurrentXP = 5;
        Gold = 5;
    }
}