namespace GameModels;
public class Rat : Character
{
    public Rat(string name):base(name)
    {
        Name = name;
        CurrentHP = 2;
        MaxHP = 2;
        Weapon = "Bite";
        Armor = "Fur";
        CurrentXP = 5;
    }
}