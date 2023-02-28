export class Buff {
    Name; Duration; RemainingDuration;
    ApplyBuff(target) { }; RemoveBuff(target) { }
    constructor(name, duration) {
        this.Name = name;
        this.Duration = duration;
        this.RemainingDuration = duration;
    }
}
export class AttackBonusBuff extends Buff {
    constructor(name, duration) {
        super(name = "Attack Buff", duration)
    }
    ApplyBuff(target) { target.BaseStats.Attack.Bonus += 2; target.Buffs.push(this) };
    RemoveBuff(target) { target.BaseStats.Attack.Bonus -= 2 }
}
export class BlessBuff extends Buff {
    constructor(name, duration) {
        super(name = "Bless Buff", duration)
    }
    ApplyBuff(target) { target.BaseStats.Attack.Bonus += 2; target.Buffs.push(this) };
    RemoveBuff(target) { target.BaseStats.Attack.Bonus -= 2; }
}
export class CourageBuff extends Buff {
    constructor(name, duration) {
        super(name = "Courage Buff", duration)
    }
    ApplyBuff(target) { target.Attributes.Strength.Bonus += 1; target.Buffs.push(this) };
    RemoveBuff(target) { target.Attributes.Strength.Bonus -= 1 }
}
export class HeroismBuff extends Buff {
    constructor(name, duration) {
        super(name = "Heroism Buff", duration)
    }
    ApplyBuff(target) { target.BaseStats.HP.RegenBonus += 1; target.Buffs.push(this) };
    RemoveBuff(target) { target.BaseStats.HP.RegenBonus -= 1 }
}
export class RageBuff extends Buff {
    constructor(name, duration) {
        super(name = "Rage Buff", duration)
    }
    ApplyBuff(target) { target.Attributes.Strength.Bonus += 2; target.Buffs.push(this) };
    RemoveBuff(target) { target.Attributes.Strength.Bonus -= 2 }
}
export class ShieldBuff extends Buff {
    constructor(name, duration) {
        super(name = "Shield Buff", duration)
    }
    ApplyBuff(target) { target.BaseStats.Defense.Bonus += 2; target.Buffs.push(this) };
    RemoveBuff(target) { target.BaseStats.Defense.Bonus -= 2 }
}