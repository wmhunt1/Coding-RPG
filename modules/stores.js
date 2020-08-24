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
    constructor(name, stock, buy) {
        this.name = name;
        this.stock = stock;
        this.function = "N/A"
        this.whatTheyBuy = buy;
    }
}
//subclasses for kinds of stores