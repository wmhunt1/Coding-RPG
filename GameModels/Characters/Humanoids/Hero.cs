namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = new Club();
        Attack = 1;
        Armor = new ClothTunic();
        Gold = 10;
    }
}