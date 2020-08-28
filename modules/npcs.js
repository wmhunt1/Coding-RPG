//companions
//abraham arkwright
let abe = new Paladin("Abraham Arkwright")
abe.basics.level += 10;
abe.stats.currentHp += 100
abe.stats.maxHp += 100;
abe.stats.attack += 10;
abe.stats.defense += 10;
paladinArmor.equip(abe)
holySword.equip(abe)
shield.equip(abe)
//ferra forgeheart
let ferra = new Cleric("Ferra Forgeheart");
clothing.equip(ferra)
shield.equip(ferra)
warHammer.equip(ferra)
//npcs
let ambrosius = new Character("Ambrosius the Sage");
let sheepscale = new Character("Sheepscale");
let sweetheart = new Character("Sweetheart the Ogre");