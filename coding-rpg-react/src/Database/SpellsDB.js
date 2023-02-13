import { ApplyCondition, HealHP, RemoveCondition } from "../Scripts/CharacterScripts";
import { AddToCombatLog, ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { CalculateAlterationDuration,CalculateConjurationDuration, CalculateHealAmount, CalculateIllusionDuration, ModifySummon } from "../Scripts/SpellScripts";
import { rat, skeleton } from "./CharactersDB";
import { poisonCondition, sleepCondition, webCondition } from "./ConditionsDB";
import { fireDamage, forceDamage, noDamage, poisonDamage } from "./DamageTypesDB";
import { alterationSkill, conjurationSkill, destructionSkill, illusionSkill, restorationSkill } from "./SkillsDB";

//control spells
export function sleepSpell() {
    var sleep = { Name: "Sleep", School: illusionSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "Puts all foes to sleep", Amount: 0, DamageType: noDamage(), SpellEffect(char, allies, enemies, target, combatLog) {var calcDuration = CalculateIllusionDuration(char, 3); AddToCombatLog(combatLog, char.Name + " puts all foes to sleep"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], sleepCondition(0, calcDuration), combatLog) } } }
    return sleep;
}
export function webSpell() {
    var web = { Name: "Sleep", School: conjurationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "Webs all foes", Amount: 0, DamageType: noDamage(), SpellEffect(char, allies, enemies, target, combatLog) {var calcDuration = CalculateConjurationDuration(char, 3); AddToCombatLog(combatLog, char.Name + " webs all foes"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], webCondition(0, calcDuration), combatLog) } } }
    return web;
}
//conditon
export function poisonSpray() {
    var poisonSpray = { Name: "Poison Spray", School: alterationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "A Spray of Poison that Poisons all Foes", Amount: 5, DamageType: poisonDamage(), SpellEffect(char, allies, enemies, target, combatLog) { var calcDuration = CalculateAlterationDuration(char, 3); AddToCombatLog(combatLog, char.Name + " sprays all foes with poison"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], poisonCondition(this.Amount, calcDuration), combatLog) } } }
    return poisonSpray;
}
//damage spells
export function fireBall() {
    var fireBall = { Name: "Fire Ball", School: destructionSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "Ball of Fire that deals 10 Fire Damage to All Foes", Amount: 10, DamageType: fireDamage(),
     SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " launches a fireball at the enemies"); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(char, enemies[e], combatLog, this) } } }
    return fireBall;
}
export function magicMissile() {
    var magicMissile = { Name: "Magic Missile", School: destructionSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 5, Description: "Missile of Magical Force that deals 5 Force Damage to One Foe", Amount: 5, DamageType: forceDamage(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " fires a " + this.Name + " at " + target.Name); ProjectileMagicAttack(char, target, combatLog, this) } }
    return magicMissile;
}
//healing spells
//condition spells
export function curePoison() {
    var curePoison = { Name: "Cure Poison", School: restorationSkill(), LevelRequirement: 1, Use: "Hybrid", ManaCost: 5, Description: "Cures One Ally of Poison", SpellEffect(char, allies, enemies, target, combatLog) { if (target.Condition.Name === "Poison") { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", curing their poison"); RemoveCondition(target, combatLog) } else { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", but " + target.Name + " was not poisoned.") } } }
    return curePoison
}
//health spells
export function basicHeal() {
    var basicHeal = { Name: "Basic Heal", School: restorationSkill(), LevelRequirement: 1, Use: "Hybrid", Amount: 5, ManaCost: 5, Description: "Heals One Ally for 5HP", SpellEffect(char, allies, enemies, target, combatLog) { var totalHeal = CalculateHealAmount(char, this.Amount); AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for " + totalHeal + " Health"); HealHP(target, totalHeal) } }
    return basicHeal;
}
export function basicMassHeal() {
    var basicHeal = { Name: "Basic Mass Heal", School: restorationSkill(), LevelRequirement: 1, Use: "Hybrid", Amount: 5, ManaCost: 5, Description: "Heals All Allies for 5HP", SpellEffect(char, allies, enemies, target, combatLog) { var totalHeal = CalculateHealAmount(char, this.Amount); AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the party, healing them for " + totalHeal + " Health"); for (var a = 0; a < allies.length; a++) { HealHP(allies[a], totalHeal) } } }
    return basicHeal;
}
//summoning spells
export function summonRat() {
    var summonRat = { Name: "Summon Rat", School: conjurationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 5, Description: "Summons a Rat to fight", Summon: rat(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name); ModifySummon(char, allies, this.Summon) } }
    return summonRat;
}
export function summonSkeleton() {
    var summon = { Name: "Summon Skeleton", School: conjurationSkill(), LevelRequirement: 10, Use: "Combat", ManaCost: 10, Description: "Summons a Skeleton to fight", Summon: skeleton(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name); ModifySummon(char, allies, this.Summon) } }
    return summon;
}