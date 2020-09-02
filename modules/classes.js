//player classes
class Artificer extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.stats.profession = "Artificer"
        this.action2 = function(user) {bomb.effect(user)}
    }
}
class Barbarian extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Barbarian"
        this.action2 = function(user) {rage.effect(user)}

    }
}
class Bard extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Bard"
        this.action2 = function(user) {inspireAlly.effect(user)}
    }
}
class Cleric extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Cleric";
        this.action2 = function(user) {cureWounds.effect(user)}
    }
}
class Druid extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Druid"
    }
}
class Fighter extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Fighter"
        this.action2 = function(user) {doubleAttack.effect(user)}
    }
}
class Monk extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Monk"
    }
}
class Paladin extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Paladin"
    }
}
class Ranger extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Ranger"
    }
}
class Rogue extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Rogue"
    }
}
class Sorcerer extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Sorcerer"
    }
}
class Warlock extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Warlock"
    }
}
class Wizard extends Character {
    constructor(name) {
        super();
        this.basics.name = name;
        this.basics.profession = "Wizard"
        this.action2 = function(user) {magicMissile.effect(user)}
    }
}
//npc classes
class Bandit extends Character {
    constructor(name, weapon) {
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
        this.weapon.name = weapon;
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
class Spider extends Character {
    constructor(name, currentHp, maxHp) {
        super();
        this.action1 = function (target) {poisonFangs(this, target) }
        this.basics.name = name;
        this.basics.profession = "Bandit";
        this.basics.xp = maxHp*5;
        this.basics.type = "Animal"
        this.basics.ally = false;
        this.stats.currentHp = currentHp;
        this.stats.maxHp = maxHp;
        this.stats.attack = 0;
        this.stats.defense = 0;
        this.stats.speed = 0;
        this.weapon.name = "Bite";
        this.weapon.damage = 1;
        this.weapon.type = "Melee"
        this.weapon.damageType = "Piercing";
        this.armor.name = "Carapace";
        this.armor.type = "Natural"
        this.armor.protection = 0;
        this.inventory.gold = 0;
    }
}