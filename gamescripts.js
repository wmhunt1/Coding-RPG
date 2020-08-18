let turnArray = [];
let enenmyArray = [];
function character(name, profession, level, alive, ally, currentHp, maxHp, attack, defense, speed, weapon, damage, armor, protection) {
    this.basics = {
        name: name,
        class: profession,
        level: level,
        alive: alive,
        ally: ally
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
character.prototype.isAlive = function(){
	if (this.stats.currentHp > 0) {
		console.log(this.basics.name + " is still alive!");
		console.log("\n-------------\n");
		// return true;
    }
    else
    {
	console.log(this.basics.name + " has died!");
    this.basics.alive = false;
    }
};
let hero = new character("Hero", "Freelancer", 1, true, true, 10, 10, 1, 1, 0, "Stick", 1, "Naked", 0);
const bandit = new character("Bandit", "Bandit", 1, true, false, 1, 1, 1, 1, 0, "Shortsword", 1, "Leather", 0);
character.prototype.turn = function(target){
    this.isAlive()
    if (this.basics.alive == true)
    {
        this.attack(target);
    }
    else
    {
        console.log("no turn for dead character")
    }
}
bandit.turn(hero);
hero.turn(bandit);
bandit.turn(hero);
hero.turn(bandit);