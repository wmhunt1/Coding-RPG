import { FireDamage, LightningDamage } from "./DamageTypesDB";
import { ApplyOnEquipEffect, ApplyOnUnEquipEffect } from "../Scripts/ItemScripts"
export class ProtectionType {
    Name;
    ConditionImmunities; ConditionResistances; ConditionWeaknesses;
    Immunities; Resistances; Weaknesses;
    onEquip(hero, item) {ApplyOnEquipEffect(hero, this, item) };
    onUnEquip(hero, item) {ApplyOnUnEquipEffect(hero, hero.DamageModifiers.Immunities, hero.DamageModifiers.Resistances, hero.DamageModifiers.Weaknesses, hero.ConditionModifiers.Immunities, hero.ConditionModifiers.Resistances, hero.ConditionModifiers.Weaknesses, item) }
    constructor(name, cI, cR, cW, i, r, w) {
        this.Name = name; this.ConditionImmunities = cI; this.ConditionResistances = cR; this.ConditionWeaknesses = cW;
        this.Immunities = i; this.Resistances = r; this.Weaknesses = w;
    }
}
export class ClothProtection extends ProtectionType {
    constructor(name, cI, cR, cW, i, r, w) {
        super(name = "Cloth", cI = [], cR = [], cW = [], i = [], r = [], w = [new FireDamage()])
    }
}
export class LeatherProtection extends ProtectionType {
    constructor(name, cI, cR, cW, i, r, w) {
        super(name = "Leather", cI = [], cR = [], cW = [], i = [], r = [], w = [])
    }
}
export class MetalProtection extends ProtectionType {
    constructor(name, cI, cR, cW, i, r, w) {
        super(name = "Metal", cI = [], cR = [], cW = [], i = [], r = [], w = [new LightningDamage()])
    }
}
export class NaturalProtection extends ProtectionType {
    constructor(name, cI, cR, cW, i, r, w) {
        super(name = "Natural", cI = [], cR = [], cW = [], i = [], r = [], w = [])
    }
}
export class WoodProtection extends ProtectionType {
    constructor(name, cI, cR, cW, i, r, w) {
        super(name = "Wood", cI = [], cR = [], cW = [], i = [], r = [], w = [new FireDamage()])
    }
}