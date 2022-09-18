namespace GameModels;
public class Rat : Character
{
    public Rat(string name):base(name)
    {
        Name = name;
        Race = new Beast();
        Weapon = new Bite();
        Strength = 10;
        Endurance = 5;
        CurrentXP = 5;
        Gold = 1;
        CalculateStats();
    }
}