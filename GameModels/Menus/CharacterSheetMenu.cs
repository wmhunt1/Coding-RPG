using System.Text.Json.Serialization;
namespace GameModels
{
    public class CharacterSheetMenu : Menu
    {
        public void DisplayEquipment(Character hero, Character inventory)
        {
            Console.WriteLine($"{hero.Name}'s Equipment");
            Console.WriteLine($"[1] Weapon: {hero.Weapon.Name} - {hero.Weapon.WeaponDmg} {hero.Weapon.WeaponDmgType.Name} Damage");
            if (hero.OffHand is Shield)
            {
                var shield = (Shield)hero.OffHand;
                Console.WriteLine($"[2] OffHand : {hero.OffHand.Name} - Shield Value {shield.ShieldValue}");
            }
            else if (hero.OffHand is OffHandWeapon)
            {
                var offHand = (OffHandWeapon)hero.OffHand;
                Console.WriteLine($"[2] OffHand : {hero.OffHand.Name} - Damage Value {offHand.OffHandDamageValue}");
            }
            else
            {
                Console.WriteLine($"[2] OffHand : {hero.OffHand.Name}");
            }
            Console.WriteLine($"[3] Armor: {hero.Torso.Name} - {hero.Torso.Protection} {hero.Torso.ProtectionType} Protection");
            Console.WriteLine($"[4] Ring: {hero.Ring.Name}");
            Console.WriteLine("[0] Leave Equipment");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    hero.Weapon.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "2":
                    hero.OffHand.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "3":
                    hero.Torso.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "4":
                    hero.Ring.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "0":
                    break;
                default:
                    break;
            }
            AnyKey();
        }
        public void EquipFromDisplayInventory(Character hero, List<Equipable> equipable, Character inventory)
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
                    int selection;
                    bool parseSucess = Int32.TryParse(selectionInput, out selection);
                    if (parseSucess == true && selection > 0 && selection <= equipable.Count)
                    {
                        equipable[selection - 1].EquipItemFromInventory(hero, inventory);
                    }
                    break;
                case "N":
                case "n":
                    break;
                default:
                    break;
            }
        }
        public void DisplayInventory(Character hero, Character inventory)
        {
            List<Equipable> equipable = new List<Equipable>();
            Console.WriteLine($"{inventory.Name}'s {inventory.Gold} GP");
            for (int item = 0; item < inventory.Inventory.Count; item++)
            {
                if (inventory.Inventory[item].Quantity > 0)
                {
                    Console.WriteLine($"{inventory.Inventory[item].Name} X {inventory.Inventory[item].Quantity}");
                }
                if (inventory.Inventory[item] is Equipable && inventory.Inventory[item].Quantity > 0)
                {
                    var equipableItem = (Equipable)inventory.Inventory[item];
                    equipable.Add(equipableItem);
                }
            }
            if (equipable.Count > 0)
            {
                EquipFromDisplayInventory(hero, equipable, inventory);
            }
            AnyKey();
        }
        public void DisplayAbilities(Character hero)
        {
            Console.WriteLine("Abilities");
            if (hero.Abilities.Count > 0)
            {
                for (int ability = 0; ability < hero.Abilities.Count; ability++)
                {
                    Console.WriteLine($"{hero.Abilities[ability].Name}");
                }
            }
            AnyKey();
        }
        public void DisplaySpellBook(Character hero)
        {
            Console.WriteLine("SpellBook");
            if (hero.SpellBook.Count > 0)
            {
                for (int spell = 0; spell < hero.SpellBook.Count; spell++)
                {
                    Console.WriteLine($"{hero.SpellBook[spell].Name}");
                }
            }
            AnyKey();
        }
        public void DisplayJournal(Character hero)
        {
            Console.WriteLine("Journal");
            if (hero.Journal.Count > 0)
            {
                for (int quest = 0; quest < hero.Journal.Count; quest++)
                {
                    if (hero.Journal[quest].QuestStatus != "Finished")
                    {
                        hero.Journal[quest].JournalEntry(hero);
                    }
                }
            }
            AnyKey();
        }
        public void DisplaySkills(Character hero)
        {
            if (hero.SkillBook.Count > 0)
            {
                Console.WriteLine("Skills");
                for (int skill = 0; skill < hero.SkillBook.Count; skill++)
                {
                    Console.WriteLine($"{hero.SkillBook[skill].Name} - LV: {hero.SkillBook[skill].SkillLevel} XP:  {hero.SkillBook[skill].CurrentSkillXP}/ {hero.SkillBook[skill].MaxSkillXP}");
                }
            }
            AnyKey();
        }
        public void DisplayParty(Character hero, Character inventory)
        {
            Console.WriteLine($"{hero.Name}'s Companions");
            if (hero.Companions.Count > 0)
            {
                Console.WriteLine("View Companion Information");
                for (int comp = 0; comp < hero.Companions.Count; comp++)
                {
                    Console.WriteLine($"[{comp + 1}] Name : {hero.Companions[comp].Name} - Level: {hero.Companions[comp].Level}");
                }
                string? targetInput = Console.ReadLine();
                if (targetInput != null)
                {
                    int target = Int32.Parse(targetInput);
                    if (target > 0 && target <= hero.Companions.Count)
                    {
                        CharacterSheetMenu companionMenu = new CharacterSheetMenu();
                        companionMenu.DisplayMenu(hero.Companions[target - 1], inventory);
                    }
                }
            }
            AnyKey();
        }
        public void DisplayFactions(Character hero)
        {
            Console.WriteLine($"{hero.Name}'s Factions");
            if (hero.Factions.Count > 0)
            {
                for (int fact = 0; fact < hero.Factions.Count; fact++)
                {
                    Console.WriteLine($"Name : {hero.Factions[fact].Name} - Rank: {hero.Factions[fact].CurrentRankName}");
                }
            }
            AnyKey();
        }
        public override void DisplayMenu(Character hero, Character inventory)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine($"===== {hero.Name}'s Character Sheet =====");
                Console.WriteLine($"Level: {hero.Level} EXP {hero.CurrentXP}/{hero.MaxXP}");
                Console.WriteLine($"HP: {hero.CurrentHP}/{hero.MaxHP}({hero.HPRegen}) MP: {hero.CurrentMP}/{hero.MaxMP}({hero.MPRegen}) SP: {hero.CurrentSP}/{hero.MaxSP}({hero.SPRegen})");
                Console.WriteLine("==== Attributes =====");
                Console.WriteLine($"STR: {hero.Strength + hero.StrengthBonus - hero.StrengthPenalty}(+{hero.StrengthBonus})(-{hero.StrengthPenalty}) CON: {hero.Constitution + hero.ConstitutionBonus - hero.ConstitutionPenalty}(+{hero.ConstitutionBonus})(-{hero.ConstitutionPenalty} DEX: {hero.Dexterity + hero.DexterityBonus - hero.DexterityPenalty}(+{hero.DexterityBonus})(-{hero.DexterityPenalty}) SPD: {hero.Speed + hero.SpeedBonus - hero.SpeedPenalty}(+{hero.SpeedBonus})(-{hero.SpeedPenalty})");
                Console.WriteLine($"INT: {hero.Intelligence + hero.IntelligenceBonus - hero.IntelligencePenalty}(+{hero.IntelligenceBonus})(-{hero.IntelligencePenalty}) WIS: {hero.Wisdom + hero.WisdomBonus - hero.WisdomPenalty}(+{hero.WisdomBonus})(-{hero.WisdomPenalty} CHA: {hero.Charisma + hero.CharismaBonus - hero.CharismaPenalty}(+{hero.CharismaBonus})(-{hero.CharismaPenalty})");
                Console.WriteLine($"WIL: {hero.WillPower + hero.WillPowerBonus - hero.WillPowerPenalty}(+{hero.WillPowerBonus})(-{hero.WillPowerPenalty}) PER: {hero.Perception + hero.PerceptionBonus - hero.PerceptionPenalty}(+{hero.PerceptionBonus})(-{hero.PerceptionPenalty} LCK: {hero.Luck + hero.LuckBonus - hero.LuckPenalty}(+{hero.LuckBonus})(-{hero.LuckPenalty}) Bea: {hero.Beauty + hero.BeautyBonus - hero.BeautyPenalty}(+{hero.BeautyBonus})(-{hero.BeautyPenalty})");
                AnyKey();
                if (hero.Job is not Pet)
                {
                    Console.WriteLine("[1] View Equipment");
                    Console.WriteLine("[2] View Inventory");
                }
                Console.WriteLine("[3] View Abilities");
                if (hero.Job is not Pet)
                {
                    Console.WriteLine("[4] View Spellbook");
                    Console.WriteLine("[5] View Journal");
                    Console.WriteLine("[6] View Party");
                    Console.WriteLine("[7] View Factions");
                    Console.WriteLine("[8] View Skills");
                }
                Console.WriteLine("[0] Leave Sheet");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        if (hero.Job is not Pet)
                        {
                            DisplayEquipment(hero, inventory);
                        }
                        break;
                    case "2":
                        if (hero.Job is not Pet)
                        {
                            DisplayInventory(hero, inventory);
                        }
                        break;
                    case "3":

                        DisplayAbilities(hero);
                        break;
                    case "4":
                        if (hero.Job is not Pet)
                        {
                            DisplaySpellBook(hero);
                        }
                        break;
                    case "5":
                        if (hero.Job is not Pet)
                        {
                            DisplayJournal(hero);
                        }
                        break;
                    case "6":
                        if (hero.Job is not Pet)
                        {
                            DisplayParty(hero, inventory);
                        }
                        break;
                    case "7":
                        if (hero.Job is not Pet)
                        {
                            DisplayFactions(hero);
                        }
                        break;
                    case "8":
                        if (hero.Job is not Pet)
                        {
                            DisplaySkills(hero);
                        }
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