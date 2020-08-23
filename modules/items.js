//item prototypes
//will need something to undo stat changes from items when unequiped
//perhaps standard values or just add to buffs etc.
class Item {
    constructor(name, type, damageType, value, effect, price, quantity) {
        this.name = name;
        this.type = type;
        this.damageType = damageType;
        this.value = value;
        this.effect = effect;
        this.price = price;
        this.quantity = quantity;
    }
}
//make subclasses for different item types: weapons, armor. consumable, treasure etc.
    //equipable items
    Item.prototype.equip = function (user) {
    user.weapon.damageBonus = 0;
    user.armor.protectionBonus = 0;
    if (this.type === "Armor") {
    user.armor.name = this.name;
    user.armor.protection = this.value;
    this.effect;
    console.log(user.basics.name + " equiped " + this.name)
}
else if (this.type === "Weapon") {
    user.weapon.name = this.name;
    user.weapon.damage = this.value;
    user.weapon.damageType = this.damageType;
    console.log(user.basics.name + " equiped " + this.name)
}
else {

}
    console.log(user)
}
    //usable items
    Item.prototype.use = function (user) {
    if (this.type === "Consumable" && this.quantity> 0) {
    alert(user.basics.name + " uses a " + this.name)
    this.effect;
    this.quantity--;
}
else {
    console.log("You don't have any " + this.name + "(s)")
}
}
    Item.prototype.buy = function (buyer) {
    item.quantity++;
    buyer.checkGold(item.price);

}
    Item.prototype.sell = function (seller) {
    item.quantity--;
    buyer.addGold(item.value / 2);
}
let dagger = new Item("Dagger", "Weapon", "Slashing", 1, function (user, value) { }, 0, 1);
let clothing = new Item("Clothing", "Armor", "NA", 0, function (user, value) { }, 0, 1);
let potion = new Item("Potion", "Consumable", "NA", 5, function (user, value) { user.heal(value); }, 10, 1);
//let fireArmor = new item("Fire Armor", "Armor", 0, function (user) {user.resistances.fire = true}, 0, 1);

module.exports = Item;