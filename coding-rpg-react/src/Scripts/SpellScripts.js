import { HasEnoughMP, UseMP } from "./CharacterScripts";

export function CastSpell(char, spell, target, combatLog) {
    if (HasEnoughMP(char, spell.ManaCost) === true) {
        if (spell.Target === "Single Ally" || spell.Target === "Single Enemy") {
            UseMP(char, spell.ManaCost)
        }
        spell.SpellEffect(target)
        if (spell.Type === "Damage") {
            combatLog.push(char.Name + " fires a " + spell.Name + " at " + target.Name + ", dealing " + spell.SpellDamage + " " + spell.DamageType)
        }
        if (spell.Type === "Heal") {
            combatLog.push(char.Name + " casts a " + spell.Name + " on " + target.Name + ", healing " + spell.HealingAmount + " HP")
        }
    }
    else {
        combatLog.push(char.Name + "didn't have enough MP and  " + spell.Name + " fizzled.")
    }
}