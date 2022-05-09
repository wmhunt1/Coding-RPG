namespace GameModels;
public class HillGiant : Character
{
    public HillGiant(string name):base(name)
    {
        Name = name;
        Race = new GiantRace();
        CurrentXP = 50;
        Gold = 50;
        Strength = 20;
        Endurance = 20;
        CalculateStats();
    }
}