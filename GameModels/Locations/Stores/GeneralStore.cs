using System;
namespace GameModels;

public class GeneralStore : Store
{
    public GeneralStore(string name = "Test"):base(name)
    {
        Name = name;
        HealthPotion healthPotion = new HealthPotion("Health Potion", 5, 10);
        Inventory.Add(healthPotion);
    }
}