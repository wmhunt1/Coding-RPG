import { HealHP, LearnSpell, RecoverSP } from "../Scripts/CharacterScripts";
import { magicMissile } from "./Spells";
//consumables
//food
export function cheese()
{
    var cheese = {Name: "Cheese", Type: "Consumable", Cost: 4, Quantity: 1, ConsumeEffect(hero) { RecoverSP(hero, 5) }}
    return cheese
}
export function cookedRatMeat() {
    var cookedRatMeat = { Name: "CookedRat Meat", Type: "Consumable", Cost: 4, Quantity: 1, ConsumeEffect(hero) { RecoverSP(hero, 5) } }
    return cookedRatMeat;
}
//potions
export function healingPotion() {
    var potion = { Name: "Healing Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero) { HealHP(hero, 5) } }
    return potion;
}
//scrolls
//abilityscroll
//spellscroll
export function magicMissileScroll() {
    var magicMissileScroll = { Name: "Scroll of Magic Missile", Type: "Consumable", Cost: 10, Quantity: 1, ConsumeEffect(hero) { LearnSpell(hero, magicMissile()) } }
    return magicMissileScroll;
}
//equipables
//armor
export function fur() {
    var fur = { Name: "Fur", Type: "Torso", Protection: 0, ProtectionType: "Natural", Cost: 0, Quantity: 1 }
    return fur;
}
export function tunic() {
    var tunic = { Name: "Tunic", Type: "Torso", Protection: 0, ProtectionType: "Cloth", Cost: 2, Quantity: 1 }
    return tunic;
}
//weapons
export function bite() {
    var bite = { Name: "Bite", Type: "Weapon", Damage: 1, DamageType: "Piercing", Cost: 0, Quantity: 1 }
    return bite;
}
export function club() {
    var club = { Name: "Club", Type: "Weapon", Damage: 1, DamageType: "Bludgeoning", Cost: 2, Quantity: 1 }
    return club;
}
export function dagger() {
    var dagger = { Name: "Dagger", Type: "Weapon", Damage: 1, DamageType: "Piercing", Cost: 2, Quantity: 1 }
    return dagger;
}
export function sword() {
    var sword = { Name: "Sword", Type: "Weapon", Damage: 5, DamageType: "Slashing", Cost: 10, Quantity: 1 }
    return sword;
}
//junk
export function ratTail() {
    var ratTail = { Name: "Rat Tail", Type: "Junk", Cost: 1, Quantity: 1 }
    return ratTail;
}
//resources
export function rawRatMeat() {
    var rawRatMeat = { Name: "Raw Rat Meat", Type: "Raw Food", Cost: 2, Quantity: 1 }
    return rawRatMeat;
}