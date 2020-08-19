let turnArray = [];
let enemyArray = [];
let allyArray = [];
var enemyNumber = 0;
//character prototype
function character(name, profession, level, xp, alive, ally, currentHp, maxHp, attack, defense, speed, weapon, damage, armor, protection) {
    this.basics = {
        name: name,
        class: profession,
        level: level,
        xp: xp,
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
}
//attack function
character.prototype.attack = function (target) {
    console.log(this.basics.name + " attacks " + target.basics.name)
    console.log(target.stats.currentHp)
    if (target.basics.alive == true) {
        if (this.weapon.damage <= target.armor.protection) {
            console.log(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
        }
        else {
            target.stats.currentHp -= (this.weapon.damage - target.armor.protection)
        }
        console.log(target.stats.currentHp)
    }
    else {
        console.log(target.basics.name + " is already dead.")
    }
};
//isalive function
character.prototype.isAlive = function () {
    if (this.stats.currentHp > 0) {
        console.log(this.basics.name + " is still alive!");
        console.log("\n-------------\n");
        // return true;
    }
    else if (this.basics.alive == false) {
        console.log("still dead")
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
    this.isAlive()
    if (this.basics.alive == true) {
        this.attack(target);
    }
    else {
        console.log("no turn for dead character")
    }
}
//combat function
function combat() {

    while (enemyNumber != 0) {
        for (i = 0; i < turnArray.length; i++) {
            if (turnArray[i].basics.ally == true) {
                let attackTarget = Math.floor((Math.random() * enemyArray.length))
                turnArray[i].turn(enemyArray[attackTarget]);
            }
            else {
                let attackTarget = Math.floor((Math.random() * allyArray.length))
                turnArray[i].turn(allyArray[attackTarget]);
            }
        }
        console.log("combat ended")
        for (var i = 0; i < allyArray.length; i++) {
            allyArray[i].levelUp();
        }
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
item.prototype.equip(user)
{
    if (this.type === "Armor") {
        user.armor.name = this.name;
        user.armor.protection = this.value;
    }
    else if (this.type === "Weapon") {
        user.weapon.name = this.name;
        user.weapon.damage = this.value;
    }
    else {

    }
}
//
item.prototype.use(user)
{
    if (this.type === "Healing" && this.quantity > 0)
    {
        user.stats.currentHp += this.value;
        this.quantity --;
    }
    else
    {   
        console.log("You don't have any " + this.name + "(s)")
    }
}
let dagger = new item("Dagger", "Weapon", 1, 0, 1);
let clothing = new item("Clothing", "Armor", 0, 0, 1);
//creates hero
let hero = new character("Hero", "Freelancer", 1, 0, true, true, 10, 10, 1, 1, 0, "Dagger", 1, "Clothing", 0);
//creates ally
let abe = new character("Abraham Arkwright", "Paladin", 1, 0, true, true, 10, 1, 1, 1, 0, "Longsword", 1, "Plate", 0);
//creates bandit
const bandit1 = new character("Bandit1", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
const bandit2 = new character("Bandit2", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
const bandit3 = new character("Bandit3", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
const bandit4 = new character("Bandit4", "Thug", 1, 10, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
function testCombat() {
    console.log("combat test")
    turnArray = [hero, bandit1, bandit2, bandit3, bandit4, abe];
    console.log(turnArray)
    enemyArray = [bandit1, bandit2, bandit3, bandit4];
    enemyNumber = enemyArray.length;
    allyArray = [hero, abe];
    console.log(enemyNumber);
    combat()
}
testCombat()