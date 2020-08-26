class Quest {
    constructor(name, reward, encounter1, encounter2, encounter3, encounter4, encounter5, encounter6, encounter7, encounter8, encounter9) {
        this.name = name;
        this.reward = reward;
        this.encounter1 = encounter1;
        this.encounter2 = encounter2;
        this.encounter3 = encounter3;
        this.encounter4 = encounter4;
        this.encounter5 = encounter5;
        this.encounter6 = encounter6;
        this.encounter7 = encounter7;
        this.encounter8 = encounter8;
        this.encounter9 = encounter9;
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
const goblinSlayer = new Quest("Goblin Slayer", "Gold")