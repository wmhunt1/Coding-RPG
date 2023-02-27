export class DeBuff {
    Name; Duration; RemainingDuration;
    ApplyDeBuff(target) { }; RemoveDeBuff(target) { }
    constructor(name, duration) {
        this.Name = name;
        this.Duration = duration;
        this.RemainingDuration = duration;
    }
}
export class BaneDeBuff extends DeBuff {
    constructor(name, duration) {
        super(name = "Bane DeBuff", duration)
    }
    ApplyDeBuff(target) { target.Attributes.Strength.Penalty += 1; target.Attributes.Dexterity.Penalty += 1; target.DeBuffs.push(this) };
    RemoveDeBuff(target) { target.Attributes.Strength.Penalty -= 1; target.Attributes.Dexterity.Penalty -= 1; }
}
export class DrunkDeBuff extends DeBuff {
    constructor(name, duration) {
        super(name = "Drunk DeBuff", duration)
    }
    ApplyDeBuff(target) { target.Attributes.Intelligence.Penalty += 1; target.Attributes.Dexterity.Penalty += 1; target.DeBuffs.push(this) };
    RemoveDeBuff(target) { target.Attributes.Dexterity.Penalty -= 1; target.Attributes.Intelligence.Penalty -= 1; }
}