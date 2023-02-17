import { fireDamage, lightningDamage } from "./DamageTypesDB";
import { ApplyOnEquipEffect, ApplyOnUnEquipEffect } from "../Scripts/ItemScripts"
export function clothProtection() {
    var cloth = {
        Name: "Cloth", ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [fireDamage()],
        onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknesses, item) },
        onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    }
    return cloth;
}
export function leatherProtection() {
    var leather = {
        Name: "Leather", ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [],
        onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknessesitem) },
        onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    }
    return leather;
}
export function metalProtection() {
    var metal = {
        Name: "Metal", ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [lightningDamage()],
        onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknessesitem) },
        onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    }
    return metal;
}
export function naturalProtection() {
    var natural = {
        Name: "Natural", ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [],
        onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknesses, item) },
        onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    }
    return natural;
}
export function woodProtection() {
    var wood = {
        Name: "Wood", ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [fireDamage()],
        onEquip(hero, item) { ApplyOnEquipEffect(hero, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknesses, item) },
        onUnEquip(hero, item) { ApplyOnUnEquipEffect(hero, hero.Immunities, hero.Resistances, hero.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    }
    return wood;
}