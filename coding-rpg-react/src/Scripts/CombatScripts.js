import { AddGold, AddItemToInventory, AddToCharacterLog, EarnXP, RemoveAllBuffs, RemoveAllDeBuffs, RemoveCondition, ResistCondition, TakeDamage } from "./CharacterScripts";
import { CastSpell, UseAbility } from "./SpellScripts";
export function CalculateCharWeaponDamage(char) {
    var offHand = 0;
    if (char.OffHand.Type === "OffHandWeapon") {
        offHand = char.OffHand.Damage;
    }
    var damage = char.Strength + char.Weapon.Damage + char.StrBonus - char.StrPenalty + offHand;
    return damage;
}
export function CalculateCharArmor(char) {
    var shield = 0;
    if (char.OffHand.Type === "Shield") {
        shield = char.OffHand.Protection
    }
    var armor = char.Head.Protection + char.Torso.Protection + char.Legs.Protection + char.Hands.Protection + char.Feet.Protection + shield;
    return armor;
}
export function CalculateCharDefenseWithArmor(char, armor) {
    var defense = armor + char.Dexterity + char.DexBonus - char.DexPenalty
    return defense;
}
export function CalculateCharDefenseWithoutArmor(char) {
    var defense = char.Dexterity + char.DexBonus - char.DexPenalty
    return defense;
}
export function CalculateBaseDamage(damage, defense) {
    return damage - defense;
}
export function CalculateDamageModifiers(char, damage, type) {
    if (char.Immunities.includes(type) === true) {
        damage = 0;
    }
    if (char.Resistances.includes(type) === true) {
        damage /= 2;
    }
    if (char.Weaknesses.includes(type) === true) {
        damage *= 2;
    }
    return damage;
}
export function CalculateCritDamage(char1, damage) {
    if (Math.floor(Math.random() * 100) + 1 + char1.Luck >= 75) {
        damage *= 2;
    }
    return damage;
}
export function BasicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, char2Armor, damageType) {
    var result = "";
    var mod = "";
    var crit = " ";
    if (baseDamage === 0) {
        var miss = ""
        if (char2Armor > char2.Dexterity + char2.DexBonus - char2.DexPenalty) {
            miss = "'s armor deflects "
        }
        else {
            miss = " dodges "
        }
        result = char2.Name + miss + char1.Name + "'s Attack"
    }
    else {
        if (modifiedDamage === baseDamage * 2) {
            mod = " (Weak) "
        }
        if (modifiedDamage === baseDamage / 2) {
            mod = " (Resisted) "
        }
        if (modifiedDamage === 0) {
            mod = " (Immune) "
        }
        if (totalDamage === modifiedDamage * 2) {
            crit = " Critical "
        }
        result = char1.Name + " deals " + totalDamage + crit + damageType + " damage to " + char2.Name + mod
    }
    combatLog.push(result)
}
export function BasicAttack(char1, char2, combatLog) {
    combatLog.push(char1.Name + " attacks " + char2.Name + " with their " + char1.Weapon.Name)
    var char1Damage = CalculateCharWeaponDamage(char1)
    var char2Armor = CalculateCharArmor(char2)
    var char2Defense = CalculateCharDefenseWithArmor(char2, char2Armor)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, char1.Weapon.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage)
    TakeDamage(char2, totalDamage)
    BasicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, char2Armor, char1.Weapon.DamageType)
    char1.Weapon.Enchantment.OnHitEffect(char1, char2, combatLog)
}
export function MagicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, spell) {
    var result = "";
    var miss = "";
    var mod = "";
    var crit = " ";
    if (baseDamage === 0) {
        if (char2.WillPower + char2.WlpBonus - char2.WlpPenalty > char2.Dexterity + char2.DexBonus - char2.DexPenalty) {
            miss = "'s resists with their Willpower "
        }
        else {
            miss = " dodges "
        }
        result = char2.Name + miss + char1.Name + "'s Spell"
    }
    else {
        if (modifiedDamage === baseDamage * 2) {
            mod = " (Weak) "
        }
        if (modifiedDamage === baseDamage / 2) {
            mod = " (Resisted) "
        }
        if (modifiedDamage === 0) {
            mod = " (Immune) "
        }
        if (totalDamage === baseDamage * 2) {
            crit = " Critical "
        }
        result = char1.Name + " deals " + totalDamage + crit + spell.DamageType + " damage to " + char2.Name + " with " + spell.Name + mod
    }
    combatLog.push(result)
}
export function ProjectileMagicAttack(char1, char2, combatLog, spell) {
    var char1Damage = char1.Intelligence + char1.IntBonus - char1.IntPenalty + spell.Amount;
    var char2Defense = (char2.WillPower + char2.WlpBonus - char2.WlpPenalty) / 2 + (char2.Dexterity + char2.DexBonus - char2.DexPenalty) / 2;
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense)
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, spell.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage)
    TakeDamage(char2, totalDamage)
    MagicAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, spell)
}
export function SneakAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, damageType) {
    var result = "";
    var mod = "";
    var crit = " ";
    if (baseDamage === 0) {
        result = char2.Name + " dodges " + char1.Name + "'s Attack"
    }
    else {
        if (modifiedDamage === baseDamage * 2) {
            mod = " (Weak)"
        }
        if (modifiedDamage === baseDamage / 2) {
            mod = " (Resisted)"
        }
        if (modifiedDamage === 0) {
            mod = " (Immune)"
        }
        if (totalDamage === baseDamage * 2) {
            crit = " Critical "
        }
        result = char1.Name + " deals " + totalDamage + crit + damageType + " damage to " + char2.Name + mod
    }
    result = char1.Name + " deals " + totalDamage + " " + damageType + " damage to " + char2.Name
    combatLog.push(result)
}
export function SneakAttack(char1, char2, combatLog) {
    combatLog.push(char1.Name + " sneak attacks " + char2.Name + " with their " + char1.Weapon.Name)
    var char1Damage = CalculateCharWeaponDamage(char1)
    var char2Defense = CalculateCharDefenseWithoutArmor(char2)
    var baseDamage = CalculateBaseDamage(char1Damage, char2Defense);
    var modifiedDamage = CalculateDamageModifiers(char2, baseDamage, char1.Weapon.DamageType)
    var totalDamage = CalculateCritDamage(char1, modifiedDamage)
    TakeDamage(char2, totalDamage)
    SneakAttackResults(char1, char2, combatLog, baseDamage, modifiedDamage, totalDamage, char1.Weapon.DamageType)
    char1.Weapon.Enchantment.OnHitEffect(char1, char2, combatLog)
}
export function DamageConditionCheck(char, combatLog) {
    ResistCondition(char, combatLog)
    if (char.Condition.Type === "Damage") {
        var damage = CalculateDamageModifiers(char, char.Condition.Damage, char.Condition.DamageType)
        TakeDamage(char, damage)
        combatLog.push(char.Name + " takes " + char.Condition.Damage + " " + char.Condition.DamageType + " damage from " + char.Condition.Name)
    }
}
export function SkipConditionCheck(char, combatLog) {
    ResistCondition(char, combatLog)
    if (char.Condition.Type === "Skip") {
        return true;
    }
    if (char.Condition.Type === "None") {
        return false
    }
}
export function HeroTurn(char1, allies, enemies, target, combatLog, option, spell, abil) {
    if (char1.CurrentHP > 0) {
        if (SkipConditionCheck(char1, combatLog) === false) {
            if (option === "Basic Attack") {
                BasicAttack(char1, target, combatLog);
            }
            if (abil !== null) {
                UseAbility(char1, allies, enemies, target, combatLog, abil)
            }
            if (spell !== null) {
                CastSpell(char1, allies, enemies, target, combatLog, spell);
            }
        }
        else {
            combatLog.push(char1.Name + " lost turn due to " + char1.Condition.Name)
        }
        DamageConditionCheck(char1, combatLog)
    }
}
export function NPCTurn(allies, enemies, combatLog, round, hero) {
    for (let a = hero; a < allies.length; a++) {
        if (allies[a].CurrentHP > 0) {
            if (SkipConditionCheck(allies[a], combatLog) === false) {
                allies[a].Tactics(allies[a], allies, enemies, combatLog, round)
            }
            else {
                combatLog.push(allies[a].Name + " lost turn due to " + allies[a].Condition.Name)
            }
            DamageConditionCheck(allies[a], combatLog)
        }
    }
}
export function CalculateAverageSpeed(team) {
    var speed = 0;
    for (let t = 0; t < team.length; t++) {
        if (team[t].CurrentHP > 0) {
            speed += team[t].Speed;
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
export function CombatRewards(hero, allies, enemies) {
    AddToCharacterLog(hero, "Defeated all Foes")
    AddToCharacterLog(hero, "Recieving Combat Rewards")
    for (var e = 0; e < enemies.length; e++) {
        for (var a = 0; a < allies.length; a++) {
            EarnXP(allies[a], enemies[e].CurrentXP);
            RemoveAllBuffs(allies[a])
        }
        AddGold(hero, enemies[e].Gold)
        if (enemies[e].ItemDrops.length > 0) {
            const randomDrop = Math.floor(Math.random() * enemies[e].ItemDrops.length);
            AddItemToInventory(hero, hero.Inventory, enemies[e].ItemDrops[randomDrop])
        }
    }
    for (var a2 = 0; a2 < allies.length; a2++) {
        RemoveAllBuffs(allies[a2])
        RemoveAllDeBuffs(allies[a2])
        RemoveCondition(allies[a2])
    }
}