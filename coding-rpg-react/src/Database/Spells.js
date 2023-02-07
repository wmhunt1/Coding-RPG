import { ApplyCondition, HealHP } from "../Scripts/CharacterScripts";
import { ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { poisonCondition, sleepCondition } from "./Conditions";
import { fireDamage, forceDamage, poisonDamage } from "./DamageTypes";

//control spells
export function sleepSpell()
{
    var sleep = { Name: "Sleep", ManaCost: 10, Description: "Puts all foes to sleep", Amount: 0, DamageType: "None", SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " puts all foes to sleep"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], sleepCondition(), combatLog) } } }
    return sleep;
}
//condition spell
export function poisonSpray() {
    var poisonSpray = { Name: "Poison Spray", ManaCost: 10, Description: "A Spray of Poison that Poisons all Foes", Amount: 5, DamageType: poisonDamage(), SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " sprays all foes with poison"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], poisonCondition(this.Amount), combatLog) } } }
    return poisonSpray;
}
//damage spells
export function fireBall() {
    var fireBall = { Name: "Fire Ball", ManaCost: 10, Description: "Ball of Fire that deals 10 Fire Damage to All Foes", Amount: 10, DamageType: fireDamage(), SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " launches a fireball at the enemies"); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(char, enemies[e], combatLog, this) } } }
    return fireBall;
}
export function magicMissile() {
    var magicMissile = { Name: "Magic Missile", ManaCost: 5, Description: "Missile of Magical Forcer that deals 5 Force Damage to One Foe", Amount: 5, DamageType: forceDamage(), SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " fires a " + this.Name + " at " + target.Name); ProjectileMagicAttack(char, target, combatLog, this) } }
    return magicMissile;
}
//healing spells
export function basicHeal() {
    var basicHeal = { Name: "Basic Heal", ManaCost: 5, Description: "Heals One Ally for 5HP", Amount: 5, DamageType: "Hone", SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for" + this.Amount + " Health"); HealHP(target, this.Amount) } }
    return basicHeal;
}