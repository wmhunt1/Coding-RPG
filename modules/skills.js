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
let bomb = new Ability("Bomb", function (user) {
    alert(user.basics.name + " throws a bomb.")
    if (user.stats.currentSp > 0) {
        for (var i = 0; i < enemyArray.length; i++) {
            console.log(enemyArray[i].basics.name + " is the target.")
            user.checkIfHit(enemyArray[i])
            if (hit = true) {
                let damageType = "Fire"
                let dmg = user.weapon.damage + user.weapon.damageBonus + user.weapon.tempBonus - enemyArray[i].armor.protection - enemyArray[i].armor.protectionBonus - enemyArray[i].armor.tempBonus;
                console.log(dmg)
                alert(enemyArray[i].basics.name + " is caught in the explostion")
                user.damageReduction(enemyArray[i], dmg, damageType)
                enemyArray[i].isAlive();

            }
            else {
                alert(enemyArray[i].basics.name + "avoids the blast.")
            }
        }
        user.useSp(1)

    }
    else {
        alert(user.basics.name + "didn't have enough SP.")
    }
})
let doubleAttack = new Ability("Double Attack",
    function (user) {
        if (user.stats.currentSp > 0) {
            alert(user.basics.name + "Focuses and prepares to make a double attack.")
            let target = prompt("Choose target by number (starting from 0).");
            if (enemyArray[target] === undefined) {
                alert(user.basics.name + " attacks no one.")
            }
            else {
                user.action1(enemyArray[target]);
            }
            target = prompt("Choose target by number (starting from 0).");
            if (enemyArray[target] === undefined) {
                alert(user.basics.name + " attacks no one.")
            }
            else {
                user.action1(enemyArray[target]);
            }
            user.useSp(1)
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    })
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
                user.useSp(1)
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
            user.useSp(1)
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    })
let smite = new Ability("Smite",
    function (user) {
        if (user.stats.currentSp > 0) {
            alert(user.basics.name + " prepares to smite their foe.")
            let target = prompt("Choose target by number (starting from 0).");
            if (enemyArray[target] === undefined) {
                alert(user.basics.name + " attacks no one.")
            }
            else {
                user.checkIfHit(enemyArray[target])
                let damageType = "Radiant";
                if (hit = true) {
                    alert(user.basics.name + " smites " + enemyArray[target].basics.name)
                    let dmg = 2*(user.weapon.damage + user.weapon.damageBonus + user.weapon.tempBonus) - enemyArray[target].armor.protection - enemyArray[target].armor.protectionBonus - enemyArray[target].armor.tempBonus;
                    console.log(dmg)
                    user.damageReduction(enemyArray[target], dmg, damageType)
                }
                else {
                    alert(user.basics.name + " misses " + enemyArray[target].basics.name)
                }

                enemyArray[target].isAlive();
            }
            user.useSp(1)
        }
        else {
            alert(user.basics.name + "didn't have enough SP.")
        }
    }
)
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
                user.useSp(1)
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
                alert(user.basics.name + " fires a magical missile at " + enemyArray[target].basics.name)
                let damageType = "Force";
                let dmg = user.weapon.damage;
                user.damageReduction(enemyArray[target], dmg, damageType)
                enemyArray[target].isAlive();
                user.useSp(1)
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
//enemy abilities
let poisonFangs = ("Poisoned Fangs", function (user, target) {
    user.attack(target)
    target.conditions.poison = true;
    alert("The poisoned fangs inflict poison on " + target.basics.name)
})