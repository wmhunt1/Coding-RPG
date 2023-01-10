namespace GameModels;
public class OffHandWeapon : OffHand
{
    public int OffHandDamageValue;
    public DamageType OffHandDamageType= new DamageType("Untyped");
    public OffHandWeapon(string name, int cost, int offhandDmg) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        OffHandDamageValue = offhandDmg;
    }
    public override void EquipItem(Character hero)
    {
        hero.OffHand = this;
        hero.OffHandDamageBonus += OffHandDamageValue;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.OffHand = new EmptyHand();
        hero.OffHandDamage -= OffHandDamageValue;
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(hero);
        }
    }
}