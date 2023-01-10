namespace GameModels;
public class Store : Location
{
    public List<Item> StoreInventory {get; set;}
    public Dialogue StoreDialogue {get; set;} = new Dialogue("No Associated Dialogue");
    public Store(string name, List<Item> storeInventory) : base(name)
    {
        Name = name;
        StoreInventory = storeInventory;
    }
}