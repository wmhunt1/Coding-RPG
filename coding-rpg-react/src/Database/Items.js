import { HealHP } from "../Scripts/CharacterScripts";
//equipables
//armor
export function fur()
{
    var fur = {Name: "Fur", Type: "Torso", Protection: 0, ProtectionType: "Natural", Cost: 0, Quantity: 1}
    return fur;
}
export function tunic()
{
    var tunic = {Name: "Tunic", Type: "Torso", Protection: 0, ProtectionType: "Cloth", Cost: 2, Quantity: 1}
    return tunic;
}
//weapons
export function bite()
{
    var bite = {Name: "Bite", Type: "Weapon", Damage: 1, DamageType:"Piercing", Cost: 0, Quantity: 1}
    return bite;
}
export function club()
{
    var club = {Name: "Club", Type: "Weapon", Damage: 1, DamageType:"Bludgeoning", Cost: 2, Quantity: 1}
    return club;
}
export function dagger()
{
    var dagger = {Name: "Dagger", Type: "Weapon", Damage: 1, DamageType:"Piercing", Cost: 2, Quantity: 1}
    return dagger;
}
//consumables
export function healingPotion()
{
    var potion = {Name: "Healing Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero){HealHP(hero, 5)}}
    return potion;
}