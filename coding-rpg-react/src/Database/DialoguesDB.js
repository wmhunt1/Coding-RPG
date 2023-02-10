import { PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { testQuest } from "./QuestsDB"

//shop dialogues
//inn dialogues
export function dreamingWorkerInnDialogue(hero) {
    var innDialogue = { Name: "Dialogue with Sweetheart", Char: "Sweetheart the Ogre", Conversation: [{ Dialogue: [": Would you like to rent a room my quest?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Have a good rest"], Responses: [], responseEffect(hero, option) { } }] }
    return innDialogue;
}
export function innDialogue(hero) {
    var innDialogue = { Name: "Dialogue with Innkeeper", Char: "Innkeeper", Conversation: [{ Dialogue: [": Would you like to rent a room my quest?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero) } } } }, { Dialogue: ["Have a good rest"], Responses: [], responseEffect(hero, option) { } }] }
    return innDialogue;
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
export function testDungeonDialogue(hero, encounters, defeated, boss) {
    var testDungeonDialogue = ""
    if (encounters.length > defeated) {
        testDungeonDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": You have not defeated all of the encounters"], Responses: [], responseEffect(hero, option) { } },] }
    }
    else if (encounters.length === defeated && boss === 0) {
        testDungeonDialogue = { Name: "Test Dialogue", Char: "Test NPC", Conversation: [{ Dialogue: [": Only the boss remains"], Responses: [], responseEffect(hero, option) { } },] }
    }
    else if (encounters.length === defeated && boss === 1) {
        testDungeonDialogue = { Name: "Test Dialogue 4", Char: "Test NPC", Conversation: [{ Dialogue: [": you have defeated the boss"], Responses: [], responseEffect(hero, option) { } },] }
    }
    else {
        testDungeonDialogue = { Name: "Test Dialogue 4", Char: "Test NPC", Conversation: [{ Dialogue: [": placeholder"], Responses: [], responseEffect(hero, option) { } },] }
    }
    return testDungeonDialogue;
}