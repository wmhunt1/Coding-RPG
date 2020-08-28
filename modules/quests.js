//maybe move quest dialog etc into the quests. events and entries are seperate.
class Quest {
    constructor(name, reward, event1, event2, event3) {
        this.name = name;
        this.reward = reward;
        this.status = "Incomplete"
        this.event1 = event1,
        this.event2 = event2,
        this.event3 = event3
    }
}
Quest.prototype.addJournal = function()
{    
    //add jounral entriees by this.event or entry.
}
Quest.prototype.getQuest = function()
{
    //first journal entry or the true/false
}
Quest.prototype.questReward = function ()
{
    hero.addGold(this.reward)
}
Quest.prototype.completeQuest = function()
{
    this.stats = "Completed"
    alert("You have completed " + this.name)
    this.questReward()
}
//subclasses for kinds of quests
const welcomeDale = new Quest("Welcome to Dale", 10, 
//tollroad event
function () {
    if (hero.journal.tollBridgeEncounter == false) {
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
            alert("The knight dismounts.")
        }
        else {
            const bandit1 = new Bandit("Bandit 1");
            const bandit2 = new Bandit("Bandit 2");
            const bandit3 = new Bandit("Bandit 3");
            const bandit4 = new Bandit("Bandit 4");
            const bandit5 = new Bandit("Bandit 5");
            //turnArray = [hero, bandit1, bandit2, bandit3, bandit4, bandit5];
            enemyArray = [bandit1, bandit2, bandit3, bandit4, bandit5];
            //allyArray = [hero];
            combat()
            if (hero.stats.currentHp > 0) {
                alert("You sucessfully drive off the bandits")
                alert("An armored knight rides up to greet you.")
                alert("The knight dismounts.")
                alert("Knight: that was impressive.")
                hero.gainRel(abe, 5)
            }
            else {
                alert("The bandits are about to finish you off.")
                alert("An armored knight charges the bandit(s), driving them off and saving your life.")
                alert("The knight dismounts and helps your stand.")
                alert("That was brave but foolish.")
                hero.gainRel(abe, 1)
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
        alert("Abraham is a middle-aged human male with salt and pepper hair with a somewhat roughly cut beard and steel-blue eyes.")
        alert("Abraham: You look like you can handle yourself but please allow me to escort you to the village.")
        hero.journal.tollBridgeEncounter = true;
        document.getElementById("villageDaleBtn").style.display = "block";
    }
    else {
        alert("The bridge is currently free of bandits.")
    }
},
//arriving at Dale event
function () {
    alert("Abraham: Well we've arrived. If you're going to be staying here a while you should get a room over at the inn.")
    alert("Abraham:  *He points over to the inn, the sign says 'The Dreaming Worker Inn'*")
    alert("Abraham: Come talk to me if you need anything.")
},
//talking with Sweetheart event
function () {
    //finish this dialog
    //alert("You speak with the barmaid who directs you to Sweeheart and she has you speak with her in the kitchen.")
    //alert("She tells you to help the village so they'll trust you before you can start.")
    alert("There are a few dwarves drinking and playing cards while a blonde woman with some elven heritage brings cleans.")
    alert("Barmaid: Good morning, I'm Faye, what can I get you?")
    alert(hero.basics.name + ": I'm looking for the innkeeper.")
    alert("Faye: *looks towards the kitchen* There's someone here to see you, Ma'am.")
    alert("Ma'am: I'll be out in a moment, dear.")
    alert("A moment later, a giant of a woman walks out wearing a pink dress with an apron. She has a matronly quality about her...she's also an ogre.")
    alert("Ma'am: Well hello there, I'm Sweetheart the Ogre, the owner of this establishment. What can I do for you?")
    alert(hero.basics.name + ": hello Sweetheart...")
    alert("Sweetheart: Please it's Sweetheart the Ogre, otherwise I'm doing to think you're flirting with me *she says with a wink*.")
    alert(hero.basics.name + ": alright Sweetheart the Ogre. *You discretly hand her a letter.")
    alert("Sweetheart: *takes the letter and reads it* Come speak with me in the kitchen for a moment.")
    alert("You follow her into the kitchen*")
    alert("Sweetheart: So you're, " + hero.basics.name + " our " + hero.basics.profession + ".")
    alert("Sweetheart: Before you start you're going to need to improve your relationship with the villagers.")
    alert("Sweetheart: To begin, I believe that Faldan Forgeheart over at the smithy is looking for help reclaiming the mine.")
    alert("Sweetheart: It would also get these drunken layabouts out of my inn *she says looking over at the Dwarves.")
    alert("You leave the inn.")
    hero.journal.metWithContact = true;
    hero.journal.goblinSlayer = true;
    welcomeDale.completeQuest()
    //other quests
}
)
const goblinSlayer = new Quest("Goblin Slayer", 20)