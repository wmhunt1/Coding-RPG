import { FireDamage, NoDamage, PoisonDamage } from "./DamageTypesDB";

export class Condition {
    Name; Symbol; Type; Attribute; Damage; DamageType; Source; Duration; RemainingDuration;
    constructor(name, symbol, type, attribute, damage, damageType, source, duration) {
        this.Name = name; this.Symbol = symbol; this.Type = type;
        this.Attribute = attribute; this.Damage = damage; this.Duration = duration;
        this.RemainingDuration = duration; this.DamageType = damageType; this.Source = source;
    }
}
export class NoCondition extends Condition {
    constructor(name, symbol, type, attribute, damage, source, damageType, duration) {
        super(name = "None", symbol = "", type = "none", attribute = "", damage = 0, source = null, damageType = new NoDamage(), duration = 0)
    }
}
export class BurnCondition extends Condition {
    constructor(name = "Burned", symbol = "BRN", type = "Damage", attribute = "Con", damage, source = null, damageType = new FireDamage(), duration) {
        super(name, symbol, type, attribute, damage, source, damageType, duration)
    }
}
export class PoisonCondition extends Condition {
    constructor(name = "Poisoned", symbol = "PSN", type = "Damage", attribute = "Con", damage, source = null, damageType = new PoisonDamage(), duration) {
        super(name, symbol, type, attribute, damage, source, damageType, duration)
    }
}
export class SleepCondition extends Condition {

    constructor(name, symbol, type, attribute, damage, damageType, source, duration) {
        super(name = "Sleep", symbol = "SLP", type = "Skip", attribute = "Wlp", damage, source = null, damageType = new NoDamage(), duration)
    }
}
export class WebCondition extends Condition {
    constructor(name, symbol, type, attribute, damage, damageType, source, duration) {
        super(name = "Webbed", symbol = "WEB", type = "Skip", attribute = "Str", damage, source = null, damageType = new NoDamage(), duration)
    }
}