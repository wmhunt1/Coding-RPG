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
                Level = hero.Level,
                Job = new Job(hero.Job.Name),
                CurrentXP = hero.CurrentXP,
                MaxXP = hero.MaxXP,
                CurrentHP = hero.CurrentHP,
                MaxHP = hero.MaxHP,
                HPBonus = hero.HPBonus,
                HPPenalty = hero.HPPenalty,
                HPRegen = hero.HPRegen,
                HPRegenBonus = hero.HPRegenBonus,
                HPRegenPenalty = hero.HPRegenPenalty,
                CurrentMP = hero.CurrentMP,
                MaxMP = hero.MaxMP,
                MPBonus = hero.MPBonus,
                MPPenalty = hero.MPPenalty,
                MPRegen = hero.MPRegen,
                MPRegenBonus = hero.MPRegenBonus,
                MPRegenPenalty = hero.MPRegenPenalty,
                CurrentSP = hero.CurrentSP,
                MaxSP = hero.MaxSP,
                SPBonus = hero.SPBonus,
                SPPenalty = hero.SPPenalty,
                SPRegen = hero.SPRegen,
                SPRegenBonus = hero.SPRegenBonus,
                SPRegenPenalty = hero.SPRegenPenalty,
                Strength = hero.Strength,
                StrengthBonus = hero.ShieldBonus,
                StrengthPenalty = hero.StrengthPenalty,
                Constitution = hero.Constitution,
                ConstitutionBonus = hero.ConstitutionBonus,
                ConstitutionPenalty = hero.ConstitutionPenalty,
                Dexterity = hero.Dexterity,
                DexterityBonus = hero.DexterityBonus,
                DexterityPenalty = hero.DexterityPenalty,
                Intelligence = hero.Intelligence,
                IntelligenceBonus = hero.IntelligenceBonus,
                IntelligencePenalty = hero.IntelligencePenalty,
                Wisdom = hero.Wisdom,
                WisdomBonus = hero.WisdomBonus,
                WisdomPenalty = hero.WisdomPenalty,
                Charisma = hero.Charisma,
                CharismaBonus = hero.CharismaBonus,
                CharismaPenalty = hero.CharismaPenalty,
                WillPower = hero.WillPower,
                WillPowerBonus = hero.WillPowerBonus,
                WillPowerPenalty = hero.WillPowerPenalty,
                Perception = hero.Perception,
                PerceptionBonus = hero.PerceptionBonus,
                PerceptionPenalty = hero.PerceptionPenalty,
                Luck = hero.Luck,
                LuckBonus = hero.LuckBonus,
                LuckPenalty = hero.LuckPenalty,
                Beauty = hero.Beauty,
                BeautyBonus = hero.BeautyBonus,
                BeautyPenalty = hero.BeautyPenalty,
                Speed = hero.Speed,
                SpeedBonus = hero.SpeedBonus,
                SpeedPenalty = hero.SpeedPenalty,
                Shield = hero.Shield,
                ShieldBonus = hero.ShieldBonus,
                ShieldPenalty = hero.ShieldPenalty,
                OffHandDamage = hero.OffHandDamage,
                OffHandDamageBonus = hero.OffHandDamageBonus,
                OffHandDamagePenalty = hero.OffHandDamagePenalty,
                Ally = hero.Ally,
                Weapon = new Weapon(hero.Weapon.Name, hero.Weapon.Cost, hero.Weapon.WeaponDmg)
                {
                    Name = hero.Weapon.Name,
                    Cost = hero.Weapon.Cost,
                    WeaponDmg = hero.Weapon.WeaponDmg,
                    WeaponDmgType = hero.Weapon.WeaponDmgType,
                    EquipmentEnchantment = new Enchantment(hero.Weapon.EquipmentEnchantment.Name)
                },
                OffHand = new OffHand(hero.OffHand.Name, hero.OffHand.Cost)
                {
                    EquipmentEnchantment = new Enchantment(hero.OffHand.EquipmentEnchantment.Name)
                },
                Torso = new Torso(hero.Torso.Name, hero.Torso.Cost, hero.Torso.Protection, hero.Torso.ProtectionType)
                {
                    EquipmentEnchantment = new Enchantment(hero.Torso.EquipmentEnchantment.Name)
                },
                Ring = new Ring(hero.Ring.Name, hero.Ring.Cost)
                {
                    EquipmentEnchantment = new Enchantment(hero.Ring.EquipmentEnchantment.Name)
                }
                //Companions
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
                    hero.Name = heroList[0].Name;
                    hero.Level = heroList[0].Level;
                    hero.Job = heroList[0].Job;
                    hero.CurrentXP = heroList[0].CurrentXP;
                    hero.MaxXP = heroList[0].MaxXP;
                    hero.CurrentHP = heroList[0].CurrentHP;
                    hero.MaxHP = heroList[0].MaxHP;
                    hero.HPBonus = heroList[0].HPBonus;
                    hero.HPPenalty = heroList[0].HPPenalty;
                    hero.HPRegen = heroList[0].HPRegen;
                    hero.HPRegenBonus = heroList[0].HPRegenBonus;
                    hero.HPRegenPenalty = heroList[0].HPRegenPenalty;
                    hero.CurrentMP = heroList[0].CurrentMP;
                    hero.MaxMP = heroList[0].MaxMP;
                    hero.MPBonus = heroList[0].MPBonus;
                    hero.MPPenalty = heroList[0].MPPenalty;
                    hero.MPRegen = heroList[0].MPRegen;
                    hero.MPRegenBonus = heroList[0].MPRegenBonus;
                    hero.MPRegenPenalty = heroList[0].MPRegenPenalty;
                    hero.CurrentSP = heroList[0].CurrentSP;
                    hero.MaxSP = heroList[0].MaxSP;
                    hero.SPBonus = heroList[0].SPBonus;
                    hero.SPPenalty = heroList[0].SPPenalty;
                    hero.SPRegen = heroList[0].SPRegen;
                    hero.SPRegenBonus = heroList[0].SPRegenBonus;
                    hero.SPRegenPenalty = heroList[0].SPRegenPenalty;
                    hero.Strength = heroList[0].Strength;
                    hero.StrengthBonus = heroList[0].ShieldBonus;
                    hero.StrengthPenalty = heroList[0].StrengthPenalty;
                    hero.Constitution = heroList[0].Constitution;
                    hero.ConstitutionBonus = heroList[0].ConstitutionBonus;
                    hero.ConstitutionPenalty = heroList[0].ConstitutionPenalty;
                    hero.Dexterity = heroList[0].Dexterity;
                    hero.DexterityBonus = heroList[0].DexterityBonus;
                    hero.DexterityPenalty = heroList[0].DexterityPenalty;
                    hero.Intelligence = heroList[0].Intelligence;
                    hero.IntelligenceBonus = heroList[0].IntelligenceBonus;
                    hero.IntelligencePenalty = heroList[0].IntelligencePenalty;
                    hero.Wisdom = heroList[0].Wisdom;
                    hero.WisdomBonus = heroList[0].WisdomBonus;
                    hero.WisdomPenalty = heroList[0].WisdomPenalty;
                    hero.Charisma = heroList[0].Charisma;
                    hero.CharismaBonus = heroList[0].CharismaBonus;
                    hero.CharismaPenalty = heroList[0].CharismaPenalty;
                    hero.WillPower = heroList[0].WillPower;
                    hero.WillPowerBonus = heroList[0].WillPowerBonus;
                    hero.WillPowerPenalty = heroList[0].WillPowerPenalty;
                    hero.Perception = heroList[0].Perception;
                    hero.PerceptionBonus = heroList[0].PerceptionBonus;
                    hero.PerceptionPenalty = heroList[0].PerceptionPenalty;
                    hero.Luck = heroList[0].Luck;
                    hero.LuckBonus = heroList[0].LuckBonus;
                    hero.LuckPenalty = heroList[0].LuckPenalty;
                    hero.Beauty = heroList[0].Beauty;
                    hero.BeautyBonus = heroList[0].BeautyBonus;
                    hero.BeautyPenalty = heroList[0].BeautyPenalty;
                    hero.Speed = heroList[0].Speed;
                    hero.SpeedBonus = heroList[0].SpeedBonus;
                    hero.SpeedPenalty = heroList[0].SpeedPenalty;
                    hero.Shield = heroList[0].Shield;
                    hero.ShieldBonus = heroList[0].ShieldBonus;
                    hero.ShieldPenalty = heroList[0].ShieldPenalty;
                    hero.OffHandDamage = heroList[0].OffHandDamage;
                    hero.OffHandDamageBonus = heroList[0].OffHandDamageBonus;
                    hero.OffHandDamagePenalty = heroList[0].OffHandDamagePenalty;
                    hero.Ally = heroList[0].Ally;
                    hero.Weapon = heroList[0].Weapon;
                    hero.OffHand = heroList[0].OffHand;
                    hero.Torso = heroList[0].Torso;
                    hero.Ring = heroList[0].Ring;
                    //companions
                }
            }
            return hero;
        }
    }
}