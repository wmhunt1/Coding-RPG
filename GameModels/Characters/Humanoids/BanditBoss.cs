namespace GameModels;
public class BanditBoss : Character
{
    public BanditBoss(string name):base(name)
    {
        Name = name;
        Weapon = new Dagger();
        Armor = new HideArmor();
        CurrentXP = 50;
        Gold = 50;
        CalculateStats();
    }
}