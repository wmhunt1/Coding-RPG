//classes for learning and training skills etc.
class Ability {
    constructor() {
    }
}
class Spell extends Ability {
    constructor(name, effect) {
        super();
        this.name = name
        this.effect = effect
    }
}
let magicMissile = new Spell("Magic Missile", function (user, target) {

    if (target.basics.alive == true)
        alert(user.basics.name + " fires a magical missile at " + target.basics.name + " dealing " + user.weapon.damage + " damage.")

    let dmg = user.weapon.damage;
    this.checkResist(target)
    this.checkImmune(target)
    if (resist == true) {
        alert(target.basics.name + "resisted the " + user.weapon.damageType + "and took " + dmg / 2 + " damage.")
        target.damage(dmg / 2)
        alert(target.basics.name + " loses " + dmg / 2 + " Hitpoints.")
    }
    else if (immune == true) {
        alert(target.basics.name + "is immune to " + user.weapon.damageType + " damage.")
    }
    else {
        alert(dmg + " " + user.weapon.damageType + " damage dealt to " + target.basics.name)
        target.damage(dmg)
        alert(target.basics.name + " loses " + dmg + " Hitpoints.")
    }

})