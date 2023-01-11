using System.Text.Json.Serialization;

namespace GameModels;
public class Accessory : Equipable
{
    public Accessory(string name, int cost) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}