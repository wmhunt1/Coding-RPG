function character(name, profession, level, currentHp, maxHp, attack, defense, speed, weapon, damage, armor, protection) {
    this.basics = {
        name: name,
        class: profession,
        level: level
    };
    this.stats = {
        currentHp: currentHp,
        maxHp: maxHp,
        attack: attack,
        defense: defense,
        speed: speed
    };
    this.weapon = {
        name: weapon,
        damage: damage
    };
    this.armor = {
        name: armor,
        protection: protection
    }

}
character.prototype.attack = function (target) {
    console.log(this.basics.name + " attacks " + target.basics.name)
    console.log(target.stats.currentHp)
    if (this.weapon.damage <= target.armor.protection) {
        console.log(this.basics.name + "'s attack bounces harmlessly off of " + target.basics.name + "'s " + target.armor.name)
    }
    else {
        target.stats.currentHp -= (this.weapon.damage - target.armor.protection)
    }
    console.log(target.stats.currentHp)
};
let hero = new character("Hero", "Freelancer", 1, 1, 1, 1, 1, 0, "Stick", 1, "Naked", 1);
const bandit = new character("Bandit", "Bandit", 1, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
console.log(bandit)
const goblin = new character("Goblin", "Goblin", 1, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 1);
console.log(goblin)
bandit.attack(hero);
hero.attack(bandit);