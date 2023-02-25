import { PoisonCondition } from "./ConditionsDB";
import { FireDamage, IceDamage, PoisonDamage } from "./DamageTypesDB";
import { ApplyCondition } from "../Scripts/BuffConditionAndDeBuffScripts";
import { TakeDamage } from "../Scripts/CharacterScripts";
import { AddToCombatLog, CalculateDamageModifiers } from "../Scripts/CombatScripts";
import { ApplyOnEquipEffect, ApplyOnUnEquipEffect } from "../Scripts/ItemScripts";
export class Enchantment {
    Name;
    OnHitEffect(char1, char2, combatLog) { }; OnEquipEffect(char, item) { }; OnUnEquipEffect(char, item) { }
    constructor(name) {
        this.Name = name;
    }
}
export class UnEnchanted extends Enchantment {
    constructor(name = "UnEnchanted") {
        super(name)
    }
}
//apply condition
//conidtion and damage modifer
export class ConditionAndDamageModifierEnchanment extends Enchantment {
    Immunities; Resistances; Weaknesses; ConditionImmunities; ConditionResistances; ConditionWeaknesses;
    constructor(name, i, r, w, cI, cR, cW) {
        super(name)
        this.Immunities = i; this.Resistances = r; this.Weaknesses = w; this.ConditionImmunities = cI; this.ConditionResistances = cR; this.ConditionWeaknesses = cW;
    }
    OnEquipEffect(char, item) { ApplyOnEquipEffect(char, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionImmunities, this.ConditionResistances, this.ConditionWeaknesses, item) };
    OnUnEquipEffect(char, item) { ApplyOnUnEquipEffect(char, char.Immunities, char.Resistances, char.Weaknesses, char.ConditionModifiers.Immunities, char.ConditionModifiers.Resistances, char.ConditionModifiers.Weaknesses, item) }
}
export class FireImmuneEnchantment extends ConditionAndDamageModifierEnchanment {
    constructor(name = "Immunity to Fire", i = [new FireDamage()], r = [], w = [], cI = [], cR = [], cW = []) {
        super(name, i, r, w, cI, cR, cW)
    }
}
export class IceResistEnchantment extends ConditionAndDamageModifierEnchanment {
    constructor(name = "Resistance to Ice", i = [], r = [new IceDamage()], w = [], cI = [], cR = [], cW = []) {
        super(name, i, r, w, cI, cR, cW)
    }
}
export class DamageEnchantment extends Enchantment {
    Damage; DamageType;
    constructor(name, damage, damageType) {
        super(name)
        this.Damage = damage; this.DamageType = damageType;
    }
    OnHitEffect(char1, char2, combatLog) { var damage = CalculateDamageModifiers(char2, this.Damage, this.DamageType); TakeDamage(char2, damage); AddToCombatLog(combatLog, char1.Name + " deals an extra " + damage[0] + " " + this.DamageType.Name + " damage " + damage[1] + " due to " + this.Name) }
}
export class FireEnchantment extends DamageEnchantment {
    constructor(name = "Fire Enchantment", damage = 5, damageType = new FireDamage()) {
        super(name, damage, damageType)
    }
}
export class PoisonApplyEnchantment extends DamageEnchantment {
    constructor(name = "Venom Enchantment", damage = 1, damageType = new PoisonDamage()) {
        super(name, damage, damageType)
    }
    OnHitEffect(char1, char2, combatLog) { ApplyCondition(char2, new PoisonCondition(2, 1)); AddToCombatLog(combatLog, char1.Name + "poisons " + char2.Name) }
}
//enchanment
export class EnhancementEnchantment extends Enchantment {
    // constructor(name) {
    //     super(name)
    // }
}
export class StrengthEnchantment extends EnhancementEnchantment {
    constructor(name = "Strength Enchantment") {
        super(name)
    }
    OnEquipEffect(char, item) { char.Attributes.Strength.Bonus += 2; char.Log.push(char.Name + " gains a +2 Strength Bonus due to enchantment") };
    OnUnEquipEffect(char, item) { char.Attributes.Strength.Bonus -= 2 }
}