import { fireDamage, lightningDamage } from "./DamageTypesDB";
import { ApplyOnEquipEffect, ApplyOnUnEquipEffect } from "../Scripts/ItemScripts"
export function clothProtection() {
    var cloth = { Name: "Cloth", Immunities: [], Resistances: [], Weaknesses: [fireDamage()], onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, item) }, onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, item) } }
    return cloth;
}
export function metalProtection() {
    var metal = { Name: "Metal", Immunities: [], Resistances: [], Weaknesses: [lightningDamage()], onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, item) }, onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, item) } }
    return metal;
}
export function naturalProtection() {
    var natural = { Name: "Natural", Immunities: [], Resistances: [], Weaknesses: [], onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, item) }, onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, item) } }
    return natural;
}
export function woodProtection() {
    var wood = { Name: "Wood", Immunities: [], Resistances: [], Weaknesses: [fireDamage()], onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, item) }, onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, item) } }
    return wood;
}