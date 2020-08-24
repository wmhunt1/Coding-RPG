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
function firstEvent() {
    //add option to pay and getting surrounded
    alert("You are " + hero.basics.name + ", a " + hero.basics.class + ". You have the opportunity to join The Birdwatchers of The Imperial Federation.")
    alert("Your test is to travel to The Valley of Dale, figure out what the problem is and solve it.")
    alert("You enter the valley and travel to a bridge guarded by bandits")
    alert("As you have no gold they attack you.")
    const bandit1 = new Bandit("Bandit 1");
    const bandit2 = new Bandit("Bandit 2");
    const bandit3 = new Bandit("Bandit 3");
    turnArray = [hero, bandit1, bandit2, bandit3];
    enemyArray = [bandit1, bandit2, bandit3];
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
    alert("Knight: Those bandits are getting audicious.")
    alert("Knight: You are alright? The knight pats you on the back and you feel some healing energy flow into you,")
    hero.heal(10)
    hero.basics.alive = true;
    alert("Knight: I am Abraham Arkwright, paladin and current guardian of The Valley of Dale.")
    alert("Abraham: We should get to the village before they bring reinforcements.")
}
function secondEvent() {
    alert("You arrive at The Village of Dale with Abraham.")
}