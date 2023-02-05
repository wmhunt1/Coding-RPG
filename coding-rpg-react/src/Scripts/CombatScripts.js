import { AddGold, AddItemToInventory, EarnXP, RemoveAllBuffs, RemoveAllDeBuffs, TakeDamage, UseMP, UseSP } from "./CharacterScripts";
import { CastSpell, UseAbility } from "./SpellScripts";
export function CalculateCharDamage(char) {
    var damage = char.Strength + char.Weapon.Damage + char.StrBonus - char.StrPenalty;
    return damage;
}
export function CalculateCharArmor(char) {
    var armor = char.Torso.Protection;
    return armor;
}
export function CalculateCharDefenseWithArmor(char, armor) {
    var defense = armor + char.Dexterity + char.DexBonus - char.DexPenalty
    return defense;
}
export function CalculateCharDefenseWithoutArmor(char) {
    var defense = char.Dexterity + char.DexBonus - char.DexPenalty
    return defense;
}
export function CalculateBaseDamage(damage, defense) {
    //later include conditions and immunities etc
    return damage - defense
}
export function CalculateCritDamage(char1, damage) {
    var crit = false;
    var critChance = Math.floor(Math.random() * 100) + 1 + char1.Luck;
    if (critChance >= 75) {
        crit = true;
    }
    if (crit === true) {
        damage *= 2;
    }
    return damage;
}
export function BasicAttackResults(char1, char2, combatLog, baseDamage, totalDamage, char2Armor) {
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
export function BasicAttack(char1, char2, combatLog) {
    combatLog.push(char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name)
    var char1Damage = CalculateCharDamage(char1)
    var char2Armor = CalculateCharArmor(char2)
    var char2Defense = CalculateCharDefenseWithArmor(char2, char2Armor)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var totalDamage = CalculateCritDamage(char1, baseDamage)
    TakeDamage(char2, totalDamage)
    BasicAttackResults(char1, char2, combatLog, baseDamage, totalDamage, char2Armor)
}
export function SneakAttackResults(char1, char2, combatLog, baseDamage, totalDamage) {
    if (totalDamage <= 0) {

        combatLog.push(char2.Name + " dodges " + char2.Name + "'s attack")
    }
    else if (totalDamage > baseDamage) {
        combatLog.push(char1.Name + " deals " + totalDamage + " critical damage to " + char2.Name)
    }
    else {
        combatLog.push(char1.Name + " deals " + totalDamage + " damage to " + char2.Name)
    }
}
export function SneakAttack(char1, char2, combatLog) {
    combatLog.push(char1.Name + " sneak attacks " + char2.Name + " with their " + char1.Weapon.Name)
    var char1Damage = CalculateCharDamage(char1)
    var char2Defense = CalculateCharDefenseWithoutArmor(char2)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var totalDamage = CalculateCritDamage(char1, baseDamage)
    TakeDamage(char2, totalDamage)
    SneakAttackResults(char1, char2, combatLog, baseDamage, totalDamage)

}
export function AllyTurn(char1, allies, enemies, target, combatLog, option, spell, abil) {
    if (char1.CurrentHP > 0) {
        if (option === "Basic Attack") {
            BasicAttack(char1, target, combatLog);
        }
        if (option !== "Basic Attack" && abil != null) {
            if (abil.Type === "Self") {
                UseAbility(char1, abil, char1, combatLog);
            }
            else if (abil.Type === "Attack") {
                if (abil.Target === "Single Enemy") {
                    UseAbility(char1, abil, target, combatLog)
                }
                if (abil.Target === "Enemies") {
                    for (let e = 0; e < enemies.length; e++) {
                        UseAbility(char1, abil, enemies[e], combatLog);
                    }
                    UseSP(char1, abil.StaminaCost)
                }
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
                BasicAttack(allies[a], enemyOverZero[randomEnemy], combatLog)
            }
        }
    }
}
export function EnemyTurn(allies, enemies, combatLog) {
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
                BasicAttack(enemies[e], allyOverZero[randomAlly], combatLog)
            }
        }
    }
}
export function CalculateAverageSpeed(team) {
    var speed = 0;
    for (let t = 0; t < team.length; t++) {
        if (team[t].CurrentHP > 0) {
            speed += team[t].Speed;
        }
    }
    speed /= team.length;
    return speed;
}
export function CombatRound(char1, allies, enemies, target, combatLog, option, spell, abil) {
    var AllySpeed = CalculateAverageSpeed(allies);
    var EnemySpeed = CalculateAverageSpeed(enemies);
    if (AllySpeed >= EnemySpeed) {
        AllyTurn(char1, allies, enemies, target, combatLog, option, spell, abil)
        EnemyTurn(allies, enemies, combatLog)
    }
    else {
        EnemyTurn(allies, enemies, combatLog)
        AllyTurn(char1, allies, enemies, target, combatLog, option, spell, abil)
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