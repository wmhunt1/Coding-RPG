using System.Text.Json.Serialization;

namespace GameModels;
public class Inn : Store
{
    [JsonPropertyName("RoomCost")]
    public int RoomCost {get; set;}
    public Inn(string name, List<Item> storeInventory, int roomCost) : base(name, storeInventory)
    {
        Name = name;
        StoreInventory = storeInventory;
        RoomCost = roomCost;
        StoreDialogue = new InnDialogue(Name, this);
    }
    public void RestAtInn(Character hero)
    {
        if (hero.Gold >= RoomCost)
        {
            hero.RemoveGold(RoomCost);
            hero.FullRest();
        }
        else
        {
            Console.WriteLine($"{hero.Name} cannot afford a room");
        }
    }
}