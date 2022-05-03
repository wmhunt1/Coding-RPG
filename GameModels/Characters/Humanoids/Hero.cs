namespace GameModels;
public class Hero : Character
{
    public Hero(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        Weapon = new Club();
        Armor = new ClothTunic();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        Gold = 10;
    }
}