import { EarnXP, TakeDamage } from "./CharacterScripts";
export function Attack(char1, char2) {
    console.log(char1.Name + " attacks " + char2.Name)
    TakeDamage(char2, char1.Strength)
    if (char2.CurrentHP <= 0) {
        EarnXP(char1, char2.CurrentXP)
    }
}
export function CombatRound(char1, enemies, target) {
    if (char1.CurrentHP > 0) {
        Attack(char1, target)
    }
    for (let e = 0; e < enemies.length; e++) {
        if(enemies[e].CurrentHP > 0)
        {
            Attack(enemies[e], char1)
        }
    }
}