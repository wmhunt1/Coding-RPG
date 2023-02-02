import { HealHP } from "../Scripts/CharacterScripts";

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
export function healingPotion()
{
    var potion = {Name: "Healing Potion", Type: "Consumable", Cost: 5, Quantity: 1, ConsumeEffect(hero){HealHP(hero, 5)}}
    return potion;
}