import { DestructionSkill } from "../Database/SkillsDB";
import { CastSpell, UseAbility } from "./AbilityAndSpellScripts";
import { BuffAndDeBuffDuration, RemoveAllBuffs, RemoveAllDeBuffs, RemoveCondition, ResistCondition } from "./BuffConditionAndDeBuffScripts";
import { AddGold, AddToCharacterLog, EarnXP, Regen, TakeDamage } from "./CharacterScripts";
import { AddItemToInventory } from "./ItemScripts";
import { CheckIfKillQuestObjective } from "./QuestScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "./SkillScripts";
export function AddToCombatLog(log, message) {
    log.push("Combat: " + message)
}
export function CalculateCharWeaponDamage(char, weapon) {
    var attribute = 0;
    var damage = Math.round((FindSkillInSkillBook(char, weapon.Class).Level) / 10)
    if (weapon.Class.Name === "Light Weapon" || weapon.Class.Name === "Ranged") {
        attribute = char.Attributes.Dexterity.Value + char.Attributes.Dexterity.Bonus - char.Attributes.Dexterity.Penalty
    }
    else if (weapon.Class.Name === "Destruction") {
        attribute = char.Attributes.Intelligence.Value + char.Attributes.Intelligence.Bonus - char.Attributes.Intelligence.Penalty
    }
    else {
        attribute = char.Attributes.Strength.Value + char.Attributes.Strength.Bonus - char.Attributes.Strength.Penalty
    }
    damage += weapon.Damage + attribute + char.BaseStats.Attack.Bonus - char.BaseStats.Attack.Penalty;
    return damage;
}
export function CalculateCharArmor(char) {
    var armorSkill = Math.round((FindSkillInSkillBook(char, char.Equipment.Torso.Class).Level) / 10)
    var shield = 0;
    if (char.Equipment.OffHand.SubType === "Shield") {
        var blockSkillIndex = char.SkillBook.findIndex(x => x.Name === "Block");
        var blockSkill = Math.round((char.SkillBook[blockSkillIndex].Level / 10))
        shield = char.Equipment.OffHand.Protection + blockSkill;
    }
    var armor = Math.round((char.Equipment.Head.Protection + char.Equipment.Torso.Protection + char.Equipment.Legs.Protection + char.Equipment.Hands.Protection + char.Equipment.Feet.Protection) / 5) + shield + armorSkill;
    return armor;
}
export function CalculateCharDefenseWithArmor(char, armor) {
    var defense = armor + char.Attributes.Dexterity.Value + char.Attributes.Dexterity.Bonus - char.Attributes.Dexterity.Penalty
    return defense;
}
export function CalculateCharDefenseWithoutArmor(char) {
    var defense = char.Attributes.Dexterity.Value + char.Attributes.Dexterity.Bonus - char.Attributes.Dexterity.Penalty
    return defense;
}
export function CalculateBaseDamage(damage, defense) {
    if (damage - defense >= 0) {
        return damage - defense;
    }
    else {
        return 0
    }
}
export function CalculateDamageModifiers(char, damage, type) {
    var mod = ""
    if (char.DamageModifiers.Immunities.includes(type) === true) {
        damage = 0;
        mod = " (Immune) "
    }
    if (char.DamageModifiers.Resistances.includes(type) === true) {
        damage /= 2;
        mod = " (Resistant) "
    }
    if (char.DamageModifiers.Weaknesses.includes(type) === true) {
        damage *= 2;
        mod = " (Weak) "
    }
    return [damage, mod];
}
export function CalculateCritDamage(char1, damage) {
    var crit = " "
    if (Math.floor(Math.random() * 100) + 1 + char1.Attributes.Luck.Value >= 75) {
        damage *= 2;
        crit = " Critical "
    }
    return [damage, crit];
}
export function BasicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, char2Armor, damageType) {
    var result = "";
    if (baseDamage === 0) {
        var miss = ""
        if (char2Armor > char2.Attributes.Dexterity.Value + char2.Attributes.Dexterity.Bonus - char2.Attributes.Dexterity.Penalty) {
            miss = "'s armor deflects "
        }
        else {
            miss = " dodges "
        }
        result = char2.Name + miss + char1.Name + "'s Attack"
    }
    else {
        result = char1.Name + " deals " + totalDamage[0] + totalDamage[1] + damageType.Name + " damage to " + char2.Name + modifiedDamage[1]
    }
    AddToCombatLog(combatLog, result)
}
export function BasicAttack(char1, char2, combatLog, weapon) {
    AddToCombatLog(combatLog, char1.Name + " attacks " + char2.Name + " with their " + weapon.Name)
    var char1Damage = CalculateCharWeaponDamage(char1, weapon)
    var char2Armor = CalculateCharArmor(char2)
    var char2Defense = CalculateCharDefenseWithArmor(char2, char2Armor)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, weapon.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage[0])
    TakeDamage(char2, totalDamage[0])
    var combatSkillIndex = char1.SkillBook.findIndex(x => x.Name === weapon.Class.Name);
    EarnSkillXP(char1, char1.SkillBook[combatSkillIndex], totalDamage[0])
    var armorSkillIndex = char2.SkillBook.findIndex(x => x.Name === char2.Equipment.Torso.Class.Name);
    EarnSkillXP(char2, char2.SkillBook[armorSkillIndex], totalDamage[0])
    if (char2.Equipment.OffHand.SubType === "Shield") {
        var blockSkillIndex = char1.SkillBook.findIndex(x => x.Name === "Block");
        EarnSkillXP(char2, char2.SkillBook[blockSkillIndex], totalDamage[0])
    }
    BasicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, char2Armor, weapon.DamageType)
    char1.Equipment.Weapon.Enchantment.OnHitEffect(char1, char2, combatLog)
}
export function MagicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, spell) {
    var result = "";
    var miss = "";
    if (baseDamage === 0) {
        if (char2.Attributes.WillPower.Value + char2.Attributes.WillPower.Bonus - char2.Attributes.WillPower.Penalty > char2.Attributes.Dexterity.Value + char2.Attributes.Dexterity.Bonus - char2.Attributes.Dexterity.Penalty) {
            miss = "'s resists with their Willpower "
        }
        else {
            miss = " dodges "
        }
        result = char2.Name + miss + char1.Name + "'s Spell"
    }
    else {
        result = char1.Name + " deals " + totalDamage[0] + totalDamage[1] + spell.DamageType.Name + " damage to " + char2.Name + " with " + spell.Name + modifiedDamage[1]
    }
    AddToCombatLog(combatLog, result)
}
export function ProjectileMagicAttack(char1, char2, combatLog, spell) {
    var skillDamage = Math.round((FindSkillInSkillBook(char1, new DestructionSkill()).Level) / 10)
    var char1Damage = char1.Attributes.Intelligence.Value + char1.Attributes.Intelligence.Bonus - char1.Attributes.Intelligence.Penalty + spell.Amount + skillDamage;
    var char2Defense = (char2.Attributes.WillPower.Value + char2.Attributes.WillPower.Bonus - char2.Attributes.WillPower.Penalty) / 2 + (char2.Attributes.Dexterity.Value + char2.Attributes.Dexterity.Bonus - char2.Attributes.Dexterity.Penalty) / 2;
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense)
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, spell.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage[0])
    TakeDamage(char2, totalDamage[0])
    MagicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, spell)
}
export function ArmorIgnoringAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, damageType) {
    var result = "";
    if (baseDamage === 0) {
        result = char2.Name + " dodges " + char1.Name + "'s Attack"
    }
    else {
        result = char1.Name + " deals " + totalDamage[0] + totalDamage[1] + damageType.Name + " damage to " + char2.Name + modifiedDamage[1]
    }
    AddToCombatLog(combatLog, result)
}
export function ArmorIgnoringAttack(char1, char2, combatLog, weapon) {
    AddToCombatLog(combatLog, char1.Name + " attacks " + char2.Name + " with their " + weapon.Name + ", ignoring their armor")
    var char1Damage = CalculateCharWeaponDamage(char1)
    var char2Defense = CalculateCharDefenseWithoutArmor(char2)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, weapon.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage[0])
    TakeDamage(char2, totalDamage[0])
    var skillIndex = char1.SkillBook.findIndex(x => x.Name === weapon.Class.Name);
    EarnSkillXP(char1, char1.SkillBook[skillIndex], totalDamage[0])
    ArmorIgnoringAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, weapon.DamageType)
    char1.Equipment.Weapon.Enchantment.OnHitEffect(char1, char2, combatLog)
}
export function DamageConditionCheck(char, combatLog) {
    ResistCondition(char, combatLog)
    if (char.Condition.Type === "Damage") {
        var damage = CalculateDamageModifiers(char, char.Condition.Damage, char.Condition.DamageType)
        TakeDamage(char, damage)
        AddToCombatLog(combatLog, char.Name + " takes " + char.Condition.Damage + " " + char.Condition.DamageType.Name + " damage from " + char.Condition.Name)
    }
}
export function SkipConditionCheck(char, combatLog) {
    ResistCondition(char, combatLog)
    if (char.Condition.Type === "Skip") {
        return true;
    }
    else if (char.Condition.Name === "None") {
        return false
    }
    else {
        return false;
    }
}
export function HeroTurn(char1, allies, enemies, target, combatLog, option, spell, abil) {
    if (char1.BaseStats.HP.Current + char1.BaseStats.HP.Temp > 0) {
        Regen(char1, combatLog)
        if (SkipConditionCheck(char1, combatLog) === false) {
            if (option === "Basic Attack") {
                BasicAttack(char1, target, combatLog, char1.Equipment.Weapon)
                if (char1.Equipment.OffHand.SubType === "Weapon" && char1.Equipment.OffHand.Name !== "Empty") {
                    BasicAttack(char1, target, combatLog, char1.Equipment.OffHand)
                }
            }
            if (abil !== null) {
                UseAbility(char1, allies, enemies, target, combatLog, abil)
            }
            if (spell !== null) {
                CastSpell(char1, allies, enemies, target, combatLog, spell);
            }
        }
        else {
            AddToCombatLog(combatLog, char1.Name + " lost turn due to " + char1.Condition.Name)
        }
        DamageConditionCheck(char1, combatLog)
        BuffAndDeBuffDuration(char1, combatLog)
    }
}
export function NPCTurn(allies, enemies, combatLog, round, hero) {
    for (let a = hero; a < allies.length; a++) {
        if (allies[a].BaseStats.HP.Current + allies[a].BaseStats.HP.Temp > 0) {
            Regen(allies[a], combatLog)
            if (SkipConditionCheck(allies[a], combatLog) === false) {
                allies[a].Tactics.Tactics(allies[a], allies, enemies, combatLog, round)
            }
            else {
                AddToCombatLog(combatLog, allies[a].Name + " lost turn due to " + allies[a].Condition.Name)
            }
            DamageConditionCheck(allies[a], combatLog)
            BuffAndDeBuffDuration(allies[a], combatLog)
        }
    }
}
export function CalculateAverageSpeed(team) {
    var speed = 0;
    for (let t = 0; t < team.length; t++) {
        if (team[t].BaseStats.HP.Current + team[t].BaseStats.HP.Temp > 0) {
            speed += team[t].Attributes.Speed.Value + team[t].Attributes.Speed.Bonus - team[t].Attributes.Speed.Penalty;
        }
    }
    speed /= team.length;
    return speed;
}
export function CombatRound(char1, allies, enemies, target, combatLog, option, spell, abil, round) {
    var AllySpeed = CalculateAverageSpeed(allies);
    var EnemySpeed = CalculateAverageSpeed(enemies);
    if (AllySpeed >= EnemySpeed) {
        HeroTurn(char1, allies, enemies, target, combatLog, option, spell, abil)
        //allies
        NPCTurn(allies, enemies, combatLog, round, 1)
        //enemies
        NPCTurn(enemies, allies, combatLog, round, 0)
    }
    else {
        //enemies
        NPCTurn(enemies, allies, combatLog, round, 0)
        HeroTurn(char1, allies, enemies, target, combatLog, option, spell, abil)
        //allies
        NPCTurn(allies, enemies, combatLog, round, 1)
    }
}
export function CombatPenalties(hero) {
    AddToCharacterLog(hero, hero.Name + " lost " + Math.floor(hero.Gold / 2) + " GP")
    hero.Gold = Math.floor(hero.Gold / 2);
}
export function CombatRewards(hero, allies, enemies) {
    AddToCharacterLog(hero, "Defeated all Foes")
    AddToCharacterLog(hero, "Recieving Combat Rewards")
    for (var e = 0; e < enemies.length; e++) {
        for (var a = 0; a < allies.length; a++) {
            EarnXP(allies[a], enemies[e].CurrentXP, hero);
            RemoveAllBuffs(allies[a])
        }
        AddGold(hero, enemies[e].Gold)
        CheckIfKillQuestObjective(hero, enemies[e])
        if (enemies[e].ItemDrops.Items.length > 0) {
            const randomDrop = Math.floor(Math.random() * enemies[e].ItemDrops.Items.length);
            AddItemToInventory(hero, hero.Inventory, enemies[e].ItemDrops.Items[randomDrop], enemies[e].ItemDrops.Items[randomDrop].Quantity, hero)
        }
    }
    for (var a2 = 0; a2 < allies.length; a2++) {
        RemoveAllBuffs(allies[a2])
        RemoveAllDeBuffs(allies[a2])
        RemoveCondition(allies[a2])
        allies[a2].BaseStats.HP.Temp = 0;
    }
}