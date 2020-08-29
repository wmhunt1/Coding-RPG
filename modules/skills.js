//classes for learning and training skills etc.
class Ability {
    constructor() {
    }
}
class Spell extends Ability {
    constructor(name, effect) {
        super();
        this.name = name;
        this.effect = effect;
    }
}
let magicMissile = new Spell("Magic Missile", function (user, target) {

    if (target.basics.alive == true)
    {
        alert(user.basics.name + " fires a magical missile at " + target.basics.name + " dealing " + user.weapon.damage + " damage.")

    let dmg = user.weapon.damage;
    user.damageReduction(target, dmg)
    target.isAlive();
    }
    else
    {}
})