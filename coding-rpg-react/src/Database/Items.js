import { HealHP, LearnSpell, RecoverMP, RecoverSP, RemoveCondition } from "../Scripts/CharacterScripts";
import { bludeoningDamage, piercingDamage, slashingDamage } from "./DamageTypes";
import { fireEnchantment, strengthEnchantment, unEnchanted } from "./Enchantments";
import { clothProtection, naturalProtection, woodProtection } from "./ProtectionTypes";
import { magicMissile } from "./Spells";
//consumables
//food
export function cheese() {
    var cheese = { Name: "Cheese", Type: "Consumable", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cheese
}
export function cookedFish() {
    var cook = { Name: "Cooked Fish", Type: "Consumable", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cook;
}
export function cookedRatMeat() {
    var cookedRatMeat = { Name: "Cooked Rat Meat", Type: "Consumable", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cookedRatMeat;
}
//potions
export function antidote() {
    var antidote = { Name: "Antidote", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero) { if (hero.Conidtion.Name === "Poison") { hero.Log.push(hero.Name + " drinks " + this.Name); RemoveCondition(hero, hero.Log) } } }
    return antidote;
}
export function healingPotion() {
    var healingPotion = { Name: "Healing Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); HealHP(hero, 5) } }
    return healingPotion;
}
export function manaPotion() {
    var manaPotion = { Name: "Mana Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); RecoverMP(hero, 5) } }
    return manaPotion;
}
export function staminaPotion() {
    var staminaPotion = { Name: "Stamina Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); RecoverSP(hero, 5) } }
    return staminaPotion;
}
//scrolls
//abilityscroll
//spellscroll
export function magicMissileScroll() {
    var magicMissileScroll = { Name: "Scroll of Magic Missile", Type: "Consumable", Cost: 10, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " studies " + this.Name); LearnSpell(hero, magicMissile()) } }
    return magicMissileScroll;
}
//equipables
//accessories
//back
export function bareBack() {
    var bare = { Name: "Bare", Slot: "Back", Type: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
//neck
export function bareNeck() {
    var bare = { Name: "Bare", Slot: "Neck", Type: "",Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
//ring
export function bareFinger() {
    var bare = { Name: "Bare", Slot: "Ring", Type: "",Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function ringOfStr() {
    var ring = { Name: "Ring of Strength", Slot: "Ring", Type: "",Cost: 10, Quantity: 1, Enchantment: strengthEnchantment() }
    return ring;
}
//armor
//feet
export function bareFeet() {
    var bare = { Name: "Bare", Slot: "Feet", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furFeet() {
    var fur = { Name: "Fur", Slot: "Feet", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function shoes() {
    var shoes = { Name: "Shoes", Slot: "Feet", Type: "",Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shoes;
}
//hands
export function furHands() {
    var fur = { Name: "Fur", Slot: "Hands", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function gloves() {
    var gloves = { Name: "Trousers", Slot: "Hands", Type: "",Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gloves;
}
export function bareHands() {
    var bare = { Name: "Bare", Slot: "Hands", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
//head
export function bareHead() {
    var bare = { Name: "Bare", Slot: "Head", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furHead() {
    var fur = { Name: "Fur", Slot: "Head", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function hat() {
    var hat = { Name: "Hat", Slot: "Head", Type: "",Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
//legs
export function bareLegs() {
    var bare = { Name: "Bare", Slot: "Legs", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furLegs() {
    var fur = { Name: "Fur", Slot: "Legs", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function trousers() {
    var trousers = { Name: "Trousers", Slot: "Legs", Type: "",Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return trousers;
}
//torso
export function bareTorso() {
    var bare = { Name: "Bare", Slot: "Torso", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furTorso() {
    var fur = { Name: "Fur", Slot: "Torso", Type: "",Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function tunic() {
    var tunic = { Name: "Tunic", Slot: "Torso", Type: "",Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return tunic;
}
//offhands
//offhand weapoms
export function emptyOffHand() {
    var empty = { Name: "Empty", Slot: "OffHand", Type: "Weapon", Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return empty;
}
//shields
export function woodenShield() {
    var woodenShield = { Name: "Wooden Shield", Slot: "OffHand", type: "Shield", Protection: 1, ProtectionType: woodProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return woodenShield;
}
//weapons
export function bareFist() {
    var bare = { Name: "Fist", Slot: "Weapon", Type: "OneHand", Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bite() {
    var bite = { Name: "Bite", Slot: "Weapon", Type: "OneHand", Damage: 1, DamageType: piercingDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bite;
}
export function club() {
    var club = { Name: "Club", Slot: "Weapon", Type: "OneHand", Damage: 1, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return club;
}
export function dagger() {
    var dagger = { Name: "Dagger", Slot: "Weapon", Type: "OneHand", Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function flamingsword() {
    var sword = { Name: "Flaming Sword", Slot: "Weapon", Type: "OneHand", Damage: 5, DamageType: slashingDamage(), Cost: 50, Quantity: 1, Enchantment: fireEnchantment() }
    return sword;
}
export function sword() {
    var sword = { Name: "Sword", Slot: "Weapon", Type: "OneHand", Damage: 5, DamageType: slashingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
//junk
export function noInput()
{
    var no = { Name: "", Type: "Junk", Cost: 0, Quantity: 0 }
    return no;
}
export function noOutput()
{
    var no = { Name: "", Type: "Junk", Cost: 0, Quantity: 0 }
    return no;
}
export function ratTail() {
    var ratTail = { Name: "Rat Tail", Type: "Junk", Cost: 1, Quantity: 1 }
    return ratTail;
}
//resources
export function rawFish() {
    var raw = { Name: "Raw Fish", Type: "Raw Food", Cost: 2, Quantity: 1 }
    return raw;
}
export function rawRatMeat() {
    var rawRatMeat = { Name: "Raw Rat Meat", Type: "Raw Food", Cost: 2, Quantity: 1 }
    return rawRatMeat;
}