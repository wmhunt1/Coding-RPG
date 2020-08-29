//player classes
class Artificer extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.stats.profession = "Artificer"
    }
}
class Barbarian extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.stats.profession = "Barbarian"
    }
}
class Bard extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.stats.profession = "Bard"
    }
}
class Cleric extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.stats.profession = "Cleric"
    }
}
class Fighter extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Fighter"
    }
}
class Mage extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Mage"
        this.action2 = ""
    }
}
class Paladin extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Paladin"
    }
}
class Rogue extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Rogue"
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
class Goblin extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Goblin";
        this.basics.xp = 10;
        this.basics.ally = false;
        this.stats.currentHp = 2;
        this.stats.maxHp = 2;
        this.stats.attack = 0;
        this.stats.defense = 0;
        this.stats.speed = 0;
        this.weapon.name = "Club";
        this.weapon.damage = 1;
        this.weapon.type = "Melee"
        this.weapon.damageType = "Bludgeoning";
        this.armor.name = "Rags";
        this.armor.type = "Cloth";
        this.armor.protection = 0;
        this.inventory.gold = 1;
    }
}
class GoblinBoss extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Goblin Boss";
        this.basics.xp = 50;
        this.basics.ally = false;
        this.stats.currentHp = 4;
        this.stats.maxHp = 4;
        this.stats.attack = 0;
        this.stats.defense = 0;
        this.stats.speed = 0;
        this.weapon.name = "Rusty Sword";
        this.weapon.damage = 2;
        this.weapon.type = "Melee"
        this.weapon.damageType = "Slashing";
        this.armor.name = "Leather";
        this.armor.type = "Light";
        this.armor.protection = 1;
        this.inventory.gold = 20;
    }
}