namespace GameModels;
public class Goblin : Character
{
    public Goblin(string name):base(name)
    {
        Name = name;
        CurrentHP = 5;
        MaxHP = 5;
        Weapon = new Spear();
        Armor = new LeatherScraps();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        CurrentXP = 5;
        Gold = 5;
    }
}