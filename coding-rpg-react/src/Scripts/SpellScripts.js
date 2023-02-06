import { HasEnoughMP, UseMP, HasEnoughSP, UseSP } from "./CharacterScripts";
export function CastSpell(char, spell, target, combatLog) {
    if (HasEnoughMP(char, spell.ManaCost) === true) {
        if (spell.Target === "Single Ally" || spell.Target === "Single Enemy") {
            UseMP(char, spell.ManaCost)
        }
        spell.SpellEffect(char, target, combatLog)
        if (spell.Type === "Damage") {
        }
        if (spell.Type === "Heal") {
            combatLog.push(char.Name + " casts a " + spell.Name + " on " + target.Name + ", healing " + spell.Amount + " HP")
        }
    }
    else {
        combatLog.push(char.Name + "didn't have enough MP and  " + spell.Name + " fizzled.")
    }
}
export function UseAbility(char, abil, target, combatLog) {
    if (HasEnoughSP(char, abil.StaminaCost) === true) {
        if (abil.Target === "Single Ally" || abil.Target === "Single Enemy") {
            UseSP(char, abil.StaminaCost)
        }
        combatLog.push(char.Name + " uses " + abil.Name)
        abil.AbilityEffect(char, target, combatLog)
    }
    else {
        combatLog.push(char.Name + "didn't have enough SP")
    }
}