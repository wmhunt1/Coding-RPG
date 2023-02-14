import { AddToCharacterLog } from "./CharacterScripts";
import { bareBack, bareFeet, bareFinger, bareFist, bareHands, bareHead, bareLegs, bareNeck, bareTorso, emptyOffHand } from "../Database/ItemsDB"
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
        char.Weapon = bareFist()
    }
    if (item.Slot === "OffHand") {
        char.OffHand = emptyOffHand()
    }
    if (item.Slot === "Head") {
        char.Head = bareHead()
    }
    if (item.Slot === "Torso") {
        char.Torso.ProtectionType.onUnEquip(char, char.Torso)
        if (char.Torso.Class.Name === "Heavy Armor") {
            //char.DexPenalty += 3;
            //char.SpdPenalty += 3;
        }
        if (char.Torso.Class.Name === "Medium Armor") {
            //char.DexPenalty += 2;
            //char.SpdPenalty += 2;
        }
        if (char.Torso.Class.Name === "Light Armor") {
            //char.DexPenalty += 1;
            //char.SpdPenalty += 1;
        }
        char.Torso = bareTorso()
    }
    if (item.Slot === "Legs") {
        char.Legs = bareLegs()
    }
    if (item.Slot === "Hands") {
        char.Hands = bareHands()
    }
    if (item.Slot === "Feet") {
        char.Feet = bareFeet()
    }
    if (item.Slot === "Back") {
        char.Back = bareBack()
    }
    if (item.Slot === "Neck") {
        char.Neck = bareNeck()
    }
    if (item.Slot === "Ring") {
        char.Ring = bareFinger()
    }
    item.Enchantment.OnUnEquipEffect(char, item)
    char.Inventory = inventory;
}
export function EquipItem(char, inventory, item, log) {
    AddToCharacterLog(log, char.Name + " Equipped " + item.Name);
    if (item.Slot === "Weapon") {
        UnEquip(char, inventory, char.Weapon, log)
        char.Weapon = item;
        if (item.Type === "TwoHands") {
            EquipItem(char, inventory, char.OffHand)
        }
    }
    if (item.Slot === "OffHand") {
        UnEquip(char, inventory, char.OffHand, log)
        char.OffHand = item
    }
    if (item.Slot === "Head") {
        UnEquip(char, inventory, char.Head, log)
        char.Head = item
    }
    if (item.Slot === "Torso") {
        UnEquip(char, inventory, char.Torso, log)
        item.ProtectionType.onEquip(char, item)
        char.Torso = item
        if (char.Torso.Class.Name === "Heavy Armor") {
            //char.DexPenalty -= 3;
            //char.SpdPenalty -= 3;
        }
        if (char.Torso.Class.Name === "Medium Armor") {
            //char.DexPenalty -= 2;
            //char.SpdPenalty -= 3;
        }
        if (char.Torso.Class.Name === "Light Armor") {
            //char.DexPenalty -= 1;
            //char.SpdPenalty -= 3;
        }
    }
    if (item.Slot === "Legs") {
        UnEquip(char, inventory, char.Legs, log)
        char.Legs = item
    }
    if (item.Slot === "Hands") {
        UnEquip(char, inventory, char.Hands, log)
        char.Hands = item
    }
    if (item.Slot === "Feet") {
        UnEquip(char, inventory, char.Feet, log)
        char.Feet = item
    }
    if (item.Slot === "Back") {
        UnEquip(char, inventory, char.Back, log)
        char.Back = item
    }
    if (item.Slot === "Neck") {
        UnEquip(char, inventory, char.Neck, log)
        char.Neck = item
    }
    if (item.Slot === "Ring") {
        UnEquip(char, inventory, char.Ring, log)
        char.Ring = item
    }
    item.Enchantment.OnEquipEffect(char, item)
    log.Inventory = inventory;
}
export function EquipItemFromInventory(char, inventory, item, log) {
    EquipItem(char, inventory, item, log)
    RemoveItemFromInventory(log, inventory, item, item.Quantity, log)
    log.Inventory = inventory;
}
export function ApplyOnEquipEffect(hero, immune, resist, weak, cImmune, cResist, cWeak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        immunity.Source = item;
        hero.Immunities.push(immunity)
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[r]
        resistance.Source = item;
        hero.Resistances.push(resistance)
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[w]
        weakness.Source = item;
        hero.Weaknesses.push(weakness)
    }
    for (var i2 = 0; i2 < cImmune.length; i2++) {
        var cImmunity = cImmune[i2]
        cImmunity.Source = item;
        hero.ConditionImmunities.push(immunity)
    }
    for (var r2 = 0; r2 < cResist.length; r2++) {
        var cResistance = cResist[r2]
        cResistance.Source = item;
        hero.ConditionResistances.push(cResistance)
    }
    for (var w2 = 0; w < cWeak.length; w2++) {
        var cWeakness = cWeak[w2]
        cWeakness.Source = item;
        hero.ConditionWeaknesses.push(cWeakness)
    }
}
export function ApplyOnUnEquipEffect(hero, immune, resist, weak, cImmune, cResist, cWeak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        if (immunity.Source === item) {
            hero.Immunities.remove(immunity)
        }
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[r]
        if (resistance.Source === item) {
            hero.Resistances.remove(resistance)
        }
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[w]
        if (weakness.Source === item) {
            hero.Weaknesses.remove(weakness)
        }
    }
    for (var i2 = 0; i2 < cImmune.length; i2++) {
        var cImmunity = cImmune[i2]
        if (cImmunity.Source === item) {
            hero.ConditionImmunities.remove(immunity)
        }
    }
    for (var r2 = 0; r2 < cResist.length; r2++) {
        var cResistance = cResist[r2]
        if (cResistance.Source === item) {
            hero.ConditionResistances.remove(cResistance)
        }
    }
    for (var w2 = 0; w < cWeak.length; w2++) {
        var cWeakness = cWeak[w2]
        if (cWeakness.Source === item) {
            hero.ConditionWeaknesses.remove(cWeakness)
        }
    }
}