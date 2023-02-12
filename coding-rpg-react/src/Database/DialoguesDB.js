import { PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { ratCellarQuest, testQuest } from "./QuestsDB"

//shop dialogues
//inn dialogues
export function dreamingWorkerInnDialogue(hero) {
    var innDialogue = ""
    var questIndex = CheckForQuest(hero.Journal, ratCellarQuest())
    console.log(hero.Journal)
    if (questIndex === null) {
        innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheart the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Now that you've rested would you mind taking care of the large rat in the cellar?", "Well in the meantime would you mind taking care of the large rat in the cellar?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, ratCellarQuest()) } } }, { Dialogue: ["Thanks, sweetheart", "Well let me Know if you change your mind"], Responses: [], responseEffect(hero, option) { } }] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheart the Ogre", Conversation: [{ Dialogue: ["Thanks for taking care of that Giant Rat, Sweetheart. As thanks you can rent a room anytime you want, free of charge."], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]) } } }, { Dialogue: ["Bye for now."], Responses: [], responseEffect(hero, option) { } }] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to take a rest?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { PartyRecovery(hero) } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    }
    else {
        innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    }
    return innDialogue;
}
export function innDialogue(hero) {
    var innDialogue = { Name: "Dialogue with Innkeeper", Char: "Innkeeper", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Have a good rest", "Okay"], Responses: [], responseEffect(hero, option) { }, }] }
    return innDialogue;
}
//smith dialogue
export function forgeheartSmithDialogue()
{

}
//tests
export function testDialogue(hero) {
    var testDialogue = ""
    if (CheckForQuest(hero.Journal, testQuest()) === null) {
        testDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": Would you like to accept my quest, " + hero.Name + "?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, testQuest()) } } }, { Dialogue: ["You said Yes", "You said No"], Responses: [], responseEffect(hero, option) { } }] }
    }
    else {
        var questIndex = CheckForQuest(hero.Journal, testQuest())
        if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective) {
            testDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": You haven't completed my quest"], Responses: [], responseEffect(hero, option) { } }] }
        }
        else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
            testDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": You completed my quest here is your reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]) } } }, { Dialogue: ["Here is your reward"], Responses: [], responseEffect(hero, option) { } }] }
        }
        else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
            testDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": You have already been rewarded"], Responses: [], responseEffect(hero, option) { } },] }
        }
        else {
            testDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": Test"], Responses: [], responseEffect(hero, option) { } }] }
        }
    }
    return testDialogue
}
export function testDungeonDialogue(hero) {
    var testDungeonDialogue = testDungeonDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": You have not defeated all of the encounters"], Responses: [], responseEffect(hero, option) { } },] }
    return testDungeonDialogue;
}