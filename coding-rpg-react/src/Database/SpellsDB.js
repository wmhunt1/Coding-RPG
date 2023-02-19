import { blessBuff, courageBuff } from "./BuffsDB";
import { rat, skeleton, spider } from "./CharactersDB";
import { poisonCondition, sleepCondition, webCondition } from "./ConditionsDB";
import { fireDamage, forceDamage, noDamage, poisonDamage } from "./DamageTypesDB";
import { baneDeBuff } from "./DeBuffsDB"
import { alterationSkill, conjurationSkill, destructionSkill, illusionSkill, restorationSkill } from "./SkillsDB";
import { CalculateSpellBonus, ModifySummon } from "../Scripts/AbilityAndSpellScripts";
import { HealHP } from "../Scripts/CharacterScripts";
import { AddToCombatLog, ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { ApplyCondition, RemoveCondition } from "../Scripts/BuffConditionAndDeBuffScripts";

//alteration spells
export function poisonSpray() {
    var poisonSpray = {
        Name: "Poison Spray", School: alterationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "A Spray of Poison that Poisons all Foes", Amount: 5, DamageType: poisonDamage(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Intelligence.Value, char.Attributes.Intelligence.Bonus, char.Attributes.Intelligence.Penalty, 3);
            AddToCombatLog(combatLog, char.Name + " sprays all foes with poison");
            for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], poisonCondition(this.Amount, calcDuration), combatLog) }
        }
    }
    return poisonSpray;
}
//conjuration spells
export function summonRat() {
    var summonRat = {
        Name: "Summon Rat", School: conjurationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 5, Description: "Summons a Rat to fight", Summon: rat(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name);
            ModifySummon(char, allies, this.Summon)
        }
    }
    return summonRat;
}
export function summonSkeleton() {
    var summon = {
        Name: "Summon Skeleton", School: conjurationSkill(), LevelRequirement: 10, Use: "Combat", ManaCost: 10, Description: "Summons a Skeleton to fight", Summon: skeleton(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name);
            ModifySummon(char, allies, this.Summon)
        }
    }
    return summon;
}
export function summonSpider() {
    var summon = {
        Name: "Summon Spider", School: conjurationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 5, Description: "Summons a spider to fight", Summon: spider(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name);
            ModifySummon(char, allies, this.Summon)
        }
    }
    return summon;
}
export function webSpell() {
    var web = {
        Name: "Sleep", School: conjurationSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 10, Description: "Webs all foes", Amount: 0, DamageType: noDamage(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Intelligence.Value, char.Attributes.Intelligence.Bonus, char.Attributes.Intelligence.Penalty, 3);
            AddToCombatLog(combatLog, char.Name + " webs all foes");
            for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], webCondition(0, calcDuration), combatLog) }
        }
    }
    return web;
}
//desctruction spells
export function fireBall() {
    var fireBall = {
        Name: "Fire Ball", School: destructionSkill(), LevelRequirement: 10, Use: "Combat", ManaCost: 10, Description: "Ball of Fire that deals 10 Fire Damage to All Foes", Amount: 10, DamageType: fireDamage(),
        SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " launches a fireball at the enemies"); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(char, enemies[e], combatLog, this) } }
    }
    return fireBall;
}
export function magicMissile() {
    var magicMissile = {
        Name: "Magic Missile", School: destructionSkill(), LevelRequirement: 1, Use: "Combat", ManaCost: 5, Description: "Missile of Magical Force that deals 5 Force Damage to One Foe", Amount: 5, DamageType: forceDamage(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            AddToCombatLog(combatLog, char.Name + " fires a " + this.Name + " at " + target.Name);
            ProjectileMagicAttack(char, target, combatLog, this)
        }
    }
    return magicMissile;
}
//illusion spells
export function inspireCourage() {
    var inspireCourage = {
        Name: "Inspire Courage", School: illusionSkill(), LevelRequirement: 1, Use: "Combat", Amount: 1, ManaCost: 5, Description: "Inspires one ally, increasing their damage",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Charisma.Value, char.Attributes.Charisma.Bonus, char.Attributes.Charisma.Penalty, 3);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", increasing their strength by 1");
            courageBuff(calcDuration).ApplyBuff(target)
        }
    }
    return inspireCourage
}
export function sleepSpell() {
    var sleep = {
        Name: "Sleep", School: illusionSkill(), LevelRequirement: 10, Use: "Combat", ManaCost: 10, Description: "Puts all foes to sleep", Amount: 0, DamageType: noDamage(),
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Charisma.Value, char.Attributes.Charisma.Bonus, char.Attributes.Charisma.Penalty, 3);
            AddToCombatLog(combatLog, char.Name + " puts all foes to sleep");
            for (var e = 0; e < enemies.length; e++) { ApplyCondition(enemies[e], sleepCondition(0, calcDuration), combatLog) }
        }
    }
    return sleep;
}
//restoration spells
export function bane() {
    var bane = {
        Name: "Bane", School: restorationSkill(), LevelRequirement: 1, Use: "Combat", Amount: 3, ManaCost: 10, Description: "Weakens all Foes",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, 3);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the their enemies.");
            for (var e = 0; e < enemies.length; e++) { baneDeBuff(calcBuff).ApplyDeBuff(enemies[e]) }
        }
    }
    return bane;
}
export function basicHeal() {
    var basicHeal = {
        Name: "Basic Heal", School: restorationSkill(), LevelRequirement: 1, Use: "Hybrid", Amount: 5, ManaCost: 5, Description: "Heals One Ally for 5HP",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var totalHeal = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for " + totalHeal + " Health");
            HealHP(target, totalHeal)
        }
    }
    return basicHeal;
}
export function basicMassHeal() {
    var basicHeal = {
        Name: "Basic Mass Heal", School: restorationSkill(), LevelRequirement: 10, Use: "Hybrid", Amount: 5, ManaCost: 5, Description: "Heals All Allies for 5HP",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var totalHeal = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the party, healing them for " + totalHeal + " Health");
            for (var a = 0; a < allies.length; a++) { HealHP(allies[a], totalHeal) }
        }
    }
    return basicHeal;
}
export function bless() {
    var bless = {
        Name: "Bless", School: restorationSkill(), LevelRequirement: 1, Use: "Combat", Amount: 3, ManaCost: 10, Description: "Blesses all Allies, Strengthening Them",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " blessing them.");
            for (var a = 0; a < allies.length; a++) { blessBuff(calcBuff).ApplyBuff(allies[a]) }
        }
    }
    return bless;
}
export function curePoison() {
    var curePoison = {
        Name: "Cure Poison", School: restorationSkill(), LevelRequirement: 1, Use: "Hybrid", ManaCost: 5, Description: "Cures One Ally of Poison",
        SpellEffect(char, allies, enemies, target, combatLog) {
            if (target.Condition.Name === "Poison") {
                AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", curing their poison");
                RemoveCondition(target, combatLog)
            } else { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", but " + target.Name + " was not poisoned.") }
        }
    }
    return curePoison
}
export function heroism() {
    var heroism = {
        Name: "Heroism", School: restorationSkill(), LevelRequirement: 1, Use: "Combat", Amount: 1, ManaCost: 5, Description: "Gives one all Allies Temp HP",
        SpellEffect(char, allies, enemies, target, combatLog) {
            var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", giving them " + calcBuff + " Temp HP");
            target.BaseStats.HP.Temp += calcBuff
        }
    }
    return heroism
}
