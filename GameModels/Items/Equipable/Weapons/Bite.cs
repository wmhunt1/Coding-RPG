namespace GameModels;

public class Bite : Natural
{
    public Bite(string name = "Bite", int cost = 0, int weaponDmg = 1, string weaponDmgType = "Piercing") : base(name, cost, weaponDmg, weaponDmgType)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
}