import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { testQuest } from "./Quests"

export function testDialogue(hero) {
    var testDialogue = ""
    if (CheckForQuest(hero.Journal, testQuest()) === null) {
        testDialogue = { Name: "Test Dialogue 1", Char: "Test NPC", Conversation: [{ Dialogue: [": Would you like to accept my quest, " + hero.Name + "?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, testQuest()) } } }, { Dialogue: ["You said Yes", "You said No"], Responses: [], responseEffect(hero, option) { } }] }
    }
    else {
        var questIndex = CheckForQuest(hero.Journal, testQuest())
        if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective) {
            testDialogue = { Name: "Test Dialogue 2", Char: "Test NPC", Conversation: [{ Dialogue: [": You haven't completed my quest"], Responses: [], responseEffect(hero, option) { } }] }
        }
        else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective) {
            if (hero.Journal[questIndex].Status === "In Progress") {
                testDialogue = { Name: "Test Dialogue 3", Char: "Test NPC", Conversation: [{ Dialogue: [": You completed my quest here is your reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]) } } }, { Dialogue: ["Here is your reward"], Responses: [], responseEffect(hero, option) { } }] }
            }
            else {
                testDialogue = { Name: "Test Dialogue 4", Char: "Test NPC", Conversation: [{ Dialogue: [": You have already been rewarded"], Responses: [], responseEffect(hero, option) { } },] }
            }
        }
        else {
            testDialogue = { Name: "Test Dialogue 4", Char: "Test NPC", Conversation: [{ Dialogue: [": Test"], Responses: [], responseEffect(hero, option) { } }] }
        }
    }
    return testDialogue
}