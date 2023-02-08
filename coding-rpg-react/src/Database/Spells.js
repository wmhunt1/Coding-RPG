import { ApplyCondition, HealHP, RemoveCondition } from "../Scripts/CharacterScripts";
import { AddToCombatLog, ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { rat } from "./Characters";
import { poisonCondition, sleepCondition } from "./Conditions";
import { fireDamage, forceDamage, poisonDamage } from "./DamageTypes";

//control spells
export function sleepSpell()
{
    var sleep = { Name: "Sleep", ManaCost: 10, Description: "Puts all foes to sleep", Amount: 0, DamageType: "None", SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " puts all foes to sleep"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], sleepCondition(), combatLog) } } }
    return sleep;
}
//condition spell
export function poisonSpray() {
    var poisonSpray = { Name: "Poison Spray", ManaCost: 10, Description: "A Spray of Poison that Poisons all Foes", Amount: 5, DamageType: poisonDamage(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " sprays all foes with poison"); for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], poisonCondition(this.Amount), combatLog) } } }
    return poisonSpray;
}
//damage spells
export function fireBall() {
    var fireBall = { Name: "Fire Ball", ManaCost: 10, Description: "Ball of Fire that deals 10 Fire Damage to All Foes", Amount: 10, DamageType: fireDamage(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " launches a fireball at the enemies"); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(char, enemies[e], combatLog, this) } } }
    return fireBall;
}
export function magicMissile() {
    var magicMissile = { Name: "Magic Missile", ManaCost: 5, Description: "Missile of Magical Force that deals 5 Force Damage to One Foe", Amount: 5, DamageType: forceDamage(), SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " fires a " + this.Name + " at " + target.Name); ProjectileMagicAttack(char, target, combatLog, this) } }
    return magicMissile;
}
//healing spells
//condition spells
export function curePoison()
{
    var curePoison = {Name: "Cure Poison", ManaCost: 5, Description: "Cures One Ally of Poison", SpellEffect(char, allies, enemies, target, combatLog) {if (target.Condition.Name === "Poison") { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", curing their poison"); RemoveCondition(target, combatLog) }else{AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", but " + target.Name + " was not poisoned.")}}}
    return curePoison
}
//health spells
export function basicHeal() {
    var basicHeal = { Name: "Basic Heal", ManaCost: 5, Description: "Heals One Ally for 5HP", SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for" + this.Amount + " Health"); HealHP(target, this.Amount) } }
    return basicHeal;
}
export function basicMassHeal() {
    var basicHeal = { Name: "Basic Mass Heal", ManaCost: 5, Description: "Heals All Allies for 5HP", SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the party, healing them for" + this.Amount + " Health"); for (var a = 0; a < allies.length; a++){HealHP(allies[a], this.Amount)} } }
    return basicHeal;
}
//summoning spells
export function summonRat()
{
    var summonRat = {Name : "Summon Rat", ManaCost: 5, Description: "Summons a Rat to fight", Summon: rat(), SpellEffect(char, allies, enemies, target, combatLog){AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name); allies.push(this.Summon); }}
    return summonRat;
}