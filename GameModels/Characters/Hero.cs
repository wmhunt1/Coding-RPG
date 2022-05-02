namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = new Weapon("Club", 0 , 1);
        Attack = 1;
        Armor = new Armor("Cloth Tunic", 0, 0);
        Gold = 10;
    }
}