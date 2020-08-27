//have arrays for item types
//gold functions
let enoughGold = false;
Character.prototype.addGold = function (x) {
    this.inventory.gold += x;
    alert(hero.stats.name + " gained " + x + " gold.")
}
Character.prototype.removeGold = function (x) {
    this.inventory.gold -= x;
    alert(this.basics.name + " loses " + x + " gold")
}
Character.prototype.checkGold = function (x) {
    if (this.inventory.gold >= x) {
        enoughGold = true;
    }
    else {
        alert(this.basics.name + " does not have enough gold.")
        enoughGold = false;
    }
}
//buy function
Item.prototype.buy = function (buyer) {
    item.quantity++;
    buyer.checkGold(item.price);
}
//sell function
Item.prototype.sell = function (seller) {
    item.quantity--;
    seller.addGold(item.value / 2);
}
//businesss
class Store {
    constructor() {
        this.name = "";
        this.owner = "";
        this.location = ""
        this.stock = "";
        this.use = ""
        this.useLetter = ""
        this.useFunction = ""
        this.whatTheyBuy = "";
        this.event1 = "";
        this.event2 = "";
    }
}
class General extends Store {
    constructor(name, owner, event1, event2) {
        super();
        this.name = name;
        this.stock = "General Goods";
        this.owner = owner;
        this.use = "None";
        this.useLetter = "";
        this.useFunction = function () {

        }
        this.whatTheyBuy = "Anything"
        this.event1 = event1;
        this.event2 = event2;
    }
}
//subclasses for kinds of stores
class Inn extends Store {
    constructor(name, owner, cost, event1, event2) {
        super();
        this.name = name;
        this.stock = "Food";
        this.owner = owner;
        this.cost = cost;
        this.use = "(G)et a room?";
        this.useLetter = "G";
        this.useFunction = function getRoom() {
            let choice = prompt("Get a room for " + this.cost + " (Y/N)?")
            if (choice === "Y") {
                hero.checkGold(this.cost)
                if (enoughGold == true) {
                    hero.removeGold(this.cost)
                    hero.rest()
                    alert("The party spends the night at the " + this.name)
                }
                else {
                    //
                }
            }
            else {
                alert("You decide not to rent a room.")
            }

        }
        this.whatTheyBuy = "N/A"
        this.event1 = event1;
        this.event2 = event2;
    }
}
class Smith extends Store {
    constructor(name, owner, event1, event2) {
        super();
        this.name = name;
        this.stock = "Weapons and Armor";
        this.owner = owner;
        this.use = "(I)mprove Weapon or Armor?";
        this.useLetter = "I";
        this.useFunction = function forge() {

        }
        this.whatTheyBuy = "Weapons and Armor";
        this.event1 = event1;
        this.event2 = event2;
    }
}
Store.prototype.buy = function () {

}
Store.prototype.sell = function () {

}
//enter store function
//maybe option for events
Store.prototype.enterStore = function (condition) {
    alert("You enter " + this.name)
    if (condition === false) {
        this.event1()
        hero.journal.condition = false;
    }
    else {
        let sChoice = prompt(this.owner + " Asks, would you like to (B)uy, (S)ell, or " + this.use)
        if (sChoice === "B") {
            this.buy()
        }
        else if (sChoice === "S") {
            this.sell()
        }
        else if (sChoice === this.useLetter) {
            this.useFunction()
        }
        else {

        }
    }
}
//stores
//general
const triggShop = new General("Trigg Sprocket's General Goods and Sundries", "Trigg Sprocket")
//inns
const dreamingWorker = new Inn("Dreaming Worker Inn", "Sweetheart the Ogre.", 1, function () {
    //finish this dialog
    alert("You speak with the barmaid who directs you to Sweeheart and she has you speak with her in the kitchen.")
    alert("She tells you to help the village so they'll trust you before you can start.")
    hero.journal.metWithContact = true;
    hero.journal.goblinSlayer = true;
    //other quests
}
);
//smiths
const forgeheartSmithy = new Smith("Forgeheart Smithy", "Faldan Forgeheart.", function () {
    alert("Faldan asks you to kill goblins")
    alert("Ferra decides to go with you.")
    document.getElementById("dMine").style.display = "block";
    allyArray[hero, ferra]
});