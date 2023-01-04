using System;
using GameModels;

namespace GameSpace
{
    public class CharacterSheetMenu : Menu
    {
        public void DisplayEquipment(Character hero)
        {
            Console.WriteLine($"Weapon: {hero.Weapon.Name} - {hero.Weapon.WeaponDmg} {hero.Weapon.WeaponDmgType} Damage");
            Console.WriteLine($"Armor: {hero.Armor.Name} - {hero.Armor.Protection} {hero.Armor.ProtectionType} Protection");
            AnyKey();
        }
        public void DisplayInventory(Character hero)
        {
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
                Console.WriteLine("[0] Leave Sheet");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        DisplayEquipment(hero);
                        break;
                    case "2":
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