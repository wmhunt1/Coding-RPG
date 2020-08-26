//character prototype
class Character {
    constructor(name) {
        //this works for future
        this.action1 = function (target) { this.attack(target) };
        this.action2 = 0;
        this.action3 = 0;
        this.action4 = 0;
        this.basics = {
            name: name,
            class: "Freelancer",
            level: 1,
            xp: 0,
            alive: true,
            ally: true,
        };
        this.stats = {
            currentHp: 10,
            maxHp: 10,
            currentSp: 0,
            maxSp: 0,
            attack: 1,
            defense: 1,
            speed: 1,
            buff: 0,
            debuff: 0,
        };
        //later move these to an equipment this
        this.weapon = {
            name: "None",
            type: "None",
            damage: 0,
            damageType: "None",
            damageBonus: 0,
            tempBonus: 0,
        };
        this.armor = {
            name: "None",
            type: "None",
            protection: 0,
            protectionBonus: 0,
            tempBonus: 0,
        }
        //boots, gloves, etc, 
        this.accessory = {
            name: "None",
            effect: "NA",
            shieldBonus: 0
        }
        this.inventory = {
            gold: 0
        }
        this.journal = {
            fame: 0,
            infamy: 0,
            entries: [],
            tollBridgeEncounter: false,
            metWithContact: false,
            goblinSlayer: false,
            koboldsRescued: false,
            minersRescued: false,
            goblinBossDefeated: false
        }
        this.skills = {
            agility: {
                rank: "Untrained",
                value: 0,
            },
            crafting: {
                rank: "Untrained",
                value: 0,
            },
            gathering: {
                rank: "Untrained",
                value: 0,
            },
            lore: {
                rank: "Untrained",
                value: 0,
            },
            magic: {
                rank: "Untrained",
                value: 0,
            },
            marksman: {
                rank: "Untrained",
                value: 0,
            },
            melee: {
                rank: "Untrained",
                value: 0,
            },
            perception: {
                rank: "Untrained",
                value: 0,
            },
            prayer: {
                rank: "Untrained",
                value: 0,
            },
            speech: {
                rank: "Untrained",
                value: 0,
            },
            survival: {
                rank: "Untrained",
                value: 0,
            },
            thievery: {
                rank: "Untrained",
                value: 0,
            },
            Unarmed: {
                rank: "Untrained",
                value: 0
            },
        }
        this.conditions = {
            asleep: false,
            confused: false,
            burn: false,
            paralyze: false,
            poison: false,
        }
        this.immunities = {
            //elemental
            fire: false,
            fire: false,
            ice: false,
            lightning: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
        this.resistances = {
            //add more as used
            //elemental
            fire: false,
            force: false,
            ice: false,
            lightning: false,
            //physical
            bludgeoning: false,
            piercing: false,
            slashing: false
        }
    }
}
    Character.prototype.rest = function () {
    for (var i = 0; i<allyArray.length; i++) {
    allyArray[i].heal(allyArray[i].basics.maxHp)
    allyArray[i].basics.alive = true;
}
}
function createHero() {
    let heroName = prompt("Choose Your Name")
    let classChoice = prompt(heroName + " are you a (Fig)hter, (Mag)e, (Rog)ue, or a Freelancer?")
    if (classChoice === "Fig") {
        hero = new Fighter(heroName);
        shield.equip(hero)
    }
    else if (classChoice === "Mag") {
        hero = new Mage(heroName);
        spellbook.equip(hero)
    }
    else if (classChoice === "Rog") {
        hero = new Rogue(heroName);
    }
    else {
        hero = new Character(heroName);
    }
    // hero.basics.name = heroName;
    dagger.equip(hero)
    clothing.equip(hero)
    alert("You are " + hero.basics.name + ", a " + hero.basics.class + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    alert("But first you must complete a task.")
    alert("You task is go to The Village of Dale, located within The Valley of Dale, and speak with your contact at the local inn to recieve further.")
    alert("You went through The Dale Pass to enter the valley, the first steps on your journey.")
    alert("On your way to the village you encounter a toll bridge, which appears to be guarded by several rough-looking individuals.")
    enterValleyDale()
}