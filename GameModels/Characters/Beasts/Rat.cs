namespace GameModels;
public class Rat : Character
{
    public Rat(string name):base(name)
    {
        Name = name;
        Race = new Beast();
        CurrentHP = 2;
        MaxHP = 2;
        Weapon = new Bite();
        Attack = 1;
        CurrentXP = 5;
        Gold = 1;
    }
}