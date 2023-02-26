import { BlessBuff, CourageBuff } from "./BuffsDB";
import { Rat, Skeleton, Spider } from "./CharactersDB";
import { PoisonCondition, SleepCondition, WebCondition } from "./ConditionsDB";
import { FireDamage, ForceDamage } from "./DamageTypesDB";
import { BaneDeBuff } from "./DeBuffsDB"
import { AlterationSkill, ConjurationSkill, DestructionSkill, IllusionSkill, RestorationSkill } from "./SkillsDB";
import { CalculateSpellBonus, ModifySummon } from "../Scripts/AbilityAndSpellScripts";
import { HealHP } from "../Scripts/CharacterScripts";
import { AddToCombatLog, ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { ApplyCondition, RemoveCondition } from "../Scripts/BuffConditionAndDeBuffScripts";

export class Spell {
    Name; School; LevelRequirement; Use; ManaCost; Description; Amount; SpellEffect(char, allies, enemies, target, combatLog) { }
    constructor(name, school, level, use, mana, desc, amount) {
        this.Name = name; this.School = school; this.level = level; this.Use = use; this.ManaCost = mana; this.Description = desc; this.Amount = amount;
    }
}
export class BuffSpell extends Spell {
    Buff;
    constructor(name, school, level, use, mana, desc, amount, buff) {
        super(name, school, level, use, mana, desc, amount)
        this.Buff = buff;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Charisma.Value, char.Attributes.Charisma.Bonus, char.Attributes.Charisma.Penalty, 3);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name);
        this.Buff(calcDuration).ApplyBuff(target)
    }
}
export class InspireCourage extends BuffSpell {
    constructor(name = "Inspire Courage", school = new IllusionSkill(), level = 1, use = "Combat", mana = 5, desc = "Inspires one Ally", amount = 1, buff = new CourageBuff()) {
        super(name, school, level, use, mana, desc, amount, buff)
    }
}
export class MultiTargetBuffSpell extends BuffSpell {
    // constructor(name, school, level, use, mana, desc, amount, buff) {
    //     super(name, school, level, use, mana, desc, amount, buff)
    // }
}
export class Bless extends MultiTargetBuffSpell {
    constructor(name = "Bless", school = new RestorationSkill(), level = 1, use = "Combat", mana = 5, desc = "Blesses All Allies", amount = 3, buff = new BlessBuff()) {
        super(name, school, level, use, mana, desc, amount, buff)
    }
}
export class ConditionSpell extends Spell {
    Condition;
    constructor(name, school, level, use, mana, desc, amount, cond) {
        super(name, school, level, use, mana, desc, amount)
        this.Condition = cond;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Intelligence.Value, char.Attributes.Intelligence.Bonus, char.Attributes.Intelligence.Penalty, 3);
        AddToCombatLog(combatLog, char.Name + " applys " + this.Condition.Name + " to enemies");
        ApplyCondition(target, this.Condition(this.Amount, calcDuration), combatLog);
    }
}
export class MultiTargetConditionSpell extends ConditionSpell {
    // constructor(name, school, level, use, mana, desc, amount, cond) {
    //     super(name, school, level, use, mana, desc, amount, cond)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcDuration = CalculateSpellBonus(char, this, char.Attributes.Intelligence.Value, char.Attributes.Intelligence.Bonus, char.Attributes.Intelligence.Penalty, 3);
        AddToCombatLog(combatLog, char.Name + " applys " + this.Condition.Name + " to enemies");
        for (var e = 0; e < enemies.length; e++) {
            ApplyCondition(enemies[e], this.Condition(this.Amount, calcDuration), combatLog);
        }
    }
}
export class PoisonSpray extends MultiTargetConditionSpell {
    constructor(name = "Poison Spray", school = new AlterationSkill(), level = 1, use = "Combat", mana = 10, desc = "Poisons all Foes", amount = 3, cond = new PoisonCondition()) {
        super(name, school, level, use, mana, desc, amount, cond)
    }
}
export class SleepSpell extends MultiTargetConditionSpell {
    constructor(name = "Sleep", school = new IllusionSkill(), level = 10, use = "Combat", mana = 10, desc = "Puts all foes to sleep", amount = 3, cond = new SleepCondition()) {
        super(name, school, level, use, mana, desc, amount, cond)
    }
}
export class WebSpell extends MultiTargetConditionSpell {
    constructor(name = "Web", school = new ConjurationSkill(), level = 1, use = "Combat", mana = 10, desc = "Poisons all Foes", amount = 3, cond = new WebCondition()) {
        super(name, school, level, use, mana, desc, amount, cond)
    }
}
export class DamageSpell extends Spell {
    DamageType;
    constructor(name, school, level, use, mana, desc, amount, damageType) {
        super(name, school, level, use, mana, desc, amount)
        this.DamageType = damageType;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        AddToCombatLog(combatLog, char.Name + " fires a " + this.Name + " at " + target.Name);
        ProjectileMagicAttack(char, target, combatLog, this)
    }
}
export class MagicMissile extends DamageSpell {
    constructor(name = "Magic Missile", school = new DestructionSkill(), level = 1, use = "Combat", mana = 5, desc = "Missile of Magical Force that deals 5 Force Damage to One Foe", amount = 5, damageType = new ForceDamage()) {
        super(name, school, level, use, mana, desc, amount, damageType)
    }
}
export class MultiTargetDamageSpell extends DamageSpell {
    // constructor(name, school, level, use, mana, desc, amount, damageType) {
    //     super(name, school, level, use, mana, desc, amount, damageType)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " launches a " + this.Name + " at the enemies"); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(char, enemies[e], combatLog, this) } }
}
export class FireBall extends MultiTargetDamageSpell {
    constructor(name = "Fire Ball", school = new DestructionSkill(), level = 10, use = "Combat", mana = 10, desc = "Ball of Fire that deals 10 Fire Damage to All Foes", amount = 10, damageType = new FireDamage()) {
        super(name, school, level, use, mana, desc, amount, damageType)
    }
}
export class DeBuffSpell extends Spell {
    DeBuff;
    constructor(name, school, level, use, mana, desc, amount, deBuff) {
        super(name, school, level, use, mana, desc, amount)
        this.DeBuff = deBuff;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, 3);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the their enemy.");
        this.DeBuff(calcBuff).ApplyDeBuff(target)
    }
}
export class MultiTargetDeBuffSpell extends DeBuffSpell {
    // constructor(name, school, level, use, mana, desc, amount, deBuff) {
    //     super(name, school, level, use, mana, desc, amount, deBuff)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, 3);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the their enemies.");
        for (var e = 0; e < enemies.length; e++) { this.DeBuff(calcBuff).ApplyDeBuff(enemies[e]) }
    }
}
export class Bane extends MultiTargetDeBuffSpell {
    constructor(name = "Bane", school = new RestorationSkill(), level = 1, use = "Combat", mana = 10, desc = "Weakens All FOes", amount = 3, deBuff = new BaneDeBuff()) {
        super(name, school, level, use, mana, desc, amount, deBuff)
    }
}
export class HealingSpell extends Spell {
    // constructor(name, school, level, use, mana, desc, amount) {
    //     super(name, school, level, use, mana, desc, amount)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var totalHeal = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", healing them for " + totalHeal + " Health");
        HealHP(target, totalHeal)
    }
}
export class BasicHeal extends HealingSpell {
    constructor(name = "Basic Heal", school = new RestorationSkill(), level = 1, use = "Hybrid", mana = 5, desc = "Heals One Ally for 5 HP", amount = 5) {
        super(name, school, level, use, mana, desc, amount)
    }
}
export class MultiTargetHealingSpell extends HealingSpell {
    // constructor(name, school, level, use, mana, desc, amount) {
    //     super(name, school, level, use, mana, desc, amount)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var totalHeal = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on the party, healing them for " + totalHeal + " Health");
        for (var a = 0; a < allies.length; a++) { HealHP(allies[a], totalHeal) }
    }
}
export class BasicMassHeal extends MultiTargetHealingSpell {
    constructor(name = "Mass Basic Heal", school = new RestorationSkill(), level = 10, use = "Hybrid", mana = 10, desc = "Heals all Allies for 5 HP", amount = 5) {
        super(name, school, level, use, mana, desc, amount)
    }
}
export class RecoverySpell extends Spell {
    Condition;
    constructor(name, school, level, use, mana, desc, amount, cond) {
        super(name, school, level, use, mana, desc, amount)
        this.Condition = cond;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        if (target.Condition.Name === this.Condition.Name) {
            AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", curing their " + this.Condition.Name);
            RemoveCondition(target, combatLog)
        } else { AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", but " + target.Name + " was not " + this.Condition.Name) }
    }
}
export class CurePoison extends RecoverySpell {
    constructor(name = "Cure Poison", school = new RestorationSkill(), level = 1, use = "Hybrid", mana = 5, desc = "Cure One Ally of Poison", amount = 5) {
        super(name, school, level, use, mana, desc, amount)
    }
}
export class MultiTargetRecoverySpell extends RecoverySpell {
    // constructor(name, school, level, use, mana, desc, amount, cond) {
    //     super(name, school, level, use, mana, desc, amount, cond)
    // }
}
export class SummoningSpell extends Spell {
    Summon;
    constructor(name, school, level, use, mana, desc, amount, summon) {
        super(name, school, level, use, mana, desc, amount)
        this.Summon = summon;
    }
    SpellEffect(char, allies, enemies, target, combatLog) {
        AddToCombatLog(combatLog, char.Name + " summons a " + this.Summon.Name);
        ModifySummon(char, allies, this.Summon)
    }
}
export class SummonRat extends SummoningSpell {
    constructor(name = "Summon Rat", school = new ConjurationSkill(), level = 1, use = "Combat", mana = 5, desc = "Summons a Rat", amount = 1, summon = new Rat()) {
        super(name, school, level, use, mana, desc, amount, summon)
    }
}
export class SummonSkeleton extends SummoningSpell {
    constructor(name = "Summon Skeleton", school = new ConjurationSkill(), level = 1, use = "Combat", mana = 5, desc = "Summons a Skeleton", amount = 1, summon = new Skeleton()) {
        super(name, school, level, use, mana, desc, amount, summon)
    }
}
export class SummonSpider extends SummoningSpell {
    constructor(name = "Summon Spider", school = new ConjurationSkill(), level = 1, use = "Combat", mana = 5, desc = "Summons a Spider", amount = 1, summon = new Spider()) {
        super(name, school, level, use, mana, desc, amount, summon)
    }
}
export class TempHPSpell extends Spell {
    // constructor(name, school, level, use, mana, desc, amount) {
    //     super(name, school, level, use, mana, desc, amount)
    // }
    SpellEffect(char, allies, enemies, target, combatLog) {
        var calcBuff = CalculateSpellBonus(char, this, char.Attributes.Wisdom.Value, char.Attributes.Wisdom.Bonus, char.Attributes.Wisdom.Penalty, this.Amount);
        AddToCombatLog(combatLog, char.Name + " casts " + this.Name + " on " + target.Name + ", giving them " + calcBuff + " Temp HP");
        target.BaseStats.HP.Temp += calcBuff
    }
}
export class Heroism extends TempHPSpell {
    constructor(name = "Heroism", school = new RestorationSkill(), level = 1, use = "Combat", mana = 5, desc = "Gives one Ally Temp HP", amount = 1) {
        super(name, school, level, use, mana, desc, amount)
    }
}
export class MultiTargetTempHPSpell extends TempHPSpell {
    // constructor(name, school, level, use, mana, desc, amount) {
    //     super(name, school, level, use, mana, desc, amount)
    // }
}
