namespace GameModels;
public class Item
{
    public string Name;
    public int Cost;
    public int Quantity = 1;
    public Item(string name, int cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void ConsumeItem(Character hero)
    {

    }
    public void BuyItem(Character hero)
    {
        if (this.Cost > hero.Gold)
        {
            Console.WriteLine($"{hero.Name} cannot afford {this.Name}");
        }
        else
        {
            hero.RemoveGold(this.Cost);
            hero.AddItemToInventory(this);
        }
    }
    public void SellItem(Character hero)
    {
        hero.AddGold(this.Cost / 2);
        hero.RemoveItemFromInventory(this);
    }
}