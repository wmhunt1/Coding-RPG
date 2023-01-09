namespace GameModels
{
    public class CharacterSheetMenu : Menu
    {
        public void DisplayEquipment(Character hero)
        {
            Console.WriteLine($"{hero.Name}'s Equipment");
            Console.WriteLine($"[1] Weapon: {hero.Weapon.Name} - {hero.Weapon.WeaponDmg} {hero.Weapon.WeaponDmgType.Name} Damage");
            Console.WriteLine($"[2] Armor: {hero.Torso.Name} - {hero.Torso.Protection} {hero.Torso.ProtectionType} Protection");
            Console.WriteLine($"[3] Ring: {hero.Ring}");
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
                case "3":
                    hero.Ring.UnEquipItemFromEquipment(hero);
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
                    int selection;
                    bool parseSucess = Int32.TryParse(selectionInput, out selection);
                    if (parseSucess == true && selection > 0 && selection <= equipable.Count)
                    {
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
                if (hero.Inventory[item] is Equipable && hero.Inventory[item].Quantity > 0)
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
        public void DisplayParty(Character hero)
        {
            Console.WriteLine($"{hero.Name}'s Companions");
            if (hero.Companions.Count > 0)
            {
                for (int comp = 0; comp < hero.Companions.Count; comp++)
                {
                    Console.WriteLine($"Name : {hero.Companions[comp].Name} - Level: {hero.Companions[comp].Level}");
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
        public override void DisplayMenu(Character hero)
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
                Console.WriteLine("[1] View Equipment");
                Console.WriteLine("[2] View Inventory");
                Console.WriteLine("[3] View Abilities");
                Console.WriteLine("[4] View Spellbook");
                Console.WriteLine("[5] View Journal");
                Console.WriteLine("[6] View Party");
                Console.WriteLine("[7] View Factions");
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
                    case "5":
                        DisplayJournal(hero);
                        break;
                    case "6":
                        DisplayParty(hero);
                        break;
                    case "7":
                        DisplayFactions(hero);
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