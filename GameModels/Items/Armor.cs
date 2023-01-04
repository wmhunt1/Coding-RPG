namespace GameModels;
public class Armor : Equipable
{   
    public int Protection;
    public string ProtectionType;
    public Armor(string name, int protection, string protectionType):base(name)
    {
        Name = name;
        Protection = protection;
        ProtectionType = protectionType;
    }
    public override void Equip(Character hero)
    {
        hero.Armor = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}