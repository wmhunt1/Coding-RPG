$("document").ready(function () {
    // your code here
});
//creates hero
let hero = "";
//need to split into modules
function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
function tollBridgeEncounter() {
    if (hero.journal.tollBridgeEncounter == false) {
        //add option to pay and getting surrounded
        alert("The rough-looking individuals wear scraps of what could have once been guard armor but now look more like common bandits than respectable guards. ")
        alert("One of the 'guards' approaches you.")
        alert("'guard': this is an official Dale Guard tollbridge and you have to pay the toll. The toll is 10 gold so fork it over.")
        alert("You notice that there are more 'guards' hiddem in the treeline with crossbows pointed at you.")
        alert("You also see an unlucky victim of these guards off to the side of the river, beaten and bloodied. They apparently didn't or couldn't pay the toll.")
        let tChoice = prompt("Will you (P)ay the toll or try and (F)ight?")
        if (tChoice === "P") {
            hero.removeGold(10)
            alert("You hand over the gold without a fuss and prepare to cross the bridge.")
            alert("As you are about to cross out of the corner of your eye you see one of the 'guards' preparing to stab you.")
            alert("He stops as an armored knight charges the bandit(s), driving them off.")
        }
        else {
            const bandit1 = new Bandit("Bandit 1");
            const bandit2 = new Bandit("Bandit 2");
            const bandit3 = new Bandit("Bandit 3");
            const bandit4 = new Bandit("Bandit 3");
            const bandit5 = new Bandit("Bandit 3");
            turnArray = [hero, bandit1, bandit2, bandit3, bandit4, bandit5];
            enemyArray = [bandit1, bandit2, bandit3, bandit4, bandit5];
            enemyNumber = enemyArray.length;
            allyArray = [hero];
            combat()
            if (hero.stats.currentHp > 0) {
                alert("You sucessfully drive off the bandits")
                alert("An armored knight rides up to greet you.")
                alert("The knight dismounts.")
            }
            else {
                alert("The bandits are about to finish you off.")
                alert("An armored knight charges the bandit(s), driving them off and saving your life.")
                alert("The knight dismounts and helps your stand.")
            }

        }
        alert("Knight: Those bandits are getting audicious, they claim to be the Dale Guard but they are mere brigands.")
        if (hero.stats.currentHp < hero.stats.maxHp) {
            alert("Knight: You are alright? The knight pats you on the back and you feel some healing energy flow into you,")
            hero.heal(10)
            hero.basics.alive = true;
        }
        else { }
        alert("Knight: I am Abraham Arkwright, a paladin and resident of Dale.")
        alert("Abraham: You look like you can handle yourself but please allow me to escort you to the village.")
        hero.journal.tollBridgeEncounter = true;
        document.getElementById("villageDaleBtn").style.display = "block";
    }
    else {
        alert("The bridge is currently free of bandits.")
    }
}
function welcomeDale() {
    alert("You arrive at The Village of Dale with Abraham.")
    alert("You meet with Sweetheart the Ogre and are asked to clearout the Dwarven Mine of the goblins and rescue the miners.")
    alert("You stop by the smithy to pick up Ferra")
    //sweetheart gives you some gold for supplies.
    //or Abraham suggests that you go ask Ferra for help since it's her father's mine.
    hero.journal.metWithContact = true;
    hero.journal.goblinSlayer = true;
    document.getElementById("dMine").style.display = "block";
    allyArray[hero, ferra]
}
let ferra = new Cleric("Ferra Forgeheart");
chainShirt.equip(ferra)
shield.equip(ferra)
warHammer.equip(ferra)