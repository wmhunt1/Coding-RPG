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
    char.MaxXP = (char.Level * (char.Level - 1)) * 100;
    char.MaxHP += char.Constitution;
    char.CurrentHP = char.MaxHP;
    char.MaxMP += 10;
    char.CurrentMP = char.Intelligence;
    char.MaxSP += 10;
    char.CurrentSP = char.Constitution;
    AddToCharacterLog(char, char.Name + " has reached level " + char.Level);
}
export function CheckForLevelUp(char) {
    if (char.CurrentXP >= char.MaxXP) {
        return true;
    }
    else
    {
        return false;
    }
}
export function EarnXP(char, xp) {
    char.CurrentXP += xp;
    AddToCharacterLog(char, char.Name + " earns " + xp + " XP");
}
export function HealHP(char, hp) {
    char.CurrentHP += hp;
    if (char.CurrentHP > char.MaxHP) {
        char.CurrentHP = char.MaxHP;
    }
    AddToCharacterLog(char, char.Name + " heals " + hp + " HP");
}
export function TakeDamage(char, damage) {
    if (damage < 0) {
        damage = 0;
    }
    char.CurrentHP -= damage;
    AddToCharacterLog(char, char.Name + " takes " + damage + " damage");
    if (char.CurrentHP < 0) {
        char.CurrentHP = 0;
    }
}
export function RecoverMP(char, mp) {
    char.CurrentMP += mp;
    if (char.CurrentMP > char.MaxMP) {
        char.CurrentMP = char.MaxMP;
    }
    AddToCharacterLog(char, char.Name + " recovers " + mp + " MP");
}
export function UseMP(char, mp) {
    char.CurrentMP -= mp;
    AddToCharacterLog(char, char.Name + " uses " + mp + " MP");
}
export function HasEnoughMP(char, mp) {
    if (char.CurrentMP >= mp) {
        return true;
    }
    else {
        return false;
    }
}
export function RecoverSP(char, sp) {
    char.CurrentSP += sp;
    if (char.CurrentSP > char.MaxSP) {
        char.CurrentSP = char.MaxSP;
    }
    AddToCharacterLog(char, char.Name + " recovers " + sp + " SP");
}
export function UseSP(char, sp) {
    char.CurrentSP -= sp;
    AddToCharacterLog(char, char.Name + " uses " + sp + " SP");
}
export function HasEnoughSP(char, sp) {
    if (char.CurrentSP >= sp) {
        return true;
    }
    else {
        return false;
    }
}
export function FullyRecover(char)
{
    HealHP(char, char.MaxHP)
    RecoverMP(char, char.MaxMP)
    RecoverSP(char, char.CurrentSP)
}
export function AddGold(char, gold) {
    char.Gold += gold;
    AddToCharacterLog(char, char.Name + " earned " + gold + " GP")
    return char;
}
export function RemoveGold(char, gold) {
    char.Gold -= gold;
    AddToCharacterLog(char, char.Name + " lost " + gold + " GP")
}
export function AddItemToInventory(char, inventory, item) {
    if (inventory.find(x => x.Name === item.Name)) {
        var findItem = inventory.findIndex(x => x.Name === item.Name);
        var newItem = inventory[findItem];
        newItem.Quantity++;
        inventory[findItem] = newItem;
        AddToCharacterLog(char, "Adding " + item.Name + " to inventory");
    }
    else {
        inventory.push(item);
        AddToCharacterLog(char, "Adding " + item.Name + " to inventory");
    }
    char.Inventory = inventory;
}
export function RemoveItemFromInventory(char, inventory, item) {
    var findItem = inventory.findIndex(x => x.Name === item.Name);
    if (inventory[findItem].Quantity > 1) {
        var newItem = inventory[findItem];
        newItem.Quantity--;
        inventory[findItem] = newItem;
    }
    else {
        inventory.remove(item);
    }
    char.Inventory = inventory;
}
export function UnEquip(char, inventory, item) {
    if (item.Type === "Weapon") {
        if (char.Weapon.Name !== "Bare Fist") {
            AddToCharacterLog(char, "Enequipping " + item.Name);
            AddItemToInventory(char, inventory, item);
        }
        var fist = { Name: "Bare Fist", Type: "Weapon", Damage: 0, DamageType: "Bludgeoning", Cost: 0, Quantity: 0 }
        char.Weapon = fist;
    }
    else if (item.Type === "Torso") {
        if (char.Weapon.Torso !== "Naked") {
            AddToCharacterLog(char, "Enequipping " + item.Name);
            AddItemToInventory(char, inventory, item);
        }
        var torso = { Name: "Naked", Type: "Torso", Protection: 0, ProtectionType: "Natural", Cost: 0, Quantity: 0 }
        char.Torso = torso;
    }
    else {

    }
    char.Inventory = inventory;
}
export function EquipItem(char, inventory, item) {
    if (item.Type === "Weapon") {
        UnEquip(char, inventory, item);
        char.Weapon = item;
    }
    if (item.Type === "Torso") {
        UnEquip(char, inventory, item);
        char.Torso = item;
    }
    AddToCharacterLog(char, "Equipping " + item.Name);
    char.Inventory = inventory;
}
export function EquipItemFromInventory(char, inventory, item) {
    if (item.Type === "Weapon") {
        UnEquip(char, inventory, char.Weapon)
    }
    else if (item.Type === "Torso") {
        UnEquip(char, inventory, char.Torso)
    }
    EquipItem(char, inventory, item)
    RemoveItemFromInventory(char, inventory, item)
    char.Inventory = inventory;
}
export function CheckIfBuffApplied(char, buff, combatLog) {
    if (char.Buffs.find(x => x.Name !== buff.Name)) {
        buff.ApplyBuff(char)
    }
    else {
        combatLog.push(char.Name + " already has a " + buff.Name + " Buff")
    }
}
export function CheckIfDeBuffApplied(char, deBuff, combatLog) {
    if (char.DeBuffs.find(x => x.Name !== deBuff.Name)) {
        deBuff.ApplyDeBuff(char)
    }
    else {
        combatLog.push(char.Name + " already has a " + deBuff.Name + " DeBuff")
    }
}
export function RemoveAllBuffs(char) {
    for (var b = 0; b < char.Buffs.length; b++) {
        AddToCharacterLog(char, char.Name + "'s " + char.Buffs[b].Name + " wears off");
        char.Buffs[b].RemoveBuff(char);
    }
    char.Buffs = []
}
export function RemoveAllDeBuffs(char) {
    for (var d = 0; d < char.DeBuffs.length; d++) {
        AddToCharacterLog(char, char.Name + "'s " + char.DeBuffs[d].Name + " wears off");
        char.DeBuffs[d].RemoveDeBuff(char);
    }
    char.DeBuffs = []
}