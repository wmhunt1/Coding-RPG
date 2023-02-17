using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace GameModels
{
    public class Menu
    {
        public virtual void DisplayMenu(Character hero, Character inventory)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = false;
            }
        }
        public void ShowTitle()
        {
            Console.WriteLine("========== Coding RPG ==========");
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
                    hero.BaseStats.HP.Current = deserializedHero.BaseStats.HP.Current;
                    hero.BaseStats.HP.Max = deserializedHero.BaseStats.HP.Max;
                    hero.BaseStats.HP.Bonus = deserializedHero.BaseStats.HP.Bonus;
                    hero.BaseStats.HP.Penalty = deserializedHero.BaseStats.HP.Penalty;
                    hero.BaseStats.HP.Regen = deserializedHero.BaseStats.HP.Regen;
                    hero.BaseStats.HP.RegenBonus = deserializedHero.BaseStats.HP.RegenBonus;
                    hero.BaseStats.HP.RegenPenalty = deserializedHero.BaseStats.HP.RegenPenalty;
                    hero.BaseStats.MP.Current = deserializedHero.BaseStats.MP.Current;
                    hero.BaseStats.MP.Max = deserializedHero.BaseStats.MP.Max;
                    hero.BaseStats.MP.Bonus = deserializedHero.BaseStats.MP.Bonus;
                    hero.BaseStats.MP.Penalty = deserializedHero.BaseStats.MP.Penalty;
                    hero.BaseStats.MP.Regen = deserializedHero.BaseStats.MP.Regen;
                    hero.BaseStats.MP.RegenBonus = deserializedHero.BaseStats.MP.RegenBonus;
                    hero.BaseStats.MP.RegenPenalty = deserializedHero.BaseStats.MP.RegenPenalty;
                    hero.BaseStats.SP.Current = deserializedHero.BaseStats.SP.Current;
                    hero.BaseStats.SP.Max = deserializedHero.BaseStats.SP.Max;
                    hero.BaseStats.SP.Bonus = deserializedHero.BaseStats.SP.Bonus;
                    hero.BaseStats.SP.Penalty = deserializedHero.BaseStats.SP.Penalty;
                    hero.BaseStats.SP.Regen = deserializedHero.BaseStats.SP.Regen;
                    hero.BaseStats.SP.RegenBonus = deserializedHero.BaseStats.SP.RegenBonus;
                    hero.BaseStats.SP.RegenPenalty = deserializedHero.BaseStats.SP.RegenPenalty;
                    hero.Attributes.Strength.Value = deserializedHero.Attributes.Strength.Value;
                    hero.Attributes.Strength.ValueBonus = deserializedHero.BaseStats.Defense.Bonus;
                    hero.Attributes.Strength.ValuePenalty = deserializedHero.Attributes.Strength.ValuePenalty;
                    hero.Attributes.Constitution.Value = deserializedHero.Attributes.Constitution.Value;
                    hero.Attributes.Constitution.ValueBonus = deserializedHero.Attributes.Constitution.ValueBonus;
                    hero.Attributes.Constitution.ValuePenalty = deserializedHero.Attributes.Constitution.ValuePenalty;
                    hero.Attributes.Dexterity.Value = deserializedHero.Attributes.Dexterity.Value;
                    hero.Attributes.Dexterity.ValueBonus = deserializedHero.Attributes.Dexterity.ValueBonus;
                    hero.Attributes.Dexterity.ValuePenalty = deserializedHero.Attributes.Dexterity.ValuePenalty;
                    hero.Attributes.Intelligence.Value = deserializedHero.Attributes.Intelligence.Value;
                    hero.Attributes.Intelligence.ValueBonus = deserializedHero.Attributes.Intelligence.ValueBonus;
                    hero.Attributes.Intelligence.ValuePenalty = deserializedHero.Attributes.Intelligence.ValuePenalty;
                    hero.Attributes.Wisdom.Value = deserializedHero.Attributes.Wisdom.Value;
                    hero.Attributes.Wisdom.ValueBonus = deserializedHero.Attributes.Wisdom.ValueBonus;
                    hero.Attributes.Wisdom.ValuePenalty = deserializedHero.Attributes.Wisdom.ValuePenalty;
                    hero.Attributes.Charisma.Value = deserializedHero.Attributes.Charisma.Value;
                    hero.Attributes.Charisma.ValueBonus = deserializedHero.Attributes.Charisma.ValueBonus;
                    hero.Attributes.Charisma.ValuePenalty = deserializedHero.Attributes.Charisma.ValuePenalty;
                    hero.Attributes.WillPower.Value = deserializedHero.Attributes.WillPower.Value;
                    hero.Attributes.WillPower.ValueBonus = deserializedHero.Attributes.WillPower.ValueBonus;
                    hero.Attributes.WillPower.ValuePenalty = deserializedHero.Attributes.WillPower.ValuePenalty;
                    hero.Attributes.Perception.Value = deserializedHero.Attributes.Perception.Value;
                    hero.Attributes.Perception.ValueBonus = deserializedHero.Attributes.Perception.ValueBonus;
                    hero.Attributes.Perception.ValuePenalty = deserializedHero.Attributes.Perception.ValuePenalty;
                    hero.Attributes.Luck.Value = deserializedHero.Attributes.Luck.Value;
                    hero.Attributes.Luck.ValueBonus = deserializedHero.Attributes.Luck.ValueBonus;
                    hero.Attributes.Luck.ValuePenalty = deserializedHero.Attributes.Luck.ValuePenalty;
                    hero.Attributes.Beauty.Value = deserializedHero.Attributes.Beauty.Value;
                    hero.Attributes.Beauty.ValueBonus = deserializedHero.Attributes.Beauty.ValueBonus;
                    hero.Attributes.Beauty.ValuePenalty = deserializedHero.Attributes.Beauty.ValuePenalty;
                    hero.Attributes.Speed.Value = deserializedHero.Attributes.Speed.Value;
                    hero.Attributes.Speed.ValueBonus = deserializedHero.Attributes.Speed.ValueBonus;
                    hero.Attributes.Speed.ValuePenalty = deserializedHero.Attributes.Speed.ValuePenalty;
                    hero.Shield = deserializedHero.Shield;
                    hero.BaseStats.Defense.Bonus = deserializedHero.BaseStats.Defense.Bonus;
                    hero.BaseStats.Defense.Penalty = deserializedHero.BaseStats.Defense.Penalty;
                    hero.Equipment.OffHandDamage = deserializedHero.Equipment.OffHandDamage;
                    hero.Equipment.OffHandDamageBonus = deserializedHero.Equipment.OffHandDamageBonus;
                    hero.Equipment.OffHandDamagePenalty = deserializedHero.Equipment.OffHandDamagePenalty;
                    hero.Ally = deserializedHero.Ally;
                    hero.Equipment.Weapon = deserializedHero.Equipment.Weapon;
                    hero.Equipment.OffHand = deserializedHero.Equipment.OffHand;
                    hero.Equipment.Torso = deserializedHero.Equipment.Torso;
                    hero.Equipment.Ring = deserializedHero.Equipment.Ring;
                    hero.Companions = deserializedHero.Companions;
                    hero.Gold = deserializedHero.Gold;
                    hero.Abilities = deserializedHero.Abilities;
                    hero.Inventory = deserializedHero.Inventory;
                    hero.BaseStats.SP.ellBook = deserializedHero.BaseStats.SP.ellBook;
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
                    hero.ConditionModifiers.Immunities = deserializedHero.ConditionModifiers.Immunities;
                    hero.ItemDrop = deserializedHero.ItemDrop;
                }

            }
            return hero;
        }
    }
}