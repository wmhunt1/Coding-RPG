namespace GameModels;
public class Armor : Equipable
{   
    public int Protection;
    public string ProtectionType;
    public Armor(string name, int cost, int protection, string protectionType):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
    public override void EquipItem(Character hero)
    {
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}