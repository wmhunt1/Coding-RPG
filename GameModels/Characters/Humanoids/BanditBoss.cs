namespace GameModels;
public class BanditBoss : Character
{
    public BanditBoss(string name):base(name)
    {
        Name = name;
        CurrentHP = 10;
        MaxHP = 10;
        Weapon = new Dagger();
        Armor = new HideArmor();
        Attack = Weapon.Damage;
        Defense = Armor.Protection;
        CurrentXP = 50;
        Gold = 50;
    }
}