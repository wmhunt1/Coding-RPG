import { AddGold, AddItemToInventory, EarnXP, RemoveAllBuffs, RemoveAllDeBuffs, TakeDamage, UseMP } from "./CharacterScripts";
import { CastSpell, UseAbility } from "./SpellScripts";
export function Attack(char1, char2, combatLog) {
    combatLog.push(char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name)
    var crit = false;
    var char1Damage = char1.Strength + char1.Weapon.Damage + char1.StrBonus - char1.StrPenalty
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
            combatLog.push(char2.Name + "'s Armor deflects " + char2.Name + "'s attack")
        }
        else {
            combatLog.push(char2.Name + " dodges " + char2.Name + "'s attack")
        }
    }
    else if (totalDamage > baseDamage) {
        combatLog.push(char1.Name + " deals " + totalDamage + " critical damage to " + char2.Name)
    }
    else {
        combatLog.push(char1.Name + " deals " + totalDamage + " damage to " + char2.Name)
    }
}
export function CombatRound(char1, allies, enemies, target, combatLog, option, spell, abil) {
    if (char1.CurrentHP > 0) {
        if (option === "Basic Attack") {
            Attack(char1, target, combatLog);
        }
        if (option !== "Basic Attack" && abil != null) {
            if (abil.Type === "Self") {
                UseAbility(char1, abil, char1, combatLog);
            }
        }
        if (option !== "Basic Attack" && spell !== null) {
            if (spell.Target === "Single Enemy") {
                CastSpell(char1, spell, target, combatLog);
            }
            if (spell.Target === "Single Ally") {
                CastSpell(char1, spell, target, combatLog);
            }
            if (spell.Target === "Allies") {
                for (let a = 0; a < allies.length; a++) {
                    CastSpell(char1, spell, allies[a], combatLog);
                }
                UseMP(char1, spell.ManaCost)
            }
            if (spell.Target === "Enemies") {
                for (let e = 0; e < enemies.length; e++) {
                    CastSpell(char1, spell, enemies[e], combatLog);
                }
                UseMP(char1, spell.ManaCost)
            }
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
export function CombatRewards(hero, allies, enemies) {
    for (var e = 0; e < enemies.length; e++) {
        for (var a = 0; a < allies.length; a++) {
            EarnXP(allies[a], enemies[e].CurrentXP);
            RemoveAllBuffs(allies[a])
        }
        AddGold(hero, enemies[e].Gold)
        if (enemies[e].ItemDrops.length > 0) {
            const randomDrop = Math.floor(Math.random() * enemies[e].ItemDrops.length);
            AddItemToInventory(hero, hero.Inventory, enemies[e].ItemDrops[randomDrop])
        }
    }
    for (var a2 = 0; a2 < allies.length; a2++) {
        RemoveAllBuffs(allies[a2])
        RemoveAllDeBuffs(allies[a2])
    }
}