namespace GameModels;
public class Dog : Beast
{
    public Dog(string name = "Dog") : base(name)
    {
        Name = name;
        Weapon = new Bite();
    }
}
