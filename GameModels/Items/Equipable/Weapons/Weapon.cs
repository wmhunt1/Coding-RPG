namespace GameModels;
public class Weapon : Equipable
{   
    public int WeaponDmg;
    public DamageType WeaponDmgType;
    public Weapon(string name, int cost, int weaponDmg):base(name, cost)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
    public override void EquipItem(Character hero)
    {
        hero.Weapon = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        hero.Weapon = new Fist();
        if (this.Name != "Fist")
        {
            hero.AddItemToInventory(this);
        }
    }
    public override void EquipItemFromInventory(Character hero)
    {
        hero.Weapon.UnEquipItem(hero);
        hero.RemoveItemFromInventory(this);
        this.EquipItem(hero);
    }
    public override void UnEquipItemFromEquipment(Character hero)
    {
        this.UnEquipItem(hero);
    }
}