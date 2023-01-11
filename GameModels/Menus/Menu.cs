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
            string json = JsonSerializer.Serialize(hero);
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
                var heroList = JsonSerializer.Deserialize<Character>(text);
                if (heroList != null)
                {
                    //hero = heroList;
                    hero.Name = heroList.Name;
                    hero.Level = heroList.Level;
                    hero.Job = heroList.Job;
                    hero.CurrentXP = heroList.CurrentXP;
                    hero.MaxXP = heroList.MaxXP;
                    hero.CurrentHP = heroList.CurrentHP;
                    hero.MaxHP = heroList.MaxHP;
                    hero.HPBonus = heroList.HPBonus;
                    hero.HPPenalty = heroList.HPPenalty;
                    hero.HPRegen = heroList.HPRegen;
                    hero.HPRegenBonus = heroList.HPRegenBonus;
                    hero.HPRegenPenalty = heroList.HPRegenPenalty;
                    hero.CurrentMP = heroList.CurrentMP;
                    hero.MaxMP = heroList.MaxMP;
                    hero.MPBonus = heroList.MPBonus;
                    hero.MPPenalty = heroList.MPPenalty;
                    hero.MPRegen = heroList.MPRegen;
                    hero.MPRegenBonus = heroList.MPRegenBonus;
                    hero.MPRegenPenalty = heroList.MPRegenPenalty;
                    hero.CurrentSP = heroList.CurrentSP;
                    hero.MaxSP = heroList.MaxSP;
                    hero.SPBonus = heroList.SPBonus;
                    hero.SPPenalty = heroList.SPPenalty;
                    hero.SPRegen = heroList.SPRegen;
                    hero.SPRegenBonus = heroList.SPRegenBonus;
                    hero.SPRegenPenalty = heroList.SPRegenPenalty;
                    hero.Strength = heroList.Strength;
                    hero.StrengthBonus = heroList.ShieldBonus;
                    hero.StrengthPenalty = heroList.StrengthPenalty;
                    hero.Constitution = heroList.Constitution;
                    hero.ConstitutionBonus = heroList.ConstitutionBonus;
                    hero.ConstitutionPenalty = heroList.ConstitutionPenalty;
                    hero.Dexterity = heroList.Dexterity;
                    hero.DexterityBonus = heroList.DexterityBonus;
                    hero.DexterityPenalty = heroList.DexterityPenalty;
                    hero.Intelligence = heroList.Intelligence;
                    hero.IntelligenceBonus = heroList.IntelligenceBonus;
                    hero.IntelligencePenalty = heroList.IntelligencePenalty;
                    hero.Wisdom = heroList.Wisdom;
                    hero.WisdomBonus = heroList.WisdomBonus;
                    hero.WisdomPenalty = heroList.WisdomPenalty;
                    hero.Charisma = heroList.Charisma;
                    hero.CharismaBonus = heroList.CharismaBonus;
                    hero.CharismaPenalty = heroList.CharismaPenalty;
                    hero.WillPower = heroList.WillPower;
                    hero.WillPowerBonus = heroList.WillPowerBonus;
                    hero.WillPowerPenalty = heroList.WillPowerPenalty;
                    hero.Perception = heroList.Perception;
                    hero.PerceptionBonus = heroList.PerceptionBonus;
                    hero.PerceptionPenalty = heroList.PerceptionPenalty;
                    hero.Luck = heroList.Luck;
                    hero.LuckBonus = heroList.LuckBonus;
                    hero.LuckPenalty = heroList.LuckPenalty;
                    hero.Beauty = heroList.Beauty;
                    hero.BeautyBonus = heroList.BeautyBonus;
                    hero.BeautyPenalty = heroList.BeautyPenalty;
                    hero.Speed = heroList.Speed;
                    hero.SpeedBonus = heroList.SpeedBonus;
                    hero.SpeedPenalty = heroList.SpeedPenalty;
                    hero.Shield = heroList.Shield;
                    hero.ShieldBonus = heroList.ShieldBonus;
                    hero.ShieldPenalty = heroList.ShieldPenalty;
                    hero.OffHandDamage = heroList.OffHandDamage;
                    hero.OffHandDamageBonus = heroList.OffHandDamageBonus;
                    hero.OffHandDamagePenalty = heroList.OffHandDamagePenalty;
                    hero.Ally = heroList.Ally;
                    hero.Weapon = heroList.Weapon;
                    hero.OffHand = heroList.OffHand;
                    hero.Torso = heroList.Torso;
                    hero.Ring = heroList.Ring;
                    hero.Companions = heroList.Companions;
                    hero.Gold = heroList.Gold;
                    hero.Abilities = heroList.Abilities;
                    hero.Inventory = heroList.Inventory;
                    hero.SpellBook = heroList.SpellBook;
                    hero.Journal = heroList.Journal;
                    hero.SkillBook = heroList.SkillBook;
                    hero.CraftingRecipesKnown = heroList.CraftingRecipesKnown;
                    hero.Factions = heroList.Factions;
                    hero.Relationships = heroList.Relationships;
                    hero.Reputations = heroList.Reputations;
                    hero.Immunities = heroList.Immunities;
                    hero.Resistances = heroList.Resistances;
                    hero.Weaknesses = heroList.Weaknesses;
                    hero.Buffs = heroList.Buffs;
                    hero.DeBuffs = heroList.DeBuffs;
                    hero.Conditions = heroList.Conditions;
                    hero.ConditionImmunities = heroList.ConditionImmunities;
                    hero.ItemDrop = heroList.ItemDrop;
                }

            }
            return hero;
        }
    }
}