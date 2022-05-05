namespace GameModels;
public class Bandit : Character
{
    public Bandit(string name):base(name)
    {
        Name = name;
        Weapon = new Dagger();
        Armor = new HideArmor();
        CurrentXP = 5;
        Gold = 5;
        CalculateStats();
    }
}