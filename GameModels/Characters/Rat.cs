namespace GameModels;
public class Rat : Character
{
    public Rat(string name):base(name)
    {
        Name = name;
        CurrentHP = 2;
        MaxHP = 2;
        Weapon = new Weapon("Bite", 0, 1);
        Attack = 1;
        CurrentXP = 5;
        Gold = 1;
    }
}