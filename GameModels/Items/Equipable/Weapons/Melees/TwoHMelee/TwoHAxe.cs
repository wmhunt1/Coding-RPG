namespace GameModels;
public class TwoHAxe : TwoHMelee
{   
    public TwoHAxe(string name = "Two-Handed Axe", int cost = 10, int weaponDmg = 5):base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new SlashingDamage();
    }
}