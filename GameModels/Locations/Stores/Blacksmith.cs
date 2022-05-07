using System;
namespace GameModels;

public class Blacksmith : Store
{
    new public List<Equipable> Inventory = new List<Equipable>();
    public Blacksmith(string name) : base(name)
    {
        Name = name;
        Dagger dagger = new Dagger();
        GreatSword greatSword = new GreatSword();
        Sword sword = new Sword();
        LeatherVest leatherVest = new LeatherVest();
        Inventory.Add(dagger);
        Inventory.Add(greatSword);
        Inventory.Add(sword);
        Inventory.Add(leatherVest);
    }
}