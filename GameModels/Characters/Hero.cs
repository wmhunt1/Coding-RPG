namespace GameModels;
public class Hero : Character
{
    public bool BanditQuest = false;
    public bool RatQuest = false;
    public Hero(string name):base(name)
    {
        Name = name;
        Weapon = "Club";
        Armor = "Cloth Tunic";
    }
}