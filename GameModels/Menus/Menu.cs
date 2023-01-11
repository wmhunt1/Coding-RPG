using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

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
            string json = JsonConvert.SerializeObject(hero);
            File.WriteAllText($@"D:\{hero.Name}.json", json);
        }
        public Character LoadGame(Character hero)
        {
            Console.WriteLine("Character name...");
            string? name = Console.ReadLine();
            string text = File.ReadAllText($@"D:\{name}.json");
            if (text != null)
            {
                var deserializedHero = JsonConvert.DeserializeObject<Character>(text);
                if (deserializedHero != null)
                {
                    hero.Name = deserializedHero.Name;
                    hero.Level = deserializedHero.Level;
                    hero.Job = deserializedHero.Job;
                    hero.CurrentXP = deserializedHero.CurrentXP;
                    hero.MaxXP = deserializedHero.MaxXP;
                    hero.CurrentHP = deserializedHero.CurrentHP;
                    hero.MaxHP = deserializedHero.MaxHP;
                    hero.HPBonus = deserializedHero.HPBonus;
                    hero.HPPenalty = deserializedHero.HPPenalty;
                    hero.HPRegen = deserializedHero.HPRegen;
                    hero.HPRegenBonus = deserializedHero.HPRegenBonus;
                    hero.HPRegenPenalty = deserializedHero.HPRegenPenalty;
                    hero.CurrentMP = deserializedHero.CurrentMP;
                    hero.MaxMP = deserializedHero.MaxMP;
                    hero.MPBonus = deserializedHero.MPBonus;
                    hero.MPPenalty = deserializedHero.MPPenalty;
                    hero.MPRegen = deserializedHero.MPRegen;
                    hero.MPRegenBonus = deserializedHero.MPRegenBonus;
                    hero.MPRegenPenalty = deserializedHero.MPRegenPenalty;
                    hero.CurrentSP = deserializedHero.CurrentSP;
                    hero.MaxSP = deserializedHero.MaxSP;
                    hero.SPBonus = deserializedHero.SPBonus;
                    hero.SPPenalty = deserializedHero.SPPenalty;
                    hero.SPRegen = deserializedHero.SPRegen;
                    hero.SPRegenBonus = deserializedHero.SPRegenBonus;
                    hero.SPRegenPenalty = deserializedHero.SPRegenPenalty;
                    hero.Strength = deserializedHero.Strength;
                    hero.StrengthBonus = deserializedHero.ShieldBonus;
                    hero.StrengthPenalty = deserializedHero.StrengthPenalty;
                    hero.Constitution = deserializedHero.Constitution;
                    hero.ConstitutionBonus = deserializedHero.ConstitutionBonus;
                    hero.ConstitutionPenalty = deserializedHero.ConstitutionPenalty;
                    hero.Dexterity = deserializedHero.Dexterity;
                    hero.DexterityBonus = deserializedHero.DexterityBonus;
                    hero.DexterityPenalty = deserializedHero.DexterityPenalty;
                    hero.Intelligence = deserializedHero.Intelligence;
                    hero.IntelligenceBonus = deserializedHero.IntelligenceBonus;
                    hero.IntelligencePenalty = deserializedHero.IntelligencePenalty;
                    hero.Wisdom = deserializedHero.Wisdom;
                    hero.WisdomBonus = deserializedHero.WisdomBonus;
                    hero.WisdomPenalty = deserializedHero.WisdomPenalty;
                    hero.Charisma = deserializedHero.Charisma;
                    hero.CharismaBonus = deserializedHero.CharismaBonus;
                    hero.CharismaPenalty = deserializedHero.CharismaPenalty;
                    hero.WillPower = deserializedHero.WillPower;
                    hero.WillPowerBonus = deserializedHero.WillPowerBonus;
                    hero.WillPowerPenalty = deserializedHero.WillPowerPenalty;
                    hero.Perception = deserializedHero.Perception;
                    hero.PerceptionBonus = deserializedHero.PerceptionBonus;
                    hero.PerceptionPenalty = deserializedHero.PerceptionPenalty;
                    hero.Luck = deserializedHero.Luck;
                    hero.LuckBonus = deserializedHero.LuckBonus;
                    hero.LuckPenalty = deserializedHero.LuckPenalty;
                    hero.Beauty = deserializedHero.Beauty;
                    hero.BeautyBonus = deserializedHero.BeautyBonus;
                    hero.BeautyPenalty = deserializedHero.BeautyPenalty;
                    hero.Speed = deserializedHero.Speed;
                    hero.SpeedBonus = deserializedHero.SpeedBonus;
                    hero.SpeedPenalty = deserializedHero.SpeedPenalty;
                    hero.Shield = deserializedHero.Shield;
                    hero.ShieldBonus = deserializedHero.ShieldBonus;
                    hero.ShieldPenalty = deserializedHero.ShieldPenalty;
                    hero.OffHandDamage = deserializedHero.OffHandDamage;
                    hero.OffHandDamageBonus = deserializedHero.OffHandDamageBonus;
                    hero.OffHandDamagePenalty = deserializedHero.OffHandDamagePenalty;
                    hero.Ally = deserializedHero.Ally;
                    hero.Weapon = deserializedHero.Weapon;
                    hero.OffHand = deserializedHero.OffHand;
                    hero.Torso = deserializedHero.Torso;
                    hero.Ring = deserializedHero.Ring;
                    hero.Companions = deserializedHero.Companions;
                    hero.Gold = deserializedHero.Gold;
                    hero.Abilities = deserializedHero.Abilities;
                    hero.Inventory = deserializedHero.Inventory;
                    hero.SpellBook = deserializedHero.SpellBook;
                    hero.Journal = deserializedHero.Journal;
                    hero.SkillBook = deserializedHero.SkillBook;
                    hero.CraftingRecipesKnown = deserializedHero.CraftingRecipesKnown;
                    hero.Factions = deserializedHero.Factions;
                    hero.Relationships = deserializedHero.Relationships;
                    hero.Reputations = deserializedHero.Reputations;
                    hero.Immunities = deserializedHero.Immunities;
                    hero.Resistances = deserializedHero.Resistances;
                    hero.Weaknesses = deserializedHero.Weaknesses;
                    hero.Buffs = deserializedHero.Buffs;
                    hero.DeBuffs = deserializedHero.DeBuffs;
                    hero.Conditions = deserializedHero.Conditions;
                    hero.ConditionImmunities = deserializedHero.ConditionImmunities;
                    hero.ItemDrop = deserializedHero.ItemDrop;
                }

            }
            return hero;
        }
    }
}