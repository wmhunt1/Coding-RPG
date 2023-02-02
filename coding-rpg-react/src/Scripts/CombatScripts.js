import { AddGold, EarnXP, TakeDamage } from "./CharacterScripts";
export function Attack(char1, char2, combatLog) {
    //console.log(char1.Name + " attacker")
    combatLog.push(char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name);
    var crit = false;
    var char1Damage = char1.Strength + char1.Weapon.Damage
    //console.log(char1Damage + " char1 damage")
    var char2Armor = char2.Torso.Protection;
    //console.log(char2Armor + " char2 armor")
    var char2Defense = char2Armor + char2.Dexterity
    //console.log(char2Defense + " char2 defense")
    var baseDamage = char1Damage - char2Defense;
    //console.log(baseDamage + " base damage")
    var totalDamage = baseDamage;
    //console.log(totalDamage + " total damage")
    var critChance = Math.floor(Math.random() * 100) + 1 + char1.Luck;
    //console.log(critChance + " critchance %")
    if (critChance >= 75)
    {
        crit = true;
    }
    if (crit === true)
    {
        totalDamage *= 2;
    }
    //console.log(totalDamage + " total damage")
    TakeDamage(char2, totalDamage)
    if (totalDamage <= 0)
    {
        if (char2Armor > char2.Dexterity)
        {
            combatLog.push(char2.Name + "'s Armor deflects " + char2.Name + "'s attack")
        }
        else
        {
            combatLog.push(char2.Name + " dodges " + char2.Name + "'s attack")
        }
    }
    else if (totalDamage > baseDamage)
    {
        combatLog.push(char1.Name + " deals " + totalDamage + " critical damage to " + char2.Name)
    }
    else
    {
        combatLog.push(char1.Name + " deals " + totalDamage + " damage to " + char2.Name)
    }
    //console.log(char2.Name + " " + char2.CurrentHP + " HP ")
    if (char2.CurrentHP <= 0) {
        EarnXP(char1, char2.CurrentXP)
        AddGold(char1, char2.Gold)
    }
}
export function CombatRound(char1, enemies, target, combatLog, option) {
    if (char1.CurrentHP > 0) {
        if (option === "Attack") {
            Attack(char1, target, combatLog)
        }
    }
    for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].Enemy.CurrentHP > 0) {
            Attack(enemies[e].Enemy, char1, combatLog)
        }
    }
}