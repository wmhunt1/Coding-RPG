import { AddToCharacterLog } from "./CharacterScripts";
import { bareBack, bareFeet, bareFinger, bareFist, bareHands, bareHead, bareLegs, bareNeck, bareTorso, emptyOffHand } from "../Database/ItemsDB"
import { heavyArmorSkill } from "../Database/SkillsDB";
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
export function AddItemToInventory(char, inventory, item, quantity) {
    if (inventory.find(x => x.Name === item.Name)) {
        var itemIndex = FindItemInInventory(inventory, item)
        if (itemIndex !== null) {
            var updateItem = inventory[itemIndex]
            updateItem.Quantity += quantity
            inventory[itemIndex] = updateItem;
        }
    }
    else {
        inventory.push(item);
    }
    AddToCharacterLog(char, "Adding " + item.Name + " X " + quantity + " to " + char.Name + "'s Inventory");
    char.Inventory = inventory;
}
export function RemoveItemFromInventory(char, inventory, item, quantity) {
    var findItem = inventory.findIndex(x => x.Name === item.Name);
    var newItem = inventory[findItem];
    newItem.Quantity -= quantity
    inventory[findItem] = newItem;
    if (inventory[findItem].Quantity === 0) {
        inventory.remove(inventory[findItem]);
    }
    AddToCharacterLog(char, "Removing " + item.Name + " X " + quantity + " from " + char.Name + "'s Inventory");
    char.Inventory = inventory;
}
export function UnEquip(char, inventory, item) {
    if (item.Name !== "Bare" && item.Name !== "Empty" && item.Name !== "Fist") {
        AddItemToInventory(char, inventory, item, item.Quantity)
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
            char.DexPenalty += 3;
            char.SpdPenalty += 3;
        }
        if (char.Torso.Class.Name === "Medium Armor") {
            char.DexPenalty += 2;
            char.SpdPenalty += 2;
        }
        if (char.Torso.Class.Name === "Light Armor") {
            char.DexPenalty += 1;
            char.SpdPenalty += 1;
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
export function EquipItem(char, inventory, item) {
    AddToCharacterLog(char, char.Name + " Equipped " + item.Name);
    if (item.Slot === "Weapon") {
        UnEquip(char, inventory, char.Weapon)
        char.Weapon = item;
        if (item.Type === "TwoHands") {
            EquipItem(char, inventory, char.OffHand)
        }
    }
    if (item.Slot === "OffHand") {
        UnEquip(char, inventory, char.OffHand)
        char.OffHand = item
    }
    if (item.Slot === "Head") {
        UnEquip(char, inventory, char.Head)
        char.Head = item
    }
    if (item.Slot === "Torso") {
        UnEquip(char, inventory, char.Torso)
        item.ProtectionType.onEquip(char, item)
        char.Torso = item
        if (char.Torso.Class.Name === "Heavy Armor") {
            char.DexPenalty -= 3;
            char.SpdPenalty -= 3;
        }
        if (char.Torso.Class.Name === "Medium Armor") {
            char.DexPenalty -= 2;
            char.SpdPenalty -= 3;
        }
        if (char.Torso.Class.Name === "Light Armor") {
            char.DexPenalty -= 1;
            char.SpdPenalty -= 3;
        }
    }
    if (item.Slot === "Legs") {
        UnEquip(char, inventory, char.Legs)
        char.Legs = item
    }
    if (item.Slot === "Hands") {
        UnEquip(char, inventory, char.Hands)
        char.Hands = item
    }
    if (item.Slot === "Feet") {
        UnEquip(char, inventory, char.Feet)
        char.Feet = item
    }
    if (item.Slot === "Back") {
        UnEquip(char, inventory, char.Back)
        char.Back = item
    }
    if (item.Slot === "Neck") {
        UnEquip(char, inventory, char.Neck)
        char.Neck = item
    }
    if (item.Slot === "Ring") {
        UnEquip(char, inventory, char.Ring)
        char.Ring = item
    }
    item.Enchantment.OnEquipEffect(char, item)
    char.Inventory = inventory;
}
export function EquipItemFromInventory(char, inventory, item) {
    EquipItem(char, inventory, item)
    RemoveItemFromInventory(char, inventory, item, item.Quantity)
    char.Inventory = inventory;
}
export function ApplyOnEquipEffect(hero, immune, resist, weak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        immunity.Source = item;
        hero.Immunities.push(immunity)
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[i]
        resistance.Source = item;
        hero.Resistances.push(resistance)
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[i]
        weakness.Source = item;
        hero.Weaknesses.push(weakness)
    }
}
export function ApplyOnUnEquipEffect(hero, immune, resist, weak, item) {
    for (var i = 0; i < immune.length; i++) {
        var immunity = immune[i]
        if (immunity.Source === item) {
            hero.Immunities.remove(immunity)
        }
    }
    for (var r = 0; r < resist.length; r++) {
        var resistance = resist[i]
        if (resistance.Source === item) {
            hero.Resistances.remove(resistance)
        }
    }
    for (var w = 0; w < weak.length; w++) {
        var weakness = weak[i]
        if (weakness.Source === item) {
            hero.Weaknesses.remove(weakness)
        }
    }
}