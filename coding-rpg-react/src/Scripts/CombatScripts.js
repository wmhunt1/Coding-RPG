import { EarnXP, TakeDamage } from "./CharacterScripts";
export function Attack(char1, char2, combatLog, log) {
    combatLog.push(char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name);
    TakeDamage(char2, char1.Strength+char1.Weapon.Damage)
    if (char2.CurrentHP <= 0) {
        EarnXP(char1, char2.CurrentXP, log)
    }
}
export function CombatRound(char1, enemies, target, combatLog, log) {
    if (char1.CurrentHP > 0) {
        Attack(char1, target, combatLog, log)
    }
    for (let e = 0; e < enemies.length; e++) {
        if(enemies[e].CurrentHP > 0)
        {
            Attack(enemies[e], char1, combatLog, log)
        }
    }
}