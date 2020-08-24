//gold functions
let enoughGold = false;
Character.prototype.addGold = function (x) {
    this.inventory.gold += x;
    alert(hero.stats.name + " gained " + x + " gold.")
}
Character.prototype.removeGold = function (x) {
    this.inventory.gold -= x;
}
Character.prototype.checkGold = function (x) {
    if (this.inventory.gold >= x) {
        this.inventory.gold -= x;
        alert(hero.stats.name + " lost " + x + " gold.")
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
    }
}
Store.prototype.enterStore = function()
{
    alert ("Welcome to " + this.name + " owned by " + this.owner + " and located in " + this.location)
    let sChoice = prompt("Would you like to (B)uy, (S)ell, or " + this.use)
    if (sChoice === "B")
    {

    }
    else if (sChoice === "S")
    {

    }
    else if (sChoice === this.useLetter)
    {
        
    }
    else
    {

    }
}
//subclasses for kinds of stores
class Inn extends Store {
    constructor(name, owner, location,  cost, useLetter) {
        super();
        this.name = name;
        this.stock = "Food"
        this.owner = owner
        this.location = location;
        this.cost = cost;
        this.use = "(G)et a room?"
        this.useLetter = useLetter;
        this.useFunction = function getRoom (){
            let choice = prompt ("Get a room for " + this.cost + " (Y/N)?")
            if (choice === "Y")
            {
                //hero.checkGold(this.cost)
                // if (enoughgold == true)
                // {
                //     hero.rest()
                //     alert("The party spends the night at the " + this.name)
                // }
                // else
                // {
                //     alert ("You didn't have enough gold.")
                // }
                if (hero.inventory.gold >= this.cost)
                {
                    hero.rest()
                    alert("The party spends the night at the " + this.name)
                }
                else
                {
                    alert ("You didn't have enough gold.")
                }
            }
            else
            {
                alert("You decide not to rent a room.")
            }

        }
        this.whatTheyBuy = "N/A"
    }
}
//stores
//inns
const dreamingWorker = new Inn ("Dreaming Worker Inn", "Sweetheart the Ogre.", "The Village of Dale", 5, "(G)");