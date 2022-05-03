namespace GameModels;
public class GoblinBoss : Character
{
    public GoblinBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Spear();
        Armor = new LeatherScraps();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        CurrentXP = 50;
        Gold = 50;
    }
}