namespace GameModels;
public class Torso : Armor 
{   
    public Torso(string name, int cost, int protection, string protectionType):base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
     public override void EquipItem(Character hero)
    {
        hero.Torso = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}