import { conjurationSkill } from "../Database/SkillsDB";
import { HasEnoughMP, UseMP, HasEnoughSP, UseSP } from "./CharacterScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "./SkillScripts";
export function CalculateSpellBonus(char, spell, attr, attrB, attrP, base) {
    var extra = Math.round((FindSkillInSkillBook(char, spell.School).Level + attr + attrB - attrP) / 10)
    return extra + base;
}
export function ModifySummon(char, allies, summon) {
    var mod = Math.round((FindSkillInSkillBook(char, conjurationSkill()).Level + char.Charisma + char.ChaBonus - char.ChaPenalty) / 10)
    summon.TempHP += mod;
    summon.StrBonus += mod;
    summon.DexBonus += mod;
    allies.push(summon);
}
export function CastSpell(char, allies, enemies, target, combatLog, spell) {
    var skillLevelIndex = char.SkillBook.findIndex(x => x.Name === spell.School.Name)
    var level = char.SkillBook[skillLevelIndex].Level;
    if (spell.LevelRequirement <= level) {
        if (HasEnoughMP(char, spell.ManaCost) === true) {
            UseMP(char, spell.ManaCost)
            spell.SpellEffect(char, allies, enemies, target, combatLog)
            var skillIndex = char.SkillBook.findIndex(x => x.Name === spell.School.Name);
            EarnSkillXP(char, char.SkillBook[skillIndex], spell.ManaCost)

        }
        else {
            combatLog.push(char.Name + "didn't have enough MP to cast  " + spell.Name + " and the spell fizzled.")
        }
    }
    else {
        combatLog.push(char.Name + "didn't have a high enough skill to cast " + spell.Name + " and the spell fizzled.")
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
export function CheckIfKnowsAbility(char, abil) {
    var index = null
    if (char.Abilities.find(x => x.Name === abil.Name)) {
        index = char.Abilities.findIndex(x => x.Name === abil.Name);
    }
    return index
}
export function CheckIfKnowsSpell(char, spell) {
    var index = null
    if (char.SpellBook.find(x => x.Name === spell.Name)) {
        index = char.SpellBook.findIndex(x => x.Name === spell.Name);
    }
    return index
}
export function LearnAbility(char, abil) {
    if (char.Abilites.find(x => x.Name === abil.Name)) {
        char.Log.push(char.Name + " already knows " + abil.Name)
    }
    else {
        char.Abilites.push(abil);
        char.Log.push(char.Name + " learns " + abil.Name)
    }
}
export function LearnSpell(char, spell) {
    if (char.SpellBook.find(x => x.Name === spell.Name)) {
        char.Log.push(char.Name + " already knows " + spell.Name)
    }
    else {
        char.SpellBook.push(spell);
        char.Log.push(char.Name + " learns " + spell.Name)
    }
}