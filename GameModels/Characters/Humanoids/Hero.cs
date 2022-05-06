namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = new Club();
        Torso = new ClothTunic();
        Gold = 10;
        CalculateStats();
    }
}