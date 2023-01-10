namespace GameModels;
public class Shield : OffHand
{
    public int ShieldValue = 0;
    public Shield(string name, int cost, int shieldValue) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        ShieldValue = shieldValue;
    }
    public override void EquipItem(Character hero)
    {
        hero.OffHand = this;
        hero.Shield += ShieldValue;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.OffHand = new EmptyHand();
        hero.Shield -= ShieldValue;
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(hero);
        }
    }
}