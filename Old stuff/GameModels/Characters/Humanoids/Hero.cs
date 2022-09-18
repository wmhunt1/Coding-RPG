namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = new Club();
        Torso = new Tunic();
        Legs = new Pants();
        Feet = new Shoes();
        Gold = 10;
        CalculateStats();
    }
}