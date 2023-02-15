import { ferraForgeHeart } from "./CharactersDB";
import { blackFeather, ironPickAxe, silverRingLR } from "./ItemsDB";
import { dwarvenMineGoblinQuest, giantQuest, ratCellarQuest, scareCrowQuest1, scareCrowQuest2, scareCrowQuest3, scareCrowQuest4 } from "./QuestsDB"
import { CalculateTime } from "../Scripts/MapScripts";
import { FindPartyMember, JoinParty, LeaveParty, PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { AddItemToInventory, FindItemInInventory, RemoveItemFromInventory } from "../Scripts/ItemScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { DecreaseRelationship, IncreaseRelationship, IncreaseReputation } from "../Scripts/RelationshipAndReputationScript";
import { ferraForgeheartRelationship } from "./RelationshipsDB";
import { daleTownReputation } from "./ReputationsDB";

//generic dialogue
export function innDialogue(hero) {
    var innDialogue = { Name: "Speak with Innkeeper", Char: "Innkeeper", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good rest", "Okay"], Responses: [], responseEffect(hero, option) { }, }] }
    return innDialogue;
}
//dale town dialogue
export function daleTownRumors(hero) {
    var dialogue = ""
    var potentialRumors = [witchRumor(hero)]
    if (CheckForQuest(hero.Journal, dwarvenMineGoblinQuest(hero)) === null) {
        potentialRumors.push(goblinRumor(hero))
    }
    if (CheckForQuest(hero.Journal, giantQuest(hero)) === null) {
        potentialRumors.push(giantRumor(hero))
    }
    if (CheckForQuest(hero.Journal, ratCellarQuest(hero)) === null) {
        potentialRumors.push(ratRumor(hero))
    }
    if (CheckForQuest(hero.Journal, scareCrowQuest1(hero)) === null) {
        potentialRumors.push(scareCrowRumor(hero))
    }
    var rumor = potentialRumors[Math.floor(Math.random() * potentialRumors.length)];
    dialogue = rumor;
    return dialogue;
}
export function giantRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: The lumbermill's foreman was recently kidnapped by a giant"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function goblinRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: The Smithy hasn't gotten any shipments of ore for a few days."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function ratRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: I heard that there's a rat problem at the inn."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function scareCrowRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: Littleroot farm is having problems with a possesed scarecrow."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function witchRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: There's a witch that lives north of town if you're looking for potions."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//dreaming worker inn
export function dreamingWorkerInnDialogue(hero) {
    var innDialogue = ""
    var questIndex = CheckForQuest(hero.Journal, ratCellarQuest(hero))
    if (questIndex === null) {
        innDialogue = sweetheart1(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        innDialogue = sweetheart2(hero)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        innDialogue = sweetheart3(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        innDialogue = sweetheart4(hero)
    }
    else {
        innDialogue = sweetheart5(hero)
    }
    return innDialogue;
}
//dreamingworker inn sub dialogues
export function sweetheart1(hero) {
    //part here where she asks you to call her Sweetheart the Ogre
    var sweetheart = {
        Name: "Speak with Sweetheart", Char: "Sweetheart", Conversation: [{
            Dialogue: ["You enter the Dreaming Worker Inn and immediately notice a large ogress wearing all pink with a frilly apron and a bow atop her blonde curls. The Ogre turns to address you, Sweetheart: Well hello there. You must be a newcomer. I'm Sweetheart the Ogre."],
            Responses: [["Hello, Sweetheart", 0], ["Hello, Sweetheart the Ogre", 1]], responseEffect(hero, option) { }
        },
        {
            Dialogue: ["It's Sweetheart the Ogre you need to say the whole thing or I'll think you're flirting with me, sweetheart", "Well nice you meet you to, sweetheart"],
            Responses: [["...", 0]], responseEffect(hero, option) { }
        }, {
            Dialogue: ["Well anyway...Would you like to rent a room, sweetheart?"],
            Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } }
        },
        {
            Dialogue: ["Now that you've rested would you mind taking care of the large rat in the cellar?", "Well in the meantime would you mind taking care of the large rat in the cellar?"],
            Responses: [["Yes", 0], ["No", 1]],
            responseEffect(hero, option) { if (option === 0) { StartQuest(hero, ratCellarQuest()) } }
        },
        {
            Dialogue: ["Thanks, sweetheart.", "Well let me Know if you change your mind."],
            Responses: [], responseEffect(hero, option) { }
        }]
    }
    return sweetheart
}
export function sweetheart2(hero) {
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
export function sweetheart3(hero, questIndex) {
    var sweetheart = {
        Name: "Speak with Sweetheart the Ogre", Char: "Sweetheart the Ogre", Conversation: [{
            Dialogue: ["Thanks for taking care of that Giant Rat, Sweetheart. As thanks you can rent a room anytime you want, free of charge."],
            Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } }
        },
        { Dialogue: ["Bye for now."], Responses: [], responseEffect(hero, option) { } }]
    }
    return sweetheart
}
export function sweetheart4(hero) {
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to take a rest?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { PartyRecovery(hero); CalculateTime(hero, 8) } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
export function sweetheart5(hero) {
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Char: "Sweetheat the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
//forgeheart smithy dialogues
export function forgeheartSmithDialogue(hero) {
    var dialogue = ""
    var questIndex = CheckForQuest(hero.Journal, dwarvenMineGoblinQuest())
    if (questIndex === null) {
        dialogue = forgeHeart1(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = forgeHeart2(hero)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = forgeHeart3(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dialogue = forgeHeart4(hero)
    }
    else {
        dialogue = forgeHeart5(hero)
    }
    return dialogue;
}
export function forgeHeart1(hero) {
    var dialogue = {
        Name: "Speak with Old Dwarf and Young Woman", Char: "Old Dwarf and Young Woman",
        Conversation: []
    }
    //var acceptedQuest = false;
    dialogue.Conversation.push({ Dialogue: ["Accept Quest to clear out Dwarven Mine of Goblins?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, dwarvenMineGoblinQuest()); } } })
    dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Continue", 0]], responseEffect(hero, option) { } })
    //prevent this if quest not accepted
    //if (acceptedQuest === true) {
    dialogue.Conversation.push({ Dialogue: ["Bring Ferra Forgeheart (Cleric) with you?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { JoinParty(hero, ferraForgeHeart(), hero.Companions); IncreaseRelationship(hero, ferraForgeheartRelationship(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Bringing Ferra", "Not Bringing Ferra"], Responses: [], responseEffect(hero, option) { } })
    //}
    //else {
    //  dialogue.Conversation.push({ Dialogue: ["Leave Consersation"], Responses: [], responseEffect(hero, option) { } })
    //}
    return dialogue
}
export function forgeHeart2(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart3(hero, questIndex) {
    var dialogue = {
        Name: "Speak with Faldan and Ferra", Char: "Faldan and Ferra", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Keep Ferra?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 1) { LeaveParty(hero, FindPartyMember(ferraForgeHeart(), hero.Party), hero.Party); DecreaseRelationship(hero, ferraForgeheartRelationship(), 1) } else { IncreaseRelationship(hero, ferraForgeheartRelationship(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Keeping Ferra", "Not Keeping Ferra"], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
export function forgeHeart4(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart5(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//giant cave dialogues
export function giantCaveDialogue(hero) {
    var dialogue = {
        Name: "Talk to Foreman George", Char: "Foreman George", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Foreman George rewards you for the rescue"], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, giantQuest(hero)); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//goblinMine Dialogues
export function enterGoblinMineDialogue(hero) {
    var dialogue = { Name: "Entering Mine", Char: "", Conversation: [{ Dialogue: ["You see goblins overruning the mine"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function enslavedKoboldsDialogue(hero) {
    var dialogue = { Name: "Speak with Kobolds", Char: "Kobolds", Conversation: [{ Dialogue: ["Multiple enslaved kobolds"], Responses: [["Free", 0], ["Kill", 1], ["Ignore", 2]], responseEffect(hero, option) { if (option === 0) { IncreaseRelationship(hero, ferraForgeheartRelationship(), 2) } else if (option === 1) { DecreaseRelationship(hero, ferraForgeheartRelationship(), 2) } else { DecreaseRelationship(hero, ferraForgeheartRelationship(), 1) } } }, { Dialogue: ["Freed Kobolds", "Killed Kobolds", "Ignore Kobolds"], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function saveMinersDialogue(hero) {
    var dialogue = { Name: "Speak with Mine Foreman", Char: "Mine Foreman", Conversation: [{ Dialogue: ["Freed Miners and given Iron Pickaxe"], Responses: [], responseEffect(hero, option) { AddItemToInventory(hero, hero.Inventory, ironPickAxe(), hero); IncreaseReputation(hero, daleTownReputation(), 1) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//littleroot farm dialogue
export function littleRootFarmDialogue(hero) {
    var dialogue = ""
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest1())
    if (questIndex === null) {
        dialogue = littleRoot1(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = littleRoot2(hero)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = littleRoot3(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        var index = FindItemInInventory(hero.Inventory, silverRingLR())
        if (index !== null) {
            dialogue = littleRoot6(hero)
        }
        else {
            dialogue = littleRoot4(hero)
        }
    }
    else {
        dialogue = littleRoot5(hero)
    }
    return dialogue;
}
export function littleRoot1(hero, questIndex) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot",
        Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Accept Quest kill Posessed Scarecrow"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, scareCrowQuest1()) } } })
    dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Continue", 0]], responseEffect(hero, option) { } })
    dialogue.Conversation.push({ Dialogue: ["Leave Consersation"], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
export function littleRoot2(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot",
        Conversation: [{ Dialogue: ["Busy Farming"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }]
    }
    return dialogue
}
export function littleRoot3(hero, questIndex) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot", Conversation: []
    }
    dialogue.Consersation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Consersation.push({ Dialogue: ["Find crows"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest2()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
export function littleRoot4(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot",
        Conversation: [{ Dialogue: ["Busy Farming"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }]
    }
    return dialogue
}
export function littleRoot5(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot",
        Conversation: [{ Dialogue: ["Busy Farming"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }]
    }
    return dialogue
}
export function littleRoot6(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Char: "Farmer Littleroot",
        Conversation: []
    }
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest4())
    dialogue.Conversation.push({ Dialogue: ["Give ring to Farmer Littleroot"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { var index = FindItemInInventory(hero.Inventory, silverRingLR()); RemoveItemFromInventory(hero, hero.Inventory, hero.Inventory[index], 1, hero); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["You Decide to", "You Decide Not To"], Responses: [["Continue", 0]], responseEffect(hero, option) { if (option === 0) { CompleteQuest(hero, hero.Journal[questIndex]) } } })
    dialogue.Conversation.push({ Dialogue: ["Leave Consersation"], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//lumbermill dialogue
export function lumbermillDialogue(hero) {
    var dialogue = {
        Name: "Speak to Woodcutters", Char: "Woodcutter",
        Conversation: []
    }
    var questIndex = CheckForQuest(hero.Journal, giantQuest())
    if (questIndex === null) {
        dialogue.Conversation.push({ Dialogue: ["Accept Quest Rescue Foreman George from Giant"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, giantQuest()) } } })
        dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Continue", 0]], responseEffect(hero, option) { } })
        dialogue.Conversation.push({ Dialogue: ["Leave Consersation"], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished") {
        dialogue.Consersation.push({ Dialogue: ["The Foreman gives you a hearty wave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Consersation.push({ Dialogue: ["The Woodcutters are busy at work"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
}

//spider cave dialogue
export function spiderCaveDialogue(hero) {
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest3())
    var dialogue = {
        Name: "Talk to Tengu", Char: "Tengu", Conversation: []
    }
    dialogue.Consersation.push({ Dialogue: ["."], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); } } })
    dialogue.Consersation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest3()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//tengu camp dialogue
export function tenguCampDialogue(hero) {
    var dialogue = {
        Name: "Investigate Cmmp", Char: "Camp", Conversation: []
    }
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest2())
    var questIndex2 = CheckForQuest(hero.Journal, scareCrowQuest3())
    if (questIndex !== null && questIndex2 === null) {
        dialogue.Consersation.push({ Dialogue: ["Found black feathers leading towards a spider cave."], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); AddItemToInventory(hero, hero.Inventory, blackFeather(), 1, hero) } } })
        dialogue.Consersation.push({ Dialogue: ["Go to Spider Cave"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest3()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "In Progress") {
        dialogue.Consersation.push({ Dialogue: ["There's nothing else but scattered junk and food scraps"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "Finished") {
        dialogue.Consersation.push({ Dialogue: ["The Tengu greet you and give you a random piece of 'Treasure'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Consersation.push({ Dialogue: ["There's nothing here but scattered junk and food scraps"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    return dialogue
}