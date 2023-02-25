import { AddToCharacterLog } from "./CharacterScripts";
import { BareBack, BareFeet, BareFinger, BareFist, BareHands, BareHead, BareLegs, BareNeck, BareTorso, EmptyOffHand } from "../Database/ItemsDB"
import { FindSkillInSkillBook } from "./SkillScripts";
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
export function FindItemInInventory(inventory, item) {
    var index = null
    if (inventory.find(x => x.Name === item.Name)) {
        index = inventory.findIndex(x => x.Name === item.Name);
    }
    return index
}
export function FindItemInInventoryBySubType(inventory, item) {
    var index = null
    if (inventory.find(x => x.SubType === item.SubType)) {
        index = inventory.findIndex(x => x.SubType === item.SubType);
    }
    return index
}
export function AddItemToInventory(char, inventory, item, quantity, log) {
    if (inventory.find(x => x.Name === item.Name)) {
        var itemIndex = FindItemInInventory(inventory, item)
        if (itemIndex !== null) {
            var updateItem = inventory[itemIndex]
            updateItem.Quantity += quantity
            inventory[itemIndex] = updateItem;
        }
    }
    else {
        item.Quantity = quantity;
        inventory.push(item);
    }
    AddToCharacterLog(log, "Adding " + item.Name + " X " + quantity + " to " + log.Name + "'s Inventory");
    char.Inventory = inventory;
}
export function AddItemToBank(char, inventory, item, quantity) {
    if (inventory.find(x => x.Name === item.Name)) {
        var itemIndex = FindItemInInventory(inventory, item)
        if (itemIndex !== null) {
            var updateItem = inventory[itemIndex]
            updateItem.Quantity += quantity
            inventory[itemIndex] = updateItem;
        }
    }
    else {
        item.Quantity = quantity;
        inventory.push(item);
    }
    AddToCharacterLog(char, "Adding " + item.Name + " X " + quantity + " to " + char.Name + "'s Bank");
    char.Bank = inventory;
}
export function RemoveItemFromInventory(char, inventory, item, quantity, log) {
    var findItem = inventory.findIndex(x => x.Name === item.Name);
    var newItem = inventory[findItem];
    newItem.Quantity -= quantity
    inventory[findItem] = newItem;
    if (inventory[findItem].Quantity <= 0) {
        inventory.remove(inventory[findItem]);
    }
    AddToCharacterLog(log, "Removing " + item.Name + " X " + quantity + " from " + char.Name + "'s Inventory");
    char.Inventory = inventory;
}
export function RemoveItemFromBank(char, inventory, item, quantity) {
    var findItem = inventory.findIndex(x => x.Name === item.Name);
    var newItem = inventory[findItem];
    newItem.Quantity -= quantity
    inventory[findItem] = newItem;
    if (inventory[findItem].Quantity === 0) {
        inventory.remove(inventory[findItem]);
    }
    AddToCharacterLog(char, "Withdrawing " + item.Name + " X " + quantity + " from " + char.Name + "'s Bank");
    char.Bank = inventory;
}
export function UnEquip(char, inventory, item, log) {
    if (item.Name !== "None" && item.Name !== "Empty" && item.Name !== "Fist") {
        AddToCharacterLog(log, char.Name + " UnEquipped " + item.Name)
        AddItemToInventory(char, inventory, item, item.Quantity, log)
    }
    if (item.Slot === "Weapon") {
        char.Equipment.Weapon = new BareFist()
    }
    if (item.Slot === "OffHand") {
        char.Equipment.OffHand = new EmptyOffHand()
    }
    if (item.Slot === "Head") {
        char.Equipment.Head = new BareHead()
    }
    if (item.Slot === "Torso") {
        char.Equipment.Torso.ProtectionType.onUnEquip(char, char.Equipment.Torso)
        if (char.Equipment.Torso.Class.Name === "Heavy Armor") {
            //char.Attributes.Dexterity.Penalty += 3;
            //char.Attributes.Speed.Penalty += 3;
        }
        if (char.Equipment.Torso.Class.Name === "Medium Armor") {
            //char.Attributes.Dexterity.Penalty += 2;
            //char.Attributes.Speed.Penalty += 2;
        }
        if (char.Equipment.Torso.Class.Name === "Light Armor") {
            //char.Attributes.Dexterity.Penalty += 1;
            //char.Attributes.Speed.Penalty += 1;
        }
        char.Equipment.Torso = new BareTorso()
    }
    if (item.Slot === "Legs") {
        char.Equipment.Legs = new BareLegs()
    }
    if (item.Slot === "Hands") {
        char.Equipment.Hands = new BareHands()
    }
    if (item.Slot === "Feet") {
        char.Equipment.Feet = new BareFeet()
    }
    if (item.Slot === "Back") {
        char.Equipment.Back = new BareBack()
    }
    if (item.Slot === "Neck") {
        char.Equipment.Neck = new BareNeck()
    }
    if (item.Slot === "Ring") {
        char.Equipment.Ring = new BareFinger()
    }
    item.Enchantment.OnUnEquipEffect(char, item)
    char.Inventory = inventory;
}
export function EquipItem(char, inventory, item, log) {
    console.log(item)
    if (FindSkillInSkillBook(char, item.Class).Level >= item.Level || item.Class === undefined) {
        AddToCharacterLog(log, char.Name + " Equipped " + item.Name);
        if (item.Slot === "Weapon") {
            UnEquip(char, inventory, char.Equipment.Weapon, log)
            char.Equipment.Weapon = item;
            if (item.Type === "TwoHands") {
                EquipItem(char, inventory, char.Equipment.OffHand)
            }
        }
        if (item.Slot === "OffHand") {
            UnEquip(char, inventory, char.Equipment.OffHand, log)
            char.Equipment.OffHand = item
        }
        if (item.Slot === "Head") {
            UnEquip(char, inventory, char.Equipment.Head, log)
            char.Equipment.Head = item
        }
        if (item.Slot === "Torso") {
            UnEquip(char, inventory, char.Equipment.Torso, log)
            item.ProtectionType.onEquip(char, item)
            char.Equipment.Torso = item
            if (char.Equipment.Torso.Class.Name === "Heavy Armor") {
                //char.Attributes.Dexterity.Penalty -= 3;
                //char.Attributes.Speed.Penalty -= 3;
            }
            if (char.Equipment.Torso.Class.Name === "Medium Armor") {
                //char.Attributes.Dexterity.Penalty -= 2;
                //char.Attributes.Speed.Penalty -= 3;
            }
            if (char.Equipment.Torso.Class.Name === "Light Armor") {
                //char.Attributes.Dexterity.Penalty -= 1;
                //char.Attributes.Speed.Penalty -= 3;
            }
        }
        if (item.Slot === "Legs") {
            UnEquip(char, inventory, char.Equipment.Legs, log)
            char.Equipment.Legs = item
        }
        if (item.Slot === "Hands") {
            UnEquip(char, inventory, char.Equipment.Hands, log)
            char.Equipment.Hands = item
        }
        if (item.Slot === "Feet") {
            UnEquip(char, inventory, char.Equipment.Feet, log)
            char.Equipment.Feet = item
        }
        if (item.Slot === "Back") {
            UnEquip(char, inventory, char.Equipment.Back, log)
            char.Equipment.Back = item
        }
        if (item.Slot === "Neck") {
            UnEquip(char, inventory, char.Equipment.Neck, log)
            char.Equipment.Neck = item
        }
        if (item.Slot === "Ring") {
            UnEquip(char, inventory, char.Equipment.Ring, log)
            char.Equipment.Ring = item
        }
        item.Enchantment.OnEquipEffect(char, item)
    }
    else {
        AddToCharacterLog(log, item.Name + " requires Level " + item.Level + " in " + item.Class.Name + " to equip.");
    }
    log.Inventory = inventory;
}
export function EquipItemFromInventory(char, inventory, item, log) {
    EquipItem(char, inventory, item, log)
    if (FindSkillInSkillBook(char, item.Class).Level >= item.Level) {
        RemoveItemFromInventory(log, inventory, item, item.Quantity, log)
    }
    log.Inventory = inventory;
}
export function ApplyOnEquipEffect(hero, immune, resist, weak, cImmune, cResist, cWeak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        immunity.Source = item;
        hero.DamageModifiers.Immunities.push(immunity)
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[r]
        resistance.Source = item;
        hero.DamageModifiers.Resistances.push(resistance)
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[w]
        weakness.Source = item;
        hero.DamageModifiers.Weaknesses.push(weakness)
    }
    for (var i2 = 0; i2 < cImmune.length; i2++) {
        var cImmunity = cImmune[i2]
        cImmunity.Source = item;
        hero.ConditionModifiers.Immunities.push(immunity)
    }
    for (var r2 = 0; r2 < cResist.length; r2++) {
        var cResistance = cResist[r2]
        cResistance.Source = item;
        hero.ConditionModifiers.Resistances.push(cResistance)
    }
    for (var w2 = 0; w < cWeak.length; w2++) {
        var cWeakness = cWeak[w2]
        cWeakness.Source = item;
        hero.ConditionModifiers.Weaknesses.push(cWeakness)
    }
}
export function ApplyOnUnEquipEffect(hero, immune, resist, weak, cImmune, cResist, cWeak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        if (immunity.Source === item) {
            hero.DamageModifiers.Immunities.remove(immunity)
        }
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[r]
        if (resistance.Source === item) {
            hero.DamageModifiers.Resistances.remove(resistance)
        }
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[w]
        if (weakness.Source === item) {
            hero.DamageModifiers.Weaknesses.remove(weakness)
        }
    }
    for (var i2 = 0; i2 < cImmune.length; i2++) {
        var cImmunity = cImmune[i2]
        if (cImmunity.Source === item) {
            hero.ConditionModifiers.Immunities.remove(immunity)
        }
    }
    for (var r2 = 0; r2 < cResist.length; r2++) {
        var cResistance = cResist[r2]
        if (cResistance.Source === item) {
            hero.ConditionModifiers.Resistances.remove(cResistance)
        }
    }
    for (var w2 = 0; w < cWeak.length; w2++) {
        var cWeakness = cWeak[w2]
        if (cWeakness.Source === item) {
            hero.ConditionModifiers.Weaknesses.remove(cWeakness)
        }
    }
}
export function CalculateInventorySlots(hero) {
    var slots = hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty;
    var party = hero.Companions;
    for (var p = 0; p < party.length; p++) {
        slots += party[p].Attributes.Strength.Value + party[p].Attributes.Strength.Bonus - party[p].Attributes.Strength.Penalty;
    }
    return slots;
}