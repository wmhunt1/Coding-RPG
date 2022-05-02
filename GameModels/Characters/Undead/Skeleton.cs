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
        Attack = 2;
        Defense = 1;
        CurrentXP = 5;
        Gold = 5;
    }
}