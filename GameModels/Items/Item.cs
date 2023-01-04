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
    public void BuyItem(Character hero)
    {
        hero.RemoveGold(this.Cost);
        hero.AddItemToInventory(this);
    }
    public void SellItem(Character hero)
    {
        hero.AddGold(this.Cost/2);
        hero.RemoveItemFromInventory(this);
    }
}