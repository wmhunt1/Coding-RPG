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
class Commoner extends Character {
    constructor(name, profession) {
        super();
        this.basics.name = name;
        this.basics.profession = profession;
    }
}