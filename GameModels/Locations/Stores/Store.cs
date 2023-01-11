using System.Text.Json.Serialization;

namespace GameModels;
public class Store : Location
{
    [JsonPropertyName("StoreInventory")]
    public List<Item> StoreInventory { get; set; }
    [JsonPropertyName("StoreDialogue")]
    public Dialogue StoreDialogue { get; set; } = new Dialogue("No Associated Dialogue");
    public Store(string name, List<Item> storeInventory) : base(name)
    {
        Name = name;
        StoreInventory = storeInventory;
    }
}