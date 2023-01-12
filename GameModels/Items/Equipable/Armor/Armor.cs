using System.Text.Json.Serialization;

namespace GameModels;
public class Armor : Equipable
{   
    [JsonPropertyName("Protection")]
    public int Protection {get; set;}
    [JsonPropertyName("ProtectionType")]
    public ProtectionType ProtectionType {get; set;}
    public Armor(string name, int cost, int protection):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}