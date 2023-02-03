import { AddGold, AddItemToInventory, EarnXP, TakeDamage } from "./CharacterScripts";
export function Attack(char1, char2, combatLog) {
    combatLog.push(", " + char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name);
    var crit = false;
    var char1Damage = char1.Strength + char1.Weapon.Damage
    var char2Armor = char2.Torso.Protection;
    var char2Defense = char2Armor + char2.Dexterity
    var baseDamage = char1Damage - char2Defense;
    var totalDamage = baseDamage;
    var critChance = Math.floor(Math.random() * 100) + 1 + char1.Luck;
    if (critChance >= 75) {
        crit = true;
    }
    if (crit === true) {
        totalDamage *= 2;
    }
    TakeDamage(char2, totalDamage)
    if (totalDamage <= 0) {
        if (char2Armor > char2.Dexterity) {
            combatLog.push(", " + char2.Name + "'s Armor deflects " + char2.Name + "'s attack")
        }
        else {
            combatLog.push(", " + char2.Name + " dodges " + char2.Name + "'s attack")
        }
    }
    else if (totalDamage > baseDamage) {
        combatLog.push(", " + char1.Name + " deals " + totalDamage + " critical damage to " + char2.Name)
    }
    else {
        combatLog.push(", " + char1.Name + " deals " + totalDamage + " damage to " + char2.Name)
    }
}
export function CombatRound(char1, allies, enemies, target, combatLog, option) {
    if (char1.CurrentHP > 0) {
        if (option === "Attack") {
            Attack(char1, target, combatLog)
        }
    }
    for (let a = 1; a < allies.length; a++) {
        if (allies[a].CurrentHP > 0) {
            var enemyOverZero = []
            for (let e = 0; e < enemies.length; e++) {
                if (enemies[e].CurrentHP > 0) {
                    enemyOverZero.push(enemies[e])
                }
            }
            if (enemyOverZero.length > 0) {
                const randomEnemy = Math.floor(Math.random() * enemyOverZero.length);
                Attack(allies[a], enemyOverZero[randomEnemy], combatLog)
            }
        }
    }
    for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].CurrentHP > 0) {
            var allyOverZero = []
            for (let a = 0; a < allies.length; a++) {
                if (allies[a].CurrentHP > 0) {
                    allyOverZero.push(allies[a])
                }
            }
            if (allyOverZero.length > 0) {
                const randomAlly = Math.floor(Math.random() * allyOverZero.length);
                Attack(enemies[e], allyOverZero[randomAlly], combatLog)
            }
        }
    }
}
export function CombatRewards(hero, allies, enemies)
{
    for (var e = 0; e < enemies.length; e++)
    {
        for (var a = 0; a < allies.length; a++)
        {
            EarnXP(allies[a], enemies[e].CurrentXP);
        }
        AddGold(hero, enemies[e].Gold)
        if (enemies[e].ItemDrop.Name !== "None") {
            AddItemToInventory(hero, hero.Inventory, enemies[e].ItemDrop)
        }
    }
}