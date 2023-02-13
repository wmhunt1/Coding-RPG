import { rage } from "./AbilitiesDB";
import { BasicAttack } from "../Scripts/CombatScripts"
import { CastSpell, UseAbility } from "../Scripts/SpellScripts";
import { basicHeal } from "./SpellsDB";

export function BasicAttacker(char, allies, enemies, combatLog, round) {
    var enemyOverZero = []
    for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].CurrentHP > 0) {
            enemyOverZero.push(enemies[e])
        }
    }
    if (enemyOverZero.length > 0) {
        const randomEnemy = Math.floor(Math.random() * enemyOverZero.length);
        BasicAttack(char, enemyOverZero[randomEnemy], combatLog, char.Weapon)
        if (char.OffHand.SubType === "Weapon" && char.OffHand.Name !== "Empty") {
            BasicAttack(char, enemyOverZero[randomEnemy], combatLog, char.OffHand)
        }
    }
}
export function BasicHealer(char, allies, enemies, combatLog, round) {
    if (char.CurrentMP > 0) {
        var alliesUnderHalf = []
        for (var a = 0; a < allies.length; a++) {
            if (allies[a].CurrentHP <= allies[a].MaxHP / 2) {
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
        UseAbility(char, rage(), char, combatLog)
    }

}