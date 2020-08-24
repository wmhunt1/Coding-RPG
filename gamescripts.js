//const Item = require("./modules/items");
//need to split into modules
function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
let hero = "";
//character prototype
class Character {
    constructor() {
        //this works for future
        this.action1 = function (target) { this.attack(target) };
        this.action2 = 0;
        this.action3 = 0;
        this.action4 = 0;
        this.basics = {
            name: "Name",
            class: "Freelancer",
            level: 1,
            xp: 0,
            alive: true,
            ally: true,
        };
        this.stats = {
            currentHp: 10,
            maxHp: 10,
            currentSp: 0,
            maxSp: 0,
            attack: 1,
            defense: 1,
            speed: 1,
            buff: 0,
            debuff: 0,
        };
        //later move these to an equipment this
        this.weapon = {
            name: "None",
            type: "None",
            damage: 0,
            damageType: "None",
            damageBonus: 0,
            tempBonus: 0,
        };
        this.armor = {
            name: "None",
            type: "None",
            protection: 0,
            protectionBonus: 0,
            tempBonus: 0,
        }
        //boots, gloves, etc, 
        this.accessory = {
            name: "None",
            effect: "NA",
            shieldBonus: 0
        }
        this.inventory = {
            gold: 0
        }
        this.journal = {
            fame: 0,
            infamy: 0
        }
        this.skills = {
            agility: {
                rank: "Untrained",
                value: 0,
            },
            crafting: {
                rank: "Untrained",
                value: 0,
            },
            gathering: {
                rank: "Untrained",
                value: 0,
            },
            lore: {
                rank: "Untrained",
                value: 0,
            },
            magic: {
                rank: "Untrained",
                value: 0,
            },
            marksman: {
                rank: "Untrained",
                value: 0,
            },
            melee: {
                rank: "Untrained",
                value: 0,
            },
            perception: {
                rank: "Untrained",
                value: 0,
            },
            prayer: {
                rank: "Untrained",
                value: 0,
            },
            speech: {
                rank: "Untrained",
                value: 0,
            },
            survival: {
                rank: "Untrained",
                value: 0,
            },
            thievery: {
                rank: "Untrained",
                value: 0,
            },
            Unarmed: {
                rank: "Untrained",
                value: 0
            },
        }
        this.conditions = {
            asleep: false,
            confused: false,
            burn: false,
            paralyze: false,
            poison: false,
        }
        this.immunities = {
            //elemental
            fire: false,
            fire: false,
            ice: false,
            lightning: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
        this.resistances = {
            //add more as used
            //elemental
            fire: false,
            force: false,
            ice: false,
            lightning: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
    }
}
//player classes
class Fighter extends Character {
    constructor() {
        super();
        this.stats.profession = "Fighter"
    }
}
class Mage extends Character {
    constructor() {
        super();
        this.stats.profession = "Mage"
    }
}
class Rogue extends Character {
    constructor() {
        super();
        this.stats.profession = "Rogue"
    }
}
//npc classes
class Bandit extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Bandit";
        this.basics.xp = 10;
        this.basics.ally = false;
        this.stats.currentHp = 4;
        this.stats.maxHp = 4;
        this.stats.attack = 0;
        this.stats.defense = 0;
        this.stats.speed = 0;
        this.weapon.name = "Shortsword";
        this.weapon.damage = 2;
        this.weapon.type = "Melee"
        this.weapon.damageType = "Piercing";
        this.armor.name = "Leather";
        this.armor.type = "Light"
        this.armor.protection = 1;
        this.inventory.gold = 5;
    }
}
//changes based on checkResist
let immune = false;
let resist = false;
let skipTurn = false;
//resist prototype
Character.prototype.checkCondition = function () {
    skipTurn = false;
    if (this.conditions.asleep) {
        skipTurn = true;
        alert(this.basics.name + " missed turn due to sleep")
    }
    else if (this.conditions.burn) {
        this.damage(1)
        alert(this.basics.name + " Took 1 damage due to burn.")
    }
    else if (this.conditions.confused) {
        alert(this.basics.name + " Attacked self due to confusion")
        this.attack(this)
        skipTurn = true;
    }
    else if (this.conditions.paralyze) {
        alert(this.basics.name + " Missed turn due to paralyze")
        skipTurn = true;
    }
    else if (this.conditions.poison) {
        this.damage(1)
        alert(this.basics.name + " Took 1 damage due to poison.")
    }
    else {

    }
}
Character.prototype.checkImmune = function (target) {
    //add more as used
    if (target.resistances.fire == true && this.weapon.damageType === "Fire") {
        resist = true;
    }
    else if (target.resistances.piercing == true && this.weapon.damageType === "Piercing") {
        resist = true;
    }
    else if (target.resistances.slashing == true && this.weapon.damageType === "Slashing") {
        resist = true;
    }
    else {
        resist = false;
    }
}
Character.prototype.checkResist = function (target) {
    //add more as used
    if (target.resistances.fire == true && this.weapon.damageType === "Fire") {
        resist = true;
    }
    else if (target.resistances.piercing == true && this.weapon.damageType === "Piercing") {
        resist = true;
    }
    else if (target.resistances.slashing == true && this.weapon.damageType === "Slashing") {
        resist = true;
    }
    else {
        resist = false;
    }
}
//attack function
Character.prototype.attack = function (target) {
    alert(this.basics.name + " attacks " + target.basics.name + " with their " + this.weapon.name)
    console.log(target.stats.currentHp)
    let hitChance = .5 - .1 * (target.stats.defense + target.stats.buff - target.stats.debuff);
    console.log(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (this.stats.attack + this.stats.buff - this.stats.debuff);
    console.log(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        let dmg = this.weapon.damage + this.weapon.damageBonus + this.weapon.tempBonus - target.armor.protection - target.armor.protectionBonus - target.armor.tempBonus;
        console.log(dmg)
        if (target.basics.alive == true) {
            if (this.weapon.damage + this.weapon.damageBonus + this.weapon.tempBonus <= target.armor.protection + target.armor.protectionBonus + target.armor.tempBonus) {
                alert(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
            }
            else {
                this.checkResist(target)
                this.checkImmune(target)
                if (resist == true) {
                    alert(target.basics.name + "resisted the " + this.weapon.damageType + "and took " + dmg / 2 + " damage.")
                    target.damage(dmg / 2)
                    alert(target.basics.name + " loses " + dmg / 2 + " Hitpoints.")
                }
                else if (immune == true) {
                    alert(target.basics.name + "is immune to " + this.weapon.damageType + " damage.")
                }
                else {
                    alert(dmg + " " + this.weapon.damageType + " damage dealt to " + target.basics.name)
                    target.damage(dmg)
                    alert(target.basics.name + " loses " + dmg + " Hitpoints.")
                }
            }
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
Character.prototype.isAlive = function () {
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
Character.prototype.levelUp = function () {
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
Character.prototype.heal = function (cure) {
    this.stats.currentHp += cure;
    if (this.stats.currentHp > this.stats.maxHp) {
        this.stats.currentHp = this.stats.maxHp;
    }
    else {
        //nothing
    }
}
Character.prototype.damage = function (wound) {
    this.stats.currentHp -= wound;
}
//turn function
Character.prototype.reset = function () {
    this.stats.debuff = 0;
    this.stats.debuff = 0;
    this.weapon.tempBonus = 0;
    this.armor.tempBonus = 0;
    this.conditions.asleep = false;
    this.conditions.burn = false;
    this.conditions.confused = false;
    this.conditions.paralyze = false;
    this.conditions.poison = false;
}
Character.prototype.conditionRecover = function () {
    let recoverRoll = Math.random();
    if (recoverRoll >= .5) {
        console.log(this.basics.name + " recovered from conditions.")
        this.conditions.asleep = false;
        this.conditions.burn = false;
        this.conditions.confused = false;
        this.conditions.paralyze = false;
        this.conditions.poison = false;
    }
    else {

    }
}
Character.prototype.turn = function () {
    if (this.basics.alive == true) {
        this.checkCondition()
        if (skipTurn == true) { }
        else {
            if (this.basics.ally == true) {
                let action = prompt("(A)ttack or user a (P)otion?");
                if (action === "A") {
                    let target = prompt("Choose target by number (starting from 0).");
                    if (enemyArray[target] === undefined) {
                        alert(this.basics.name + " attacks no one.")
                    }
                    else {
                        this.action1(enemyArray[target]);
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
                this.action1(allyArray[target]);
            }
        }
    }
    else {
        //so no turn
    }
    this.conditionRecover()
}
//combat elements
let turnArray = [];
let enemyArray = [];
let allyArray = [];
let enemyNumber = 0;
//combat function
function combat() {
    turnArray.sort((a, b) => (a.stats.speed < b.stats.speed) ? 1 : (a.stats.speed === b.stats.speed) ? ((a.basics.name > b.basics.name) ? 1 : -1) : -1)
    console.log(turnArray)
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
        for (var i = 0; i < enemyArray.length; i++) {
            hero.addGold(enemyArray[i])
        }
    }
    else {
        alert("You are defeated.")
    }
}
Character.prototype.rest = function () {
    for (var i = 0; i < allyArray.length; i++) {
        allyArray[i].heal(allyArray[i].basics.maxHp)
        allyArray[i].basics.alive = true;
    }
}
//gold functions
Character.prototype.addGold = function (x) {
    this.inventory.gold += x;
    alert(hero.stats.name + " gained " + x + " gold.")
}
Character.prototype.removeGold = function (x) {
    this.inventory.gold -= x;
}
Character.prototype.checkGold = function (x) {
    if (this.inventory.gold == x) {
        this.inventory.gold -= x;
        alert(hero.stats.name + " lost " + x + " gold.")
    }
    else {
        alert(this.basics.name + "does not have enough gold.")
    }
}
//item prototypes
class Item {
    constructor() {
        this.name = "";
        this.type = "";
        this.damageType = "";
        this.value = "";
        this.effect = "";
        this.effectTxt = ""
        this.price = "";
        this.quantity = "";
    }
}
class Accessory extends Character {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
class Armor extends Character {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt
        this.price = price;
        this.quantity = quantity;
    }
}
class Consumable extends Character {
    constructor(name, type, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
class Treasure extends Character {
    constructor(name, type, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
}
class Weapon extends Character {
    constructor(name, type, damageType, value, effect, effectTxt, price, quantity) {
        super();
        this.name = name;
        this.type = type;
        this.damageType = damageType;
        this.value = value;
        this.effect = effect;
        this.effectTxt = effectTxt;
        this.price = price;
        this.quantity = quantity;
    }
}
//make subclasses for different item types: weapons, armor. consumable, treasure etc.
//equipable items
Accessory.prototype.equip = function (user) {
    user.accessory.shieldBonus = 0;
    user.accessory.name = this.name;
    user.accessory.effect = this.effectTxt;
    this.effect;
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
}
Armor.prototype.equip = function (user) {
    user.armor.protectionBonus = 0;
    user.armor.name = this.name;
    user.armor.protection = this.value;
    user.armor.effect = this.effectTxt;
    this.effect;
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
}
Weapon.prototype.equip = function (user) {
    user.weapon.name = this.name;
    user.weapon.damage = this.value;
    user.weapon.damageType = this.damageType;
    user.weapon.effect = this.effectTxt;
    this.effect;
    console.log(user.basics.name + " equiped " + this.name)
    console.log(user)
}
Item.prototype.buy = function (buyer) {
    item.quantity++;
    buyer.checkGold(item.price);
}
Item.prototype.sell = function (seller) {
    item.quantity--;
    seller.addGold(item.value / 2);
}
//accessories
let shield = new Accessory("Shield", "Shield", 1, function (user) {user.accessory.shieldBonus += 1}, "Raises Shield Bonus", 0, 1)
let spellbook = new Accessory("Basic Spellbook", "Spellbook", 1, function (user) { }, "", 0, 1)
//armor
let clothing = new Armor("Clothing", "Clothing", 0, function (user, value) { }, "", 0, 1);
let leather = new Armor("Leather", "Light", 1, function (user, value) { }, "", 0, 1);
//consumables
let potion = new Consumable("Potion", "Healing", 5, function (user, value) { user.heal(value); }, "Heals user for 5 HP", 10, 1);
//weapons
let club = new Weapon("Club", "Melee", "Bludgeoning", 1, function (user, value) { }, "", 0, 1);
let dagger = new Weapon("Dagger", "Melee", "Slashing", 1, function (user, value) { }, "", 0, 1);
let sling = new Weapon("Sling", "Ranged", "Bludgeoning", 1, function (user, value) { }, "", 0, 1);
let shortSword = new Weapon("Short Sword", "Melee", "Slashing", 2, function (user, value) { }, "", 0, 1);
let wand = new Weapon("Wand", "Magic", "Force", 1, function (user, value) { }, "", 0, 1);

//let fireArmor = new item("Fire Armor", "Armor", 0, function (user) {user.resistances.fire = true}, 0, 1);
//creates hero
function createHero() {
    let heroName = prompt("Choose Your Name")
    let classChoice = prompt(heroName + " are you a (Fig)hter, (Mag)e, (Rog)ue, or a Freelancer?")
    if (classChoice === "Fig") {
        hero = new Fighter();
        shield.equip(hero)
    }
    else if (classChoice === "Mag") {
        hero = new Mage();
        spellbook.equip(hero)
    }
    else if (classChoice === "Rog") {
        hero = new Rogue();
    }
    else {
        hero = new Character();
    }
    hero.basics.name = heroName;
    dagger.equip(hero)
    clothing.equip(hero)
}
//businesss
class Business {
    constructor(name, stock, buy) {
        this.name = name;
        this.stock = stock;
        this.function = "N/A"
        this.whatTheyBuy = buy;
    }
}
class Quest {
    constructor(name, reward) {
        this.name = name;
        this.reward = reward;
        //events and combats
    }
}
function firstEvent() {
    //add option to pay and getting surrounded
    alert("You are " + hero.basics.name + ", a " + hero.basics.class + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    alert("Your test is to travel to The Valley of Dale, figure out what the problem is and solve it.")
    alert("You enter the valley and travel to a bridge guarded by bandits")
    alert("As you have no gold they attack you.")
    const bandit1 = new Bandit("Bandit 1");
    const bandit2 = new Bandit("Bandit 2");
    const bandit3 = new Bandit("Bandit 3");
    turnArray = [hero, bandit1, bandit2, bandit3];
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
    hero.heal(10)
    hero.basics.alive = true;
    alert("Knight: I am Abraham Arkwright, paladin and current guardian of The Valley of Dale.")
    alert("Abraham: We should get to the village before they bring reinforcements.")
}
function secondEvent() {
    alert("You arrive at The Village of Dale with Abraham.")
}