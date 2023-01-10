namespace GameModels;
public class WoodenBow : Bow
{
    public WoodenBow(string name = "Wooden Bow", int cost = 2, int weaponDmg = 2) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
}