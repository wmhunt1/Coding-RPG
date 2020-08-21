//creates hero
let heroName = prompt("Choose Your Name")
let hero = new character(heroName, "Freelancer", 1, 0, true, true, 10, 10, 1, 1, 0, "None", 0, "None", 0, 0);
//character prototype
function character(name, profession, level, xp, alive, ally, currentHp, maxHp, attack, defense, speed, weapon, damage, armor, protection, gold) {
    this.basics = {
        name: name,
        class: profession,
        level: level,
        xp: xp,
        gold: gold,
        alive: alive,
        ally: ally
    };
    this.stats = {
        currentHp: currentHp,
        maxHp: maxHp,
        attack: attack,
        defense: defense,
        speed: speed
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

}
//attack function
character.prototype.attack = function (target) {
    console.log(this.basics.name + " attacks " + target.basics.name + " with their " + this.weapon.name)
    //console.log(target.stats.currentHp)
    let hitChance = .5 - .1 * (target.stats.defense);
    console.log(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (this.stats.attack);
    console.log(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        let dmg = this.weapon.damage - target.armor.protection;
        if (target.basics.alive == true) {
            if (this.weapon.damage <= target.armor.protection) {
                console.log(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
            }
            else {
                //let dmg = this.weapon.damage - target.armor.protection;
                console.log(dmg + " damage dealt to " + target.basics.name)
                target.stats.currentHp -= dmg;
            }
            console.log(target.basics.name + " loses " + dmg + " Hitpoints.")
        }
        else {
            //console.log(target.basics.name + " is already dead.")
        }
    }
    else {
        console.log(this.basics.name + " misses " + target.basics.name)
    }

    target.isAlive();
};
//isalive function
character.prototype.isAlive = function () {
    if (this.stats.currentHp > 0) {
        //console.log(this.basics.name + " is still alive!");
        //console.log("\n-------------\n");
        // return true;
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
//turn function
character.prototype.turn = function (target) {
    //this.isAlive()
    if (this.basics.alive == true) {
        // if (this.basics.ally == true) {
        //     //let target = prompt("Choose target by number (starting from 0).");
        //     let target = Math.floor((Math.random() * enemyArray.length))
        //     this.turn(enemyArray[target]);
        // }
        // else {
        //     let target = Math.floor((Math.random() * allyArray.length))
        //     this.turn(allyArray[target]);
        // }
        this.attack(target);
    }
    else {
        //console.log("no turn for dead character")
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
        for (i = 0; i < turnArray.length; i++) {
            if (turnArray[i].basics.ally == true) {
                let attackTarget = prompt("Choose target by number (starting from 0).");
                //let attackTarget = Math.floor((Math.random() * enemyArray.length))
                turnArray[i].turn(enemyArray[attackTarget]);
            }
            else {
                let attackTarget = Math.floor((Math.random() * allyArray.length))
                turnArray[i].turn(allyArray[attackTarget]);
            }
            //turnArray[i].turn();
        }

    }
    console.log("combat ended")
    for (var i = 0; i < allyArray.length; i++) {
        allyArray[i].levelUp();
    }
    if (hero.stats.currentHp > 0) {

    }
    else {
        console.log("You are defeated.")
    }
}
//item prototypes
function item(name, type, value, price, quantity) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.price = price;
    this.quantity = quantity
}
//equipable items
item.prototype.equip = function (user) {
    if (this.type === "Armor") {
        user.armor.name = this.name;
        user.armor.protection = this.value;
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
    if (this.type === "Healing" && this.quantity > 0) {
        user.stats.currentHp += this.value;
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
let dagger = new item("Dagger", "Weapon", 1, 0, 1);
let clothing = new item("Clothing", "Armor", 0, 0, 1);
let potion = new item("Potion", "Healing", 5, 10, 0);

function startGame() {
    let heroName = prompt("Choose Your Name")
    let hero = new character(heroName, "Freelancer", 1, 0, 0, true, true, 10, 10, 1, 1, 0, "None", 0, "None", 0, 0);
    dagger.equip(hero)
    clothing.equip(hero)
}
dagger.equip(hero)
clothing.equip(hero)

function firstEvent() {
    alert("You are " + hero.basics.name + ", a " + hero.basics.class + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    alert("Your test is to travel to The Valley of Dale, figure out what the problem is and solve it.")
    alert("You enter the valley and travel to a bridge guarded by bandits")
    alert("As you have no gold they attack you.")
    const bandit1 = new character("Bandit1", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0, 1);
    const bandit2 = new character("Bandit2", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0, 1);
    const bandit3 = new character("Bandit3", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0, 1);
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
//startGame()
firstEvent()