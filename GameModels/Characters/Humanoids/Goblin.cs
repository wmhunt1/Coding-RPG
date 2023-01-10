namespace GameModels;
public class Goblin : Humanoid
{
    public Goblin(string name = "Goblin") : base(name)
    {
        Name = name;
        Ally = false;
        CurrentXP = 10;
        Weapon = new Club();
    }
}