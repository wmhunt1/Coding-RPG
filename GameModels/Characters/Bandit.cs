namespace GameModels;
public class Bandit : Character
{
    public Bandit(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = "Dagger";
        Attack = 2;
        Armor = "Hide Armor";
        Defense = 1;
        CurrentXP = 5;
        Gold = 1;
    }
}