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
//abilities
let inspireAlly = new Ability("Inspire Ally", function (user) {
    let target = prompt("Choose an ally to heal by number (starting from 0).");
    if (allyArray[target] === undefined) {
        alert(user.basics.name + " heals no one..")
    }
    else {
        if (user.stats.currentSp > 0) {
            if (allyArray[target].basics.alive == true) {
                alert(user.basics.name + " inspires " + allyArray[target].basics.name)
                allyArray[target].stats.buff += user.basics.level;
                console.log(allyArray[target].stats.buff)
                user.useSP(1)
            }
            else {
                alert("Can't heal dead target.")
            }
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    }
}
)
let rage = new Ability("Rage",
    function (user) {
        if (user.stats.currentSp > 0) {
            alert(user.basics.name + " begins to rage.")
            user.weapon.tempBonus = user.basics.level;
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    })
//spells
let cureWounds = new Spell("Cure Wounds", function (user) {
    let target = prompt("Choose an ally to heal by number (starting from 0).");
    if (allyArray[target] === undefined) {
        alert(user.basics.name + " heals no one..")
    }
    else {
        if (user.stats.currentSp > 0) {
            if (allyArray[target].basics.alive == true) {
                alert(user.basics.name + " heals " + allyArray[target].basics.name + " for " + user.basics.level * 5 + " hitpoints.")
                let heal = user.basics.level * 5;
                //target.stats.currentHp += heal;
                allyArray[target].heal(heal)
                user.useSP(1)
            }
            else {
                alert("Can't heal dead target.")
            }
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    }
}
)
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
                user.useSP(1)
            }
            else {
                alert("Target already dead.")
            }
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    }
})