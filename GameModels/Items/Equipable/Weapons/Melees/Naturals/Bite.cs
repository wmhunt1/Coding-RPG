namespace GameModels;

public class Bite : Natural
{
    public Bite(string name = "Bite", int cost = 0, int weaponDmg = 1) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PiercingDamage();
    }
}