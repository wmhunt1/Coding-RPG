namespace GameModels;
public class Wolf : Character
{
    public Wolf(string name):base(name)
    {
        Name = name;
        Race = new Beast();
        Weapon = new Bite();
        Job = new Pet();
        CalculateStats();
    }
}