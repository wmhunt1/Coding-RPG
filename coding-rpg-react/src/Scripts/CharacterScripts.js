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
export function AddToCharacterLog(char, message) {
    char.Log.push(message);
}
export function LevelUp(char) {
    char.Level++;
    char.MaxXP *= char.Level;
    char.MaxHP += 10;
    //AddToCharacterLog(char, char.Name + " has reached level " + char.Level);
}
export function CheckForLevelUp(char) {
    if (char.CurrentXP >= char.MaxXP) {
        console.log("Enough XP to Level")
        LevelUp(char)
    }
}
export function EarnXP(char, xp) {
    char.CurrentXP += xp;
    AddToCharacterLog(char, char.Name + " gains " + xp + " XP");
    CheckForLevelUp(char);
}
export function HealHP(char, hp) {
    char.CurrentHP += hp;
    if (char.CurrentHP > char.MaxHP) {
        char.CurrentHP = char.MaxHP;
    }
    AddToCharacterLog(char, char.Name + " heals " + hp + " HP");
}
export function TakeDamage(char, damage) {
    char.CurrentHP -= damage;
    AddToCharacterLog(char, char.Name + " takes " + damage + " damage");
    if (char.CurrentHP < 0) {
        char.CurrentHP = 0;
    }
}
export function AddItemToInventory(char, inventory, item) {
    inventory.push(item);
    char.Inventory = inventory;
}
export function RemoveItemFromInventory(char, inventory, item) {
    inventory.remove(item);
    char.Inventory = inventory;
}
export function UnEquipWeapon(char, inventory, weapon) {
    if (char.Weapon.Name !== "Bare Fist") {
        AddItemToInventory(char, inventory, weapon);
    }
    var item = { Name: "Bare Fist", Damage: 0, DamageType: "Bludgeoning",Cost: 0, Quantity: 0}
    char.Weapon = item;
    char.Inventory = inventory;
}
export function EquipItem(char, inventory, weapon) {
    if (weapon.Type === "Weapon") {
        UnEquipWeapon(char, inventory, weapon);
        char.Weapon = weapon;
    }
    char.Inventory = inventory;
}
export function EquipItemFromInventory(char, inventory, weapon) {
    UnEquipWeapon(char, inventory, char.Weapon)
    EquipItem(char, inventory, weapon)
    RemoveItemFromInventory(char, inventory, weapon)
    char.Inventory = inventory;
}