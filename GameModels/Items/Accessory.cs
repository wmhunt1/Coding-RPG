namespace GameModels;
public class Accessory : Equipable
{
    public Accessory(string name) : base(name)
    {
        Name = name;
    }
    public override void Equip(Character hero)
    {
        hero.Accessory = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}