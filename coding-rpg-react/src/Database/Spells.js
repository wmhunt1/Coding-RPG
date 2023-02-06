import { HealHP } from "../Scripts/CharacterScripts";
import { ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { fireDamage, forceDamage } from "./DamageTypes";

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
    var basicHeal = { Name: "Basic Heal", ManaCost: 5, Description: "Heals One Ally for 5HP", Amount: 5, DamageType: "Healing", SpellEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for" + this.Amount + " Health"); HealHP(target, this.Amount) } }
    return basicHeal;
}