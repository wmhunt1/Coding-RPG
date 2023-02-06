import { rage } from "./Abilities";
import { BasicAttack } from "../Scripts/CombatScripts"
import { UseAbility } from "../Scripts/SpellScripts";

export function BasicAttacker(char, allies, enemies, combatLog, round) {
    var enemyOverZero = []
    for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].CurrentHP > 0) {
            enemyOverZero.push(enemies[e])
        }
    }
    if (enemyOverZero.length > 0) {
        const randomEnemy = Math.floor(Math.random() * enemyOverZero.length);
        BasicAttack(char, enemyOverZero[randomEnemy], combatLog)
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