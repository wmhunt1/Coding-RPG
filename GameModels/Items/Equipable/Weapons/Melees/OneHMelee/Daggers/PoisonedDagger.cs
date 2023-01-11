using System.Text.Json.Serialization;
namespace GameModels;

public class PoisonedDagger : Dagger
{
    public PoisonedDagger(string name = "Poisoned Dagger", int cost = 1, int weaponDmg = 1) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PiercingDamage();
        EquipmentEnchantment = new PoisonedEnchantment();
    }
}