//maybe move quest dialog etc into the quests.
class Quest {
    constructor(name, reward, event1, event2, event3, event4, event5, event6) {
        this.name = name;
        this.reward = reward;
        this.event1 = event1;
        this.event2 = event2;
        this.event3 = event3;
        this.event4 = event4;
        this.event5 = event5;
        this.event6 = event6;
        //events and combats
    }
}
Quest.prototype.addJournal = function()
{
    
}
Quest.prototype.getQuest = function()
{

}
Quest.prototype.questReward = function ()
{

}
Quest.prototype.completeQuest = function()
{
    
}
//subclasses for kinds of quests
const welcomeDale = new Quest("Welcome to Dale", "Gold",
"I am " + hero.basics.name + ", a " + hero.basics.profession + ".",
"I took a job to meet the innkeeper in The Village of Dale",
"I encountered some bandits on the way and met Abraham Arkwright.",
"I met with the innkeeper, Sweetheart the Ogre and was told I should help the villagers before I was given more details.")
const goblinSlayer = new Quest("Goblin Slayer", "Gold",
"Took a quest to exterminate the goblins in the dwarven mine and free the miners",
"It was suggested that I recruit Ferra Forgetheat for this mission",
 "I was asked to free some kobolds that had been enslaved by the goblins",
"I freed the kobolds and was told to visit their master Sheepscale", "I instead killed the kobolds",
"I freed the miners",
"I defeated the Goblin Boss.")