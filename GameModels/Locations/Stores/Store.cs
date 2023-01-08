namespace GameModels;
public class Store : Location
{
    public List<Item> StoreInventory;
    public Dialogue StoreDialogue = new Dialogue("No Associated Dialogue");
    public Store(string name, List<Item> storeInventory) : base(name)
    {
        Name = name;
        StoreInventory = storeInventory;
    }
}