//classes for learning and training skills etc.
class Ability {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}
class Spell extends Ability {
    constructor(name, effect) {
        super();
        this.name = name;
        this.effect = effect;
    }
}
//spells
let magicMissile = new Spell("Magic Missile", function (user) {
    let target = prompt("Choose target by number (starting from 0).");
    if (enemyArray[target] === undefined) {
        alert(user.basics.name + " attacks no one.")
    }
    else {
        if (user.stats.currentSp > 0) {
            if (enemyArray[target].basics.alive == true) {
                alert(user.basics.name + " fires a magical missile at " + enemyArray[target].basics.name + " dealing " + user.weapon.damage + " damage.")

                let dmg = user.weapon.damage;
                user.damageReduction(enemyArray[target], dmg)
                enemyArray[target].isAlive();
            }
            else { }
            user.action2(user, enemyArray[target])
            user.stats.currentSp--;
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    }
})