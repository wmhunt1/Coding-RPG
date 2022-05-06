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
    public void SellItem(Character hero, Item item)
    {
        hero.AddGold(item.Cost / 2);
        Console.WriteLine($"You sell a {item.Name}");
        hero.RemoveFromInventory(item);
    }
    public void SellEquipment(Character hero, Equipable item)
    {
        hero.AddGold(item.Cost / 2);
        Console.WriteLine($"You sell your old {item.Name}");
    }
    public void BuyEquipment(Character hero, Equipable item)
    {

        if (hero.HasEnoughGold(item.Cost) == false)
        {
            hero.RemoveGold(item.Cost);
            Console.WriteLine($"You buy a new {item.Name}");
            if (item is Neck)
            {
                SellEquipment(hero, hero.Neck);
            }
            if (item is Ring)
            {
                SellEquipment(hero, hero.Ring);
            }
            if (item is Head)
            {
                SellEquipment(hero, hero.Head);
            }
            if (item is Torso)
            {
                SellEquipment(hero, hero.Torso);
            }
            if (item is Legs)
            {
                SellEquipment(hero, hero.Legs);
            }
            if (item is Hands)
            {
                SellEquipment(hero, hero.Hands);
            }
            if (item is Feet)
            {
                SellEquipment(hero, hero.Feet);
            }
            if (item is Back)
            {
                SellEquipment(hero, hero.Back);
            }
            if (item is Weapon)
            {
                SellEquipment(hero, hero.Weapon);
            }
            item.EquipItem(hero);
        }
        else
        {
            Console.WriteLine($"You don't have enough Gold for a {item.Name}");
        }
    }
    public void BuyFromBlacksmith(Character hero, List<Equipable> inventory)
    {
        for (int i = 0; i < inventory.Count; i++)
        {
            Console.WriteLine($"[{i + 1}] {inventory[i].Name} : {inventory[i].Cost} GP");
        }
        Console.WriteLine("[0] Back");
        int selection = int.Parse(Console.ReadLine());
        if (selection == 0)
        {

        }
        else
        {
            //need input validation
            BuyEquipment(hero, inventory[selection - 1]);
            Console.WriteLine("Press any key to continue");
            Console.ReadLine();
        }
    }
    public void BuyFromShop(Character hero, List<Item> inventory)
    {
        for (int i = 0; i < inventory.Count; i++)
        {
            Console.WriteLine($"[{i + 1}] {inventory[i].Name} : {inventory[i].Cost} GP");
        }
        Console.WriteLine("[0] Back");
        int selection = int.Parse(Console.ReadLine());
        if (selection == 0)
        {

        }
        else
        {
            //need input validation
            BuyItem(hero, inventory[selection - 1]);
            Console.WriteLine("Press any key to continue");
            Console.ReadLine();
        }
    }
    public void SellToShop(Character hero)
    {
        if (hero.Inventory?.Count > 0)
        {
            for (int i = 0; i < hero.Inventory.Count; i++)
            {
                Console.WriteLine($"[{i + 1}] {hero.Inventory[i].Name} : {hero.Inventory[i].Cost / 2} GP");
            }
            Console.WriteLine("[0] Back");
            int selection = int.Parse(Console.ReadLine());
            // need input validatioon
            if (selection == 0)
            {
            }
            else
            {
                //need input validation
                SellItem(hero, hero.Inventory[selection - 1]);
                Console.WriteLine("Press any key to continue");
                Console.ReadLine();
            }
        }
        else
        {
            Console.WriteLine("Inventory empty");
        }
    }
}