using System;
using GameModels;

namespace GameSpace
{
    public class CharacterSheetMenu : Menu
    {

        public void DisplayEquipment(Character hero)
        {
            Console.WriteLine($"{hero.Name}'s Equipment");
            Console.WriteLine($"[1] Weapon: {hero.Weapon.Name} - {hero.Weapon.WeaponDmg} {hero.Weapon.WeaponDmgType.Name} Damage");
            Console.WriteLine($"[2] Armor: {hero.Torso.Name} - {hero.Torso.Protection} {hero.Torso.ProtectionType} Protection");
            Console.WriteLine("[0] Leave Equipment");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    hero.Weapon.UnEquipItemFromEquipment(hero);
                    break;
                case "2":
                    hero.Torso.UnEquipItemFromEquipment(hero);
                    break;
                case "0":
                    break;
                default:
                    break;
            }
            AnyKey();
        }
        public void EquipFromDisplayInventory(Character hero, List<Equipable> equipable)
        {
            for (int equip = 0; equip < equipable.Count; equip++)
            {
                Console.WriteLine($"[{equip + 1}] {equipable[equip].Name}");
            }
            Console.WriteLine("Equip Items? (Y/N)");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "Y":
                case "y":
                    for (int equip = 0; equip < equipable.Count; equip++)
                    {
                        Console.WriteLine($"[{equip + 1}] {equipable[equip].Name}");
                    }
                    string? selectionInput = Console.ReadLine();
                    if (selectionInput != null)
                    {
                        int selection = Int32.Parse(selectionInput);
                        equipable[selection - 1].EquipItemFromInventory(hero);
                    }
                    break;
                case "N":
                case "n":
                    break;
                default:
                    break;
            }
        }
        public void DisplayInventory(Character hero)
        {
            List<Equipable> equipable = new List<Equipable>();
            Console.WriteLine($"{hero.Gold} GP");
            for (int item = 0; item < hero.Inventory.Count; item++)
            {
                if (hero.Inventory[item].Quantity > 0)
                {
                    Console.WriteLine($"{hero.Inventory[item].Name} X {hero.Inventory[item].Quantity}");
                }
                if (hero.Inventory[item] is Equipable)
                {
                    var equipableItem = (Equipable)hero.Inventory[item];
                    equipable.Add(equipableItem);
                }
            }
            if (equipable.Count > 0)
            {
                EquipFromDisplayInventory(hero, equipable);
            }
            AnyKey();
        }
        public void DisplayAbilities(Character hero)
        {
            for (int ability = 0; ability < hero.Abilities.Count; ability++)
            {
                Console.WriteLine($"{hero.Abilities[ability].Name}");
            }
            AnyKey();
        }
        public void DisplaySpellBook(Character hero)
        {
            for (int spell = 0; spell < hero.SpellBook.Count; spell++)
            {
                Console.WriteLine($"{hero.SpellBook[spell].Name}");
            }
            AnyKey();
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine(" ===== Coding RPG ===== ");
                Console.WriteLine($"===== {hero.Name}'s Character Sheet =====");
                Console.WriteLine($"Level: {hero.Level} EXP {hero.CurrentXP}/{hero.MaxXP}");
                Console.WriteLine($"HP: {hero.CurrentHP}/{hero.MaxHP} MP: {hero.CurrentMP}/{hero.MaxMP} SP: {hero.CurrentSP}/{hero.MaxSP}");
                Console.WriteLine("[1] View Equipment");
                Console.WriteLine("[2] View Inventory");
                Console.WriteLine("[3] View Abilities");
                Console.WriteLine("[4] View Spellbook");
                Console.WriteLine("[0] Leave Sheet");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        DisplayEquipment(hero);
                        break;
                    case "2":
                        DisplayInventory(hero);
                        break;
                    case "3":
                        DisplayAbilities(hero);
                        break;
                    case "4":
                        DisplaySpellBook(hero);
                        break;
                    case "0":
                        showMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}