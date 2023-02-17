using System.Text.Json.Serialization;
namespace GameModels
{
    public class CharacterSheetMenu : Menu
    {
        public void DisplayCharacterInfo(Character hero, Character inventory)
        {
            Console.WriteLine("==== Character Info ====");
            Console.WriteLine($"{hero.Name} - {hero.Job.Name}");
            Console.WriteLine($"Level: {hero.Level} EXP {hero.CurrentXP}/{hero.MaxXP}");
            Console.WriteLine($"HP: {hero.BaseStats.HP.Current}/{hero.BaseStats.HP.Max}({hero.BaseStats.HP.Regen}) MP: {hero.BaseStats.MP.Current}/{hero.BaseStats.MP.Max}({hero.BaseStats.MP.Regen}) SP: {hero.BaseStats.SP.Current}/{hero.BaseStats.SP.Max}({hero.BaseStats.SP.Regen})");
            Console.WriteLine("==== Attributes =====");
            Console.WriteLine($"STR: {hero.Attributes.Strength.Value + hero.Attributes.Strength.ValueBonus - hero.Attributes.Strength.ValuePenalty}(+{hero.Attributes.Strength.ValueBonus})(-{hero.Attributes.Strength.ValuePenalty}) CON: {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.ValueBonus - hero.Attributes.Constitution.ValuePenalty}(+{hero.Attributes.Constitution.ValueBonus})(-{hero.Attributes.Constitution.ValuePenalty} DEX: {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.ValueBonus - hero.Attributes.Dexterity.ValuePenalty}(+{hero.Attributes.Dexterity.ValueBonus})(-{hero.Attributes.Dexterity.ValuePenalty}) SPD: {hero.Attributes.Speed.Value + hero.Attributes.Speed.ValueBonus - hero.Attributes.Speed.ValuePenalty}(+{hero.Attributes.Speed.ValueBonus})(-{hero.Attributes.Speed.ValuePenalty})");
            Console.WriteLine($"INT: {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.ValueBonus - hero.Attributes.Intelligence.ValuePenalty}(+{hero.Attributes.Intelligence.ValueBonus})(-{hero.Attributes.Intelligence.ValuePenalty}) WIS: {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.ValueBonus - hero.Attributes.Wisdom.ValuePenalty}(+{hero.Attributes.Wisdom.ValueBonus})(-{hero.Attributes.Wisdom.ValuePenalty} CHA: {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.ValueBonus - hero.Attributes.Charisma.ValuePenalty}(+{hero.Attributes.Charisma.ValueBonus})(-{hero.Attributes.Charisma.ValuePenalty})");
            Console.WriteLine($"WIL: {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.ValueBonus - hero.Attributes.WillPower.ValuePenalty}(+{hero.Attributes.WillPower.ValueBonus})(-{hero.Attributes.WillPower.ValuePenalty}) PER: {hero.Attributes.Perception.Value + hero.Attributes.Perception.ValueBonus - hero.Attributes.Perception.ValuePenalty}(+{hero.Attributes.Perception.ValueBonus})(-{hero.Attributes.Perception.ValuePenalty} LCK: {hero.Attributes.Luck.Value + hero.Attributes.Luck.ValueBonus - hero.Attributes.Luck.ValuePenalty}(+{hero.Attributes.Luck.ValueBonus})(-{hero.Attributes.Luck.ValuePenalty}) Bea: {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.ValueBonus - hero.Attributes.Beauty.ValuePenalty}(+{hero.Attributes.Beauty.ValueBonus})(-{hero.Attributes.Beauty.ValuePenalty})");
            AnyKey();
        }
        public void DisplayEquipment(Character hero, Character inventory)
        {
            Console.WriteLine($"{hero.Name}'s Equipment");
            Console.WriteLine($"[1] Weapon: {hero.Equipment.Weapon.Name} - {hero.Equipment.Weapon.Equipment.WeaponDmg} {hero.Equipment.Weapon.Equipment.WeaponDmgType.Name} Damage");
            if (hero.Equipment.OffHand is Shield)
            {
                var shield = (Shield)hero.Equipment.OffHand;
                Console.WriteLine($"[2] OffHand : {hero.Equipment.OffHand.Name} - Shield Value {shield.ShieldValue}");
            }
            else if (hero.Equipment.OffHand is OffHandWeapon)
            {
                var offHand = (OffHandWeapon)hero.Equipment.OffHand;
                Console.WriteLine($"[2] OffHand : {hero.Equipment.OffHand.Name} - Damage Value {offHand.Equipment.OffHandDamageValue}");
            }
            else
            {
                Console.WriteLine($"[2] OffHand : {hero.Equipment.OffHand.Name}");
            }
            Console.WriteLine($"[3] Head: {hero.Equipment.Head.Name} - {hero.Equipment.Head.Protection} {hero.Equipment.Head.ProtectionType.Name} Protection");
            Console.WriteLine($"[4] Torso: {hero.Equipment.Torso.Name} - {hero.Equipment.Torso.Protection} {hero.Equipment.Torso.ProtectionType.Name} Protection");
            Console.WriteLine($"[5] Legs: {hero.Equipment.Legs.Name} - {hero.Equipment.Legs.Protection} {hero.Equipment.Legs.ProtectionType.Name} Protection");
            Console.WriteLine($"[6] Hands: {hero.Equipment.Hands.Name} - {hero.Equipment.Hands.Protection} {hero.Equipment.Hands.ProtectionType.Name} Protection");
            Console.WriteLine($"[7] Feet: {hero.Equipment.Feet.Name} - {hero.Equipment.Feet.Protection} {hero.Equipment.Feet.ProtectionType.Name} Protection");
            Console.WriteLine($"[8] Neck: {hero.Equipment.Neck.Name}");
            Console.WriteLine($"[9] Ring: {hero.Equipment.Ring.Name}");
            Console.WriteLine($"[10] Back: {hero.Equipment.Back.Name}");
            Console.WriteLine("[0] Leave Equipment");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    hero.Equipment.Weapon.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "2":
                    hero.Equipment.OffHand.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "3":
                    hero.Equipment.Head.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "4":
                    hero.Equipment.Torso.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "5":
                    hero.Equipment.Legs.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "6":
                    hero.Equipment.Hands.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "7":
                    hero.Equipment.Feet.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "8":
                    hero.Equipment.Neck.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "9":
                    hero.Equipment.Ring.UnEquipItemFromEquipment(hero, inventory);
                    break;
                case "10":
                    hero.Equipment.Back.UnEquipItemFromEquipment(hero, inventory);
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
            if (hero.BaseStats.SP.ellBook.Count > 0)
            {
                for (int spell = 0; spell < hero.BaseStats.SP.ellBook.Count; spell++)
                {
                    Console.WriteLine($"{hero.BaseStats.SP.ellBook[spell].Name}");
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
                List<Skill> sortedSkills = hero.SkillBook.OrderBy(x => x.Name).ToList();
                for (int skill = 0; skill < sortedSkills.Count; skill++)
                {
                    Console.WriteLine($"{sortedSkills[skill].Name} - LV: {sortedSkills[skill].SkillLevel} XP:  {sortedSkills[skill].CurrentSkillXP}/ {sortedSkills[skill].MaxSkillXP}");
                }
            }
            AnyKey();
        }
        public void DisplayParty(Character hero, Character inventory)
        {
            Console.WriteLine($"{hero.Name}'s Companions");
            if (hero.Companions.Count > 0)
            {
                List<Character> sortedCompanions = hero.Companions.OrderBy(x => x.Name).ToList();
                Console.WriteLine("View Companion Information");
                for (int comp = 0; comp < sortedCompanions.Count; comp++)
                {
                    Console.WriteLine($"[{comp + 1}] Name : {sortedCompanions[comp].Name} - Level: {sortedCompanions[comp].Level}");
                }
                Console.WriteLine("[0] Leave");
                string? targetInput = Console.ReadLine();
                try
                {
                    if (targetInput != null || targetInput != "")
                    {
                        int target;
                        int.TryParse(targetInput, out target);
                        if (target > 0 && target <= hero.Companions.Count)
                        {
                            CharacterSheetMenu companionMenu = new CharacterSheetMenu();
                            companionMenu.DisplayMenu(sortedCompanions[target - 1], inventory);
                        }
                    }
                    else
                    {

                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
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
                Console.WriteLine("[1] View Character Info");
                if (hero.Job is not Pet)
                {
                    Console.WriteLine("[2] View Equipment");
                    Console.WriteLine("[3] View Inventory");
                }
                Console.WriteLine("[4] View Abilities");
                if (hero.Job is not Pet)
                {
                    Console.WriteLine("[5] View Spellbook");
                    Console.WriteLine("[6] View Journal");
                    Console.WriteLine("[7] View Party");
                    Console.WriteLine("[8] View Factions");
                    Console.WriteLine("[9] View Skills");
                }
                Console.WriteLine("[0] Leave Sheet");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        DisplayCharacterInfo(hero, inventory);
                        break;
                    case "2":
                        if (hero.Job is not Pet)
                        {
                            DisplayEquipment(hero, inventory);
                        }
                        break;
                    case "3":
                        if (hero.Job is not Pet)
                        {
                            DisplayInventory(hero, inventory);
                        }
                        break;
                    case "4":
                        DisplayAbilities(hero);
                        break;
                    case "5":
                        if (hero.Job is not Pet)
                        {
                            DisplaySpellBook(hero);
                        }
                        break;
                    case "6":
                        if (hero.Job is not Pet)
                        {
                            DisplayJournal(hero);
                        }
                        break;
                    case "7":
                        if (hero.Job is not Pet)
                        {
                            DisplayParty(hero, inventory);
                        }
                        break;
                    case "8":
                        if (hero.Job is not Pet)
                        {
                            DisplayFactions(hero);
                        }
                        break;
                    case "9":
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