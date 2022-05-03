namespace GameModels;
public class Bandit : Character
{
    public Bandit(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Dagger();
        Armor = new HideArmor();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        CurrentXP = 5;
        Gold = 5;
    }
}