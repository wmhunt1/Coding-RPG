import { alterationSkill, conjurationSkill, illusionSkill, restorationSkill } from "../Database/SkillsDB";
import { HasEnoughMP, UseMP, HasEnoughSP, UseSP } from "./CharacterScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "./SkillScripts";
export function CalculateHealAmount(char, baseHeal) {
    var extraHeal = Math.round((FindSkillInSkillBook(char, restorationSkill()).Level + char.Wisdom + char.WisBonus - char.WisPenalty) / 10)
    var heal = baseHeal + extraHeal
    return heal;
}
export function CalculateAlterationDuration(char, defaultDuration) {
    var mod = Math.round((FindSkillInSkillBook(char, alterationSkill()).Level + char.Charisma + char.ChaBonus - char.ChaPenalt) / 10)
    return defaultDuration + mod;
}
export function CalculateConjurationDuration(char, defaultDuration) {
    var mod = Math.round((FindSkillInSkillBook(char, conjurationSkill()).Level + char.WillPower + char.WlpBonus - char.WlpPenalty) / 10)
    return defaultDuration + mod;
}
export function CalculateIllusionBuff(char, defaultBuff) {
    var mod = Math.round((FindSkillInSkillBook(char, illusionSkill()).Level + char.Charisma + char.ChaBonus - char.ChaPenalty) / 10)
    return defaultBuff + mod;
}
export function CalculateIllusionDuration(char, defaultDuration) {
    var mod = Math.round((FindSkillInSkillBook(char, illusionSkill()).Level + char.Charisma + char.ChaBonus - char.ChaPenalty) / 10)
    return defaultDuration + mod;
}
export function CalculateRestorationBuff(char, defaultBuff) {
    var mod = Math.round((FindSkillInSkillBook(char, restorationSkill()).Level + char.Wisdom + char.WisBonus - char.WisPenalty) / 10)
    return defaultBuff + mod;
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