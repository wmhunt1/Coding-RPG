namespace GameModels;

public class Dagger : OneHMelee
{
    public Dagger(string name = "Dagger", int cost = 1, int weaponDmg = 1) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PiercingDamage();
    }
}