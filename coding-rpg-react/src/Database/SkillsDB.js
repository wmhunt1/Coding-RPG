export function allSkills(level) {
    var allSkills = [alchemySkill(), acrobaticsSkill(), alterationSkill(1), athleticsSkill(), axeSkill(1), barterSkill(), blockSkill(1), bluntSKill(1), conjurationSkill(1), cookingSkill(), craftingSkill(), destructionSkill(1), divinationSkill(1), enchantingSKill(1), farmingSkill(), firemakingSkill(), fishingSkill(), fletchingSkill(), heavyArmorSkill(1), herbloreSkill(), huntingSkill(), illusionSkill(1), lightArmorSkill(1), lockpickingSkill(), longBladeSkill(1), miningSkill(), persuationSkill(), rangedSkill(1), restorationSkill(1), shortBladeSkill(1), smithingSkill(), spearSkill(1), stealthSkill(), survivalSkill(), unArmedSkill(1), unArmoredSkill(1), senseSkill(), woodcuttingSkill()]
    return allSkills
}
//armor skills
export function allArmorSkills(b, h, l, u) {
    var allArmorSkills = [blockSkill(b), heavyArmorSkill(h), lightArmorSkill(l), unArmoredSkill(u)]
    return allArmorSkills;
}
export function blockSkill(level) {
    var block = { Name: "Block", Type: "Armor", Level: level, CurrentXP: 0, MaxXP: 50 }
    return block;
}
export function heavyArmorSkill(level) {
    var heavy = { Name: "Heavy Armor", Type: "Armor", Level: level, CurrentXP: 0, MaxXP: 50 }
    return heavy
}
export function lightArmorSkill(level) {
    var light = { Name: "Light Armor", Type: "Armor", Level: level, CurrentXP: 0, MaxXP: 50 }
    return light
}
export function unArmoredSkill(level) {
    var unArmored = { Name: "UnArmored", Type: "Armor", Level: level, CurrentXP: 0, MaxXP: 50 }
    return unArmored
}
//crafting skills
export function alchemySkill() {
    var alchemySkill = { Name: "Alchemy", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return alchemySkill
}
export function cookingSkill() {
    var cook = { Name: "Cooking", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return cook;
}
export function craftingSkill() {
    var craft = { Name: "Crafting", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return craft
}
export function firemakingSkill() {
    var fire = { Name: "Firemaking", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return fire;
}
export function fletchingSkill() {
    var fletch = { Name: "Fletching", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return fletch;
}
export function smithingSkill() {
    var smith = { Name: "Smithing", Type: "Crafting", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return smith;
}
//gathering skills
export function farmingSkill() {
    var farm = { Name: "Farming", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return farm;
}
export function fishingSkill() {
    var fish = { Name: "Fishing", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return fish;
}
export function herbloreSkill() {
    var herb = { Name: "Herblore", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return herb;
}
export function huntingSkill() {
    var hunt = { Name: "Hunting", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return hunt;
}
export function miningSkill() {
    var mine = { Name: "Mining", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return mine;
}
export function woodcuttingSkill() {
    var wood = { Name: "Woodcutting", Type: "Gathering", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return wood;
}
//knowledge skills
//magic skills
export function allMagicSkills(a, c, de, di, e, i, r) {
    var allMagicSkills = [alterationSkill(a), conjurationSkill(c), destructionSkill(de), divinationSkill(di), enchantingSKill(e), illusionSkill(i), restorationSkill(r)]
    return allMagicSkills
}
export function alterationSkill(level) {
    var alt = { Name: "Alteration", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return alt;
}
export function conjurationSkill(level) {
    var conj = { Name: "Conjuration", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return conj;
}
export function destructionSkill(level) {
    var dest = { Name: "Destruction", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return dest;
}
export function divinationSkill(level) {
    var div = { Name: "Destruction", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return div;
}
export function enchantingSKill(level) {
    var enchant = { Name: "Enchanting", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return enchant
}
export function illusionSkill(level) {
    var ill = { Name: "Illusion", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return ill;
}
export function restorationSkill(level) {
    var rest = { Name: "Restoration", Type: "Magic", Level: level, CurrentXP: 0, MaxXP: 50 }
    return rest;
}
//utility skills
export function acrobaticsSkill() {
    var acro = { Name: "Acrobatics", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return acro;
}
export function athleticsSkill() {
    var ath = { Name: "Athletics", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return ath;
}
export function barterSkill() {
    var bart = { Name: "Barter", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return bart;
}
export function lockpickingSkill() {
    var lock = { Name: "Lockpicking", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return lock;
}
export function persuationSkill() {
    var pers = { Name: "Persuation", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return pers;
}
export function senseSkill() {
    var sense = { Name: "Sense", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return sense;
}
export function stealthSkill() {
    var stealth = { Name: "Stealth", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return stealth;
}
export function survivalSkill() {
    var surv = { Name: "Survival", Type: "Utility", Level: 1, CurrentXP: 0, MaxXP: 50 }
    return surv;
}
//weapon skills
export function allWeaponSkills(a, b, l, r, sh, sp, u) {
    var allWeaponSkills = [axeSkill(a), bluntSKill(b), longBladeSkill(l), rangedSkill(r), shortBladeSkill(sh), spearSkill(sp), unArmedSkill(u)]
    return allWeaponSkills
}
export function axeSkill(level) {
    var axe = { Name: "Axe", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return axe;
}
export function bluntSKill(level) {
    var blunt = { Name: "Blunt", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return blunt;
}
export function longBladeSkill(level) {
    var long = { Name: "Long Blade", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return long;
}
export function rangedSkill(level) {
    var ranged = { Name: "Ranged", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return ranged;
}
export function shortBladeSkill(level) {
    var short = { Name: "Short Blade", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return short;
}
export function spearSkill(level) {
    var spear = { Name: "Spear", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return spear;
}
export function unArmedSkill(level) {
    var unarmed = { Name: "UnArmed", Type: "Weapon", Level: level, CurrentXP: 0, MaxXP: 50 }
    return unarmed;
}