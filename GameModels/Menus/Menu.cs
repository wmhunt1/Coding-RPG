using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GameModels
{
    public class Menu
    {
        public virtual void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = false;
            }
        }
        public void ShowTitle()
        {
            Console.WriteLine("===== Coding RPG =====");
        }
        public void AnyKey()
        {
            Console.WriteLine("Press any key to continue");
            string? input = Console.ReadLine();
        }
        public void SaveGame(Character hero)
        {
            Console.WriteLine("Saving Game...");
            AnyKey();
            List<Character> _data = new List<Character>();
            _data.Add(new Character(hero.Name)
            {
                Name = hero.Name,
                Weapon = new Weapon(hero.Weapon.Name, hero.Weapon.Cost, hero.Weapon.WeaponDmg)
                {
                    Name = hero.Weapon.Name,
                    Cost = hero.Weapon.Cost,
                    WeaponDmg = hero.Weapon.WeaponDmg,
                    WeaponDmgType = hero.Weapon.WeaponDmgType,
                    EquipmentEnchantment = hero.Weapon.EquipmentEnchantment
                }
            });

            string json = JsonSerializer.Serialize(_data);
            File.WriteAllText($@"D:\{hero.Name}.json", json);
            System.IO.File.WriteAllText($@"D:\{hero.Name}.txt", json);
        }
        public Character LoadGame(Character hero)
        {
            Console.WriteLine("Character name...");
            string? name = Console.ReadLine();
            string text = File.ReadAllText($@"D:\{name}.json");
            if (text != null)
            {
                var heroList = JsonSerializer.Deserialize<List<Character>>(text);
                if (heroList?.Count > 0)
                {
                    //hero = heroList[0];
                    hero.Name = heroList[0].Name;
                    hero.Weapon = heroList[0].Weapon;
                    Console.WriteLine(hero.Name);
                }
            }
            return hero;
        }
    }
}