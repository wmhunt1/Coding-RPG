import { HasEnoughMP, UseMP, HasEnoughSP, UseSP } from "./CharacterScripts";
export function CastSpell(char, allies, enemies, target, combatLog, spell) {
    if (HasEnoughMP(char, spell.ManaCost) === true) {
        UseMP(char, spell.ManaCost)
        spell.SpellEffect(char, allies, enemies, target, combatLog)
    }
    else {
        combatLog.push(char.Name + "didn't have enough MP and  " + spell.Name + " fizzled.")
    }
}
export function UseAbility(char, allies, enemies, target, combatLog, abil) {
    if (HasEnoughSP(char, abil.StaminaCost) === true) {
        UseSP(char, abil.StaminaCost)
        abil.AbilityEffect(char, allies, enemies, target, combatLog)
    }
    else {
        combatLog.push(char.Name + "didn't have enough SP")
    }
}