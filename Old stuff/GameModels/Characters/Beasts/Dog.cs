namespace GameModels;
public class Dog : Character
{
    public Dog(string name):base(name)
    {
        Name = name;
        Race = new Beast();
        Weapon = new Bite();
        Job = new Pet();
        CalculateStats();
    }
}