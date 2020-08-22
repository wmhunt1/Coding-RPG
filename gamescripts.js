function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
//creates hero
//let heroName = prompt("Choose Your Name")
let hero = new character("Name", "Freelancer", 1, 0, true, true, 10, 10, 1, 1, 0, "None", 0, "None", 0, 0);
//character prototype
function character(name, profession, level, xp, alive, ally, currentHp, maxHp, attack, defense, speed, weapon, damage, armor, protection, gold) {
    this.basics = {
        name: name,
        class: profession,
        level: level,
        xp: xp,
        gold: gold,
        alive: alive,
        ally: ally,
    };
    this.stats = {
        currentHp: currentHp,
        maxHp: maxHp,
        attack: attack,
        defense: defense,
        speed: speed,
        buff: 0,
        debuff: 0,
    };
    this.weapon = {
        name: weapon,
        damage: damage
    };
    this.armor = {
        name: armor,
        protection: protection
    }
    this.inventory = {
        gold: gold
    }
    this.resistances = {
        //here for test
        fire: false
    }

}
//attack function
character.prototype.attack = function (target) {
    alert(this.basics.name + " attacks " + target.basics.name + " with their " + this.weapon.name)
    console.log(target.stats.currentHp)
    let hitChance = .5 - .1 * (target.stats.defense + target.stats.buff - target.stats.debuff);
    console.log(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (this.stats.attack + this.stats.buff - this.stats.debuff);
    console.log(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        let dmg = this.weapon.damage - target.armor.protection;
        if (target.basics.alive == true) {
            if (this.weapon.damage <= target.armor.protection) {
                alert(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
            }
            else {
                alert(dmg + " damage dealt to " + target.basics.name)
                target.damage(dmg)
            }
            alert(target.basics.name + " loses " + dmg + " Hitpoints.")
        }
        else {
        }
    }
    else {
        alert(this.basics.name + " misses " + target.basics.name)
    }

    target.isAlive();
};
//isalive function
character.prototype.isAlive = function () {
    if (this.stats.currentHp > 0) {
    }
    else if (this.basics.alive == false) {
        console.log(this.basics.name + " is already dead.")
    }
    else {
        console.log(this.basics.name + " has died!");
        this.basics.alive = false;
        if (this.basics.ally == false) {
            enemyNumber--;
            console.log(hero.basics.xp)
            for (var i = 0; i < allyArray.length; i++) {
                allyArray[i].basics.xp += this.basics.xp;
            }
            console.log(hero.basics.xp)
        }
        else {

        }
    }
};
//levelup function
character.prototype.levelUp = function () {
    console.log(this.basics.name + " has " + this.basics.xp + " total XP.")
    if (this.basics.level * 100 == this.basics.xp) {
        this.basics.level++;
        this.basics.currentHp += 10;
        this.basics.maxHp += 10;
        console.log(this.basics.name + " leveled up")
    }
    else {
        console.log(this.basics.name + " is not ready for level up")
    }
}
character.prototype.heal = function (cure) {
    this.stats.currentHp += cure;
    if (this.stats.currentHp > this.stats.maxHp) {
        this.stats.currentHp = this.stats.maxHp;
    }
    else {
        //nothing
    }
}
character.prototype.damage = function (wound) {
    this.stats.currentHp -= wound;
}
//turn function
character.prototype.reset()
{
    this.stats.debuff = 0;
    this.stats.debuff = 0;
}
character.prototype.turn = function () {
    if (this.basics.alive == true) {
        if (this.basics.ally == true) {
            let action = prompt("(A)ttack or user a (P)otion?");
            if (action === "A") {
                let target = prompt("Choose target by number (starting from 0).");
                if (enemyArray[target] === undefined) {
                    alert(this.basics.name + " attacks no one.")
                }
                else {
                    this.attack(enemyArray[target]);
                }
            }
            else if (action === "P") {
                potion.use(this)
            }
            else {
                alert("You chose not to do anything.")
            }
        }
        else {
            let target = Math.floor((Math.random() * allyArray.length))
            this.attack(allyArray[target]);
        }
    }
    else {
        //so no turn
    }
}
//combat elements
let turnArray = [];
let enemyArray = [];
let allyArray = [];
let enemyNumber = 0;
//combat function
function combat() {
    console.log("You face " + enemyNumber + " enemies.")
    while (enemyNumber != 0 && hero.stats.currentHp > 0) {
        console.log(hero.stats.currentHp + " current HP for hero")
        for (i = 0; i < turnArray.length; i++) {
            if (turnArray[i].basics.alive != true) {
            }
            else {
                console.log(turnArray[i].basics.name + "'s turn.")
                turnArray[i].turn();
            }
        }
    }
    console.log("combat ended")

    if (hero.stats.currentHp > 0) {
        for (var i = 0; i < allyArray.length; i++) {
            allyArray[i].levelUp();
            allyArray[i].reset();
        }
    }
    else {
        alert("You are defeated.")
    }
}
//item prototypes
function item(name, type, value, effect, price, quantity) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.effect = effect,
        this.price = price;
    this.quantity = quantity
}
//equipable items
item.prototype.equip = function (user) {
    if (this.type === "Armor") {
        user.armor.name = this.name;
        user.armor.protection = this.value;
        this.effect(user);
        console.log(user.basics.name + " equiped " + this.name)
    }
    else if (this.type === "Weapon") {
        user.weapon.name = this.name;
        user.weapon.damage = this.value;
        console.log(user.basics.name + " equiped " + this.name)
    }
    else {

    }
    console.log(user)
}
//usable items
item.prototype.use = function (user) {
    if (this.type === "Consumable" && this.quantity > 0) {
        alert(user.basics.name + " uses a " + this.name)
        this.effect(user, this.value)
        this.quantity--;
    }
    else {
        console.log("You don't have any " + this.name + "(s)")
    }
}
item.prototype.buy = function () {
    item.quantity++;
    hero.inventory.gold -= item.value;

}
item.prototype.sell = function () {
    item.quantity--;
    hero.inventory.gold += item.value / 2;
}
let dagger = new item("Dagger", "Weapon", 1, function (user) { }, 0, 1);
let clothing = new item("Clothing", "Armor", 0, function (user) { }, 0, 1);
let potion = new item("Potion", "Consumable", 5, function (user, value) { user.heal(value); }, 10, 1);
//let fireArmor = new item("Fire Armor", "Armor", 0, function (user) {user.resistances.fire = true}, 0, 1);

//add items to hero
// dagger.equip(hero)
// clothing.equip(hero)

function createHero() {
    let heroName = prompt("Choose Your Name")
    hero = new character(heroName, "Freelancer", 1, 0, true, true, 10, 10, 1, 1, 0, "None", 0, "None", 0, 0);
    dagger.equip(hero)
    clothing.equip(hero)
}
function firstEvent() {
    alert("You are " + hero.basics.name + ", a " + hero.basics.class + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    alert("Your test is to travel to The Valley of Dale, figure out what the problem is and solve it.")
    alert("You enter the valley and travel to a bridge guarded by bandits")
    alert("As you have no gold they attack you.")
    const bandit1 = new character("Bandit1", "Thug", 1, 10, true, false, 1, 1, 0, 0, 0, "Shortsword", 1, "Leather", 0, 1);
    const bandit2 = new character("Bandit2", "Thug", 1, 10, true, false, 1, 1, 0, 0, 0, "Shortsword", 1, "Leather", 0, 1);
    const bandit3 = new character("Bandit3", "Thug", 1, 10, true, false, 1, 1, 0, 0, 0, "Shortsword", 1, "Leather", 0, 1);
    turnArray = [hero, bandit1, bandit2, bandit3];
    console.log(turnArray)
    enemyArray = [bandit1, bandit2, bandit3];
    enemyNumber = enemyArray.length;
    allyArray = [hero];
    combat()
    if (hero.stats.currentHp > 0) {
        alert("You sucessfully drive off the bandits")
        alert("An armored knight rides up to greet you.")
        alert("The knight dismounts.")
    }
    else {
        alert("The bandits are about to finish you off.")
        alert("An armored knight charges the bandit(s), driving them off and saving your life.")
        alert("The knight dismounts and helps your stand.")
    }
    alert("Knight: Those bandits are getting audicious.")
    alert("Knight: You are alright? The knight pats you on the back and you feel some healing energy flow into you,")
    hero.stats.currentHp = hero.stats.maxHp;
    alert("Knight: I am Abraham Arkwright, paladin and current guardian of The Valley of Dale.")
    alert("Abraham: We should get to the village before they bring reinforcements.")
}
//firstEvent()