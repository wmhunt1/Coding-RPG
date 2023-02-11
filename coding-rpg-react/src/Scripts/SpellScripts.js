import { conjurationSkill, restorationSkill } from "../Database/SkillsDB";
import { HasEnoughMP, UseMP, HasEnoughSP, UseSP } from "./CharacterScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "./SkillScripts";
export function CalculateHealAmount(char, baseHeal) {
    var extraHeal = Math.round((FindSkillInSkillBook(char, restorationSkill()).Level + char.Wisdom + char.WisBonus - char.WisPenalty) / 10)
    var heal = baseHeal + extraHeal
    return heal;
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