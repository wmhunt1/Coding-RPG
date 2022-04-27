namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = "Club";
        Armor = "Cloth Tunic";
    }
}