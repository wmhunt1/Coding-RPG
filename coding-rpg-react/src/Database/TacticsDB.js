import { rage } from "./AbilitiesDB";
import { basicHeal, summonSpider, webSpell } from "./SpellsDB";
import { CastSpell, CheckIfKnowsAbility, CheckIfKnowsSpell, UseAbility } from "../Scripts/AbilityAndSpellScripts";
import { BasicAttack } from "../Scripts/CombatScripts"

export function tacticsList() {
    var tacticsList = [{ Name: "Basic Attacker", Desc: "Use only basic attacks" }, { Name: "Basic Healer", Desc: "Cast Basic Heal when a ally has <= MaxHP" }, { Name: "Rager", Desc: "Use Rage on first round" }]
    return tacticsList
}
export function BasicAttacker(char, allies, enemies, combatLog, round) {
    var enemyOverZero = []
    for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].BaseStats.HP.Current > 0) {
            enemyOverZero.push(enemies[e])
        }
    }
    if (enemyOverZero.length > 0) {
        const randomEnemy = Math.floor(Math.random() * enemyOverZero.length);
        BasicAttack(char, enemyOverZero[randomEnemy], combatLog, char.Equipment.Weapon)
        if (char.Equipment.OffHand.SubType === "Weapon" && char.Equipment.OffHand.Name !== "Empty") {
            BasicAttack(char, enemyOverZero[randomEnemy], combatLog, char.Equipment.OffHand)
        }
    }
}
export function BasicHealer(char, allies, enemies, combatLog, round) {
    if (char.BaseStats.MP.Current > 0 && CheckIfKnowsSpell(char, basicHeal()) !== null) {
        var alliesUnderHalf = []
        for (var a = 0; a < allies.length; a++) {
            if (allies[a].BaseStats.HP.Current <= allies[a].BaseStats.HP.Max / 2) {
                alliesUnderHalf.push(allies[a])
            }
        }
        if (alliesUnderHalf.length > 0) {
            CastSpell(char, allies, enemies, alliesUnderHalf[0], combatLog, basicHeal())
        }
        else {
            BasicAttacker(char, allies, enemies, combatLog)
        }
    }
    else {
        BasicAttacker(char, allies, enemies, combatLog)
    }
}
export function Rager(char, allies, enemies, combatLog, round) {
    if (round > 1) {
        BasicAttacker(char, allies, enemies, combatLog)
    }
    else {
        if (CheckIfKnowsAbility(char, rage()) !== null) {
            UseAbility(char, allies, enemies, char, combatLog, rage())
        }
        else {
            BasicAttacker(char, allies, enemies, combatLog)
        }
    }
}
export function Webber(char, allies, enemies, combatLog, round) {
    if (round > 1) {
        BasicAttacker(char, allies, enemies, combatLog)
    }
    else {
        CastSpell(char, allies, enemies, enemies[0], combatLog, webSpell())
    }
}
export function spiderSummoner(char, allies, enemies, combatLog, round) {
    if (char.BaseStats.MP.Current > 0) {
        CastSpell(char, allies, enemies, enemies[0], combatLog, summonSpider())
    }
    else {
        BasicAttacker(char, allies, enemies, combatLog)
    }
}