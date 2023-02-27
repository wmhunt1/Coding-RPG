import { AttackBonusBuff, RageBuff, ShieldBuff } from "./BuffsDB";
import { CheckIfBuffApplied } from "../Scripts/BuffConditionAndDeBuffScripts";
import { AddToCombatLog, ArmorIgnoringAttack, BasicAttack } from "../Scripts/CombatScripts";

export class Ability {
    Name; StaminaCost; Description;
    AbilityEffect(char, allies, enemies, target, combatLog) { }
    constructor(name, cost, description) {
        this.Name = name;
        this.StaminaCost = cost;
        this.Description = description;
    }
}
export class Cleave extends Ability {
    constructor(name, cost, description) {
        super(name = "Cleave", cost = 10, description = "Cleaves through all foes with a weapon")
    }
    AbilityEffect(char, allies, enemies, target, combatLog) {
        AddToCombatLog(combatLog, char.Name + " cleaves through all foes with their weapon");
        for (var e = 0; e < enemies.length; e++) { BasicAttack(char, enemies[e], combatLog, char.Equipment.Weapon) }
    };
}
export class PierceArmor extends Ability {
    constructor(name, cost, description) {
        super(name = "Pierce Armor", cost = 5, description = "An attack that ignores target's armor")
    }
    AbilityEffect(char, allies, enemies, target, combatLog) {
        ArmorIgnoringAttack(char, target, combatLog, char.Equipment.Weapon); if (char.Equipment.OffHand.Type === "Weapon") {
            ArmorIgnoringAttack(char, target, combatLog, char.Equipment.OffHand)
        }
    }
}
export class Rage extends Ability {
    constructor(name, cost, description) {
        super(name = "Rage", cost = 5, description = "Temporarilyy gain a +2 Bonus to STR")
    }
    AbilityEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " enters a rage"); CheckIfBuffApplied(char, new RageBuff(3), combatLog) }
}
export class RaiseShield extends Ability {
    constructor(name, cost, description) {
        super(name = "Raise Shield", cost = 5, description = "Raises a Shield to Give a +2 Shield Bonus")
    }
    AbilityEffect(char, allies, enemies, target, combatLog) { if (char.Equipment.OffHand.SubType === "Shield") { AddToCombatLog(combatLog, char.Name + " raises their shield"); CheckIfBuffApplied(char, new ShieldBuff(3), combatLog) } else { AddToCombatLog(combatLog, char.Name + " does not have a shield to raise.") } }
}
export class StudyFoes extends Ability {
    constructor(name, cost, description) {
        super(name = "Study Foes", cost = 5, description = "Temporarily gain a +2 bonus to Attack")
    }
    AbilityEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " studies their  foes"); CheckIfBuffApplied(char, new AttackBonusBuff(3), combatLog) }
}