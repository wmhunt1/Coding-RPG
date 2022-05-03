namespace GameModels;
public class BasicSkeleton : Character
{
    public BasicSkeleton(string name):base(name)
    {
        Name = name;
        Race = new Undead();
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Spear();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        CurrentXP = 5;
        Gold = 5;
        Vulnerabilities?.Add(new Bludgeoning());
    }
}