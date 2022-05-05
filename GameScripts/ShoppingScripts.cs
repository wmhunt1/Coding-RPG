using System;
using GameModels;

namespace GameScripts;
public class ShoppingScripts
{
    public ShoppingScripts()
    {

    }
    public void BuyItem(Character hero, Item item)
    {
         if (hero.HasEnoughGold(item.Cost) == false)
        { 
            hero.RemoveGold(item.Cost);
            Console.WriteLine($"You buy a new {item.Name}");
            hero.AddToInventory(item); 
        }
        else
        {
            Console.WriteLine($"You don't have enough Gold for a {item.Name}");
        }
    }
    public void SellEquipment(Character hero, Equipable item)
    {
       hero.AddGold(item.Cost/2);
       Console.WriteLine($"You sell your old {item.Name}");
    }
    public void BuyEquipment(Character hero, Equipable item)
    {

        if (hero.HasEnoughGold(item.Cost) == false)
        { 
            hero.RemoveGold(item.Cost);
            Console.WriteLine($"You buy a new {item.Name}");
            item.EquipItem(hero);
            if (item is Accessory)
            {
                SellEquipment(hero, hero.Accessory);
            }
            if (item is Armor)
            {
                SellEquipment(hero, hero.Armor);
            }
            if (item is Weapon)
            {
                SellEquipment(hero, hero.Weapon);
            }  
        }
        else
        {
            Console.WriteLine($"You don't have enough Gold for a {item.Name}");
        }
    }
}