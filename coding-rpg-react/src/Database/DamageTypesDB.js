export class DamageType {
    Name; Type; Source;
    constructor(name, type, source) {
        this.Name = name; this.Type = type; this.Source = source;
    }
}
export class NoDamage extends DamageType {
    constructor(name, type, source) {
        super(name = "No Damage", type = "None", source = null)
    }
}
//elemental damage
export class ElementalDamage extends DamageType {
    constructor(name, type, source) {
        super(name = "Elemental", type = "Elemental", source = null)
    }
}
export class FireDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Fire", type = "Elemental", source)
    }
}
export class ForceDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Force", type = "Elemental", source)
    }
}
export class IceDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Ice", type = "Elemental", source)
    }
}
export class LightningDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Lightning Damage", type = "Elemental", source)
    }
}
export class NecroticDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Necrotic", type = "Elemental", source)
    }
}
export class PoisonDamage extends ElementalDamage {
    constructor(name, type, source) {
        super(name = "Poison", type = "Elemental", source)
    }
}
//physical
export class PhysicalDamage extends DamageType {
    constructor(name, type, source) {
        super(name = "Physical", type = "Physical", source)
    }
}
export class BludgeoningDamage extends PhysicalDamage {
    constructor(name, type, source) {
        super(name = "Bludgeoning", type = "Physical", source)
    }
}
export class PiercingDamage extends PhysicalDamage {
    constructor(name, type, source) {
        super(name = "Piercing", type = "Physical", source)
    }
}
export class SlashingDamage extends PhysicalDamage {
    constructor(name, type, source) {
        super(name = "Slashing", type = "Physical", source)
    }
}