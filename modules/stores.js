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
Store.prototype.enterStore = function (event, condition) {
    alert("You enter " + this.name)
    if (event === condition) {
        this.event1()
    }
    else {
    }
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
        alert("You leave.")
    }
}
//stores
//general
const triggShop = new General("Trigg Sprocket's General Goods and Sundries", "Trigg Sprocket")
//inns
const dreamingWorker = new Inn("Dreaming Worker Inn", "Sweetheart the Ogre.", 1, function () {
    //finish this dialog
    //alert("You speak with the barmaid who directs you to Sweeheart and she has you speak with her in the kitchen.")
    //alert("She tells you to help the village so they'll trust you before you can start.")
    alert("There are a few dwarves drinking and playing cards while a blonde woman with some elven heritage brings cleans.")
    alert("Barmaid: Good morning, I'm Faye, what can I get you?")
    alert(hero.basics.name + ": I'm looking for the innkeeper.")
    alert("Faye: *looks towards the kitchen* There's someone here to see you, Ma'am.")
    alert("Ma'am: I'll be out in a moment, dear.")
    alert("A moment later, a giant of a woman walks out wearing a pink dress with an apron. She has a matronly quality about her...she's also an ogre.")
    alert("Ma'am: Well hello there, I'm Sweetheart the Ogre, the owner of this establishment. What can I do for you?")
    alert(hero.basics.name + ": hello Sweetheart...")
    alert("Sweetheart: Please it's Sweetheart the Ogre, otherwise I'm doing to think you're flirting with me *she says with a wink*.")
    alert(hero.basics.name + ": alright Sweetheart the Ogre. *You discretly hand her a letter.")
    alert("Sweetheart: *takes the letter and reads it* Come speak with me in the kitchen for a moment.")
    alert("You follow her into the kitchen*")
    alert("Sweetheart: So you're, " + hero.basics.name + " our " + hero.basics.profession + ".")
    alert("Sweetheart: Before you start you're going to need to improve your relationship with the villagers.")
    alert("Sweetheart: To begin, I believe that Faldan Forgeheart over at the smithy is looking for help reclaiming the mine.")
    alert("Sweetheart: It would also get these drunken layabouts out of my inn *she says looking over at the Dwarves.")
    alert("You leave the inn.")
    hero.journal.metWithContact = true;
    hero.journal.goblinSlayer = true;
    //other quests
}
);
//smiths
const forgeheartSmithy = new Smith("Forgeheart Smithy", "Faldan Forgeheart.", function () {
    if (hero.journal.spokeWithFaldan === false) {
        alert("Faldan asks you to kill goblins")
        alert("Ferra decides to go with you.")
        document.getElementById("dMine").style.display = "block";
        allyArray[hero, ferra]
        hero.journal.spokeWithFaldan = true;
    }
    else if (hero.journal.goblinSlayer === "Completed") { }
    else {
        if (hero.journal.minersRescued === false) {
            alert("Faldan asks if you're going to go rescue them.")
        }
        else {
            if (hero.journal.goblinBossDefeated === false) {
                alert("Faldans apprecites you rescuing the miners but still wants the goblins killed.")
            }
            else {
                alert("Faldan Rewards you.")
                hero.journal.goblinSlayer = "Completed";
            }
        }
    }
});