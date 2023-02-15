import { ferraForgeHeart } from "./CharactersDB";
import { blackFeather, ironPickAxe, silverRingLR } from "./ItemsDB";
import { banditQuest1, dwarvenMineGoblinQuest, giantQuest, ratCellarQuest, scareCrowQuest1, scareCrowQuest2, scareCrowQuest3, scareCrowQuest4, skeletonQuest } from "./QuestsDB"
import { CalculateTime } from "../Scripts/MapScripts";
import { FindPartyMember, JoinParty, LeaveParty, PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { AddItemToInventory, FindItemInInventory, RemoveItemFromInventory } from "../Scripts/ItemScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { DecreaseRelationship, IncreaseRelationship, IncreaseReputation } from "../Scripts/RelationshipAndReputationScript";
import { ferraForgeheartRelationship } from "./RelationshipsDB";
import { daleTownReputation, whiteScalesFlockReputation } from "./ReputationsDB";
import { blessBuff } from "./BuffsDB";

//generic dialogue
export function innDialogue(hero) {
    var innDialogue = { Name: "Speak with Innkeeper", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good rest", "Okay"], Responses: [], responseEffect(hero, option) { }, }] }
    return innDialogue;
}
export function leaveDialogue(hero)
{

}
//bandit hideout dialogue
// export function banditHideoutDialogue(hero) {
//     var dialogue = {
//         Name: "Inspect Hideout", Conversation: []
//     }
//     var index1 = CheckForQuest(hero, banditQuest2())
//     //var index2 = CheckForQuest(hero, banditQuest1())
//     if (index1 !== null) {
//         dialogue.Conversation.push({ Dialogue: ["You've found the bandit hideout."], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, banditQuest1()); } } })
//         dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { StartQuest(hero, banditQuest2()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
//     }
//     else {
//         dialogue.Conversation.push({ Dialogue: ["There are bandits here."], Responses: [[]], responseEffect(hero, option) { } })
//         dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
//     }
//     return dialogue
// }
//dale town dialogue
export function daleTownRumors(hero) {
    var dialogue = ""
    var potentialRumors = [witchRumor(hero)]
    if (CheckForQuest(hero, banditQuest1(hero)) === null) {
        potentialRumors.push(banditRumor(hero))
    }
    if (CheckForQuest(hero, dwarvenMineGoblinQuest(hero)) === null) {
        potentialRumors.push(goblinRumor(hero))
    }
    if (CheckForQuest(hero, giantQuest(hero)) === null) {
        potentialRumors.push(giantRumor(hero))
    }
    if (CheckForQuest(hero, ratCellarQuest(hero)) === null) {
        potentialRumors.push(ratRumor(hero))
    }
    if (CheckForQuest(hero, scareCrowQuest1(hero)) === null) {
        potentialRumors.push(scareCrowRumor(hero))
    }
    if (CheckForQuest(hero, skeletonQuest(hero)) === null) {
        potentialRumors.push(skeletonRumor(hero))
    }
    var rumor = potentialRumors[Math.floor(Math.random() * potentialRumors.length)];
    dialogue = rumor;
    return dialogue;
}
export function banditRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: The trading post is looking for someone to deal with a bandit problem"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function giantRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: The lumbermill's foreman was recently kidnapped by a giant"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function goblinRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: The Smithy hasn't gotten any shipments of ore for a few days."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function ratRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: I heard that there's a rat problem at the inn."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function scareCrowRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: Littleroot farm is having problems with a possesed scarecrow."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function skeletonRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: The priest is looking for someone to deal with a skeleton problem."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function witchRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: [{ Dialogue: ["Townsperson: There's a witch that lives north of town if you're looking for potions."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function priestDialogue(hero) {
    var questIndex = CheckForQuest(hero, skeletonQuest())
    var dialogue = {
        Name: "Talk to Priest", Conversation: []
    }
    if (questIndex === null) {
        dialogue.Conversation.push({ Dialogue: ["Accept Quest kill Skeletons?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, skeletonQuest()) } } })
        dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Leave", 0]], responseEffect(hero, option) { } })
        dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue.Conversation.push({ Dialogue: ["The Priest thanks you"], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, skeletonQuest(hero)); IncreaseReputation(hero, daleTownReputation(), 1) } } })
        dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Conversation.push({ Dialogue: ["The Priest blesses you."], Responses: [], responseEffect(hero, option) { blessBuff(3).ApplyBuff(hero) } })
        dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    return dialogue
}
//dreaming worker inn
export function dreamingWorkerInnDialogue(hero) {
    var innDialogue = ""
    var questIndex = CheckForQuest(hero, ratCellarQuest(hero))
    if (questIndex === null) {
        innDialogue = sweetheart1(hero, questIndex)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress < hero.Journal[questIndex].Objective) {
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
        Name: "Speak with Sweetheart", Conversation: [{
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
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
export function sweetheart3(hero, questIndex) {
    var sweetheart = {
        Name: "Speak with Sweetheart the Ogre", Conversation: [{
            Dialogue: ["Thanks for taking care of that Giant Rat, Sweetheart. As thanks you can rent a room anytime you want, free of charge."],
            Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } }
        },
        { Dialogue: ["Bye for now."], Responses: [], responseEffect(hero, option) { } }]
    }
    return sweetheart
}
export function sweetheart4(hero) {
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Conversation: [{ Dialogue: ["Would you like to take a rest?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { PartyRecovery(hero); CalculateTime(hero, 8) } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
export function sweetheart5(hero) {
    var sweetheart = { Name: "Speak with Sweetheart the Ogre", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good night, sweetheart", "See you later, sweetheart."], Responses: [], responseEffect(hero, option) { }, }] }
    return sweetheart
}
//forgeheart smithy dialogues
export function forgeheartSmithDialogue(hero) {
    var dialogue = ""
    var questIndex = CheckForQuest(hero, dwarvenMineGoblinQuest())
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
        dialogue = forgeHeart2(hero)
    }
    else {
        dialogue = forgeHeart2(hero)
    }
    return dialogue;
}
export function forgeHeart1(hero) {
    var dialogue = {
        Name: "Speak with Old Dwarf and Young Woman", Conversation: []
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
    //  dialogue.Conversation.push({ Dialogue: ["Leave Conversation"], Responses: [], responseEffect(hero, option) { } })
    //}
    return dialogue
}
export function forgeHeart2(hero) {
    var dialogue = { Name: "Speak with Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping."], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart3(hero, questIndex) {
    var dialogue = {
        Name: "Speak with Faldan and Ferra", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Keep Ferra?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 1) { LeaveParty(hero, FindPartyMember(ferraForgeHeart(), hero.Party), hero.Party); DecreaseRelationship(hero, ferraForgeheartRelationship(), 1) } else { IncreaseRelationship(hero, ferraForgeheartRelationship(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Keeping Ferra", "Not Keeping Ferra"], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//giant cave dialogues
export function giantCaveDialogue(hero) {
    var dialogue = {
        Name: "Talk to Foreman George", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Foreman George rewards you for the rescue"], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, giantQuest(hero)); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//goblinMine Dialogues
export function enterGoblinMineDialogue(hero) {
    var dialogue = { Name: "Entering Mine", Conversation: [{ Dialogue: ["You see goblins overruning the mine"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function enslavedKoboldsDialogue(hero) {
    var dialogue = { Name: "Speak with Kobolds", Conversation: [{ Dialogue: ["Multiple enslaved kobolds"], Responses: [["Free", 0], ["Kill", 1], ["Ignore", 2]], responseEffect(hero, option) { if (option === 0) { IncreaseRelationship(hero, ferraForgeheartRelationship(), 2); IncreaseReputation(hero, whiteScalesFlockReputation(), 5) } else if (option === 1) { DecreaseRelationship(hero, ferraForgeheartRelationship(), 2) } else { DecreaseRelationship(hero, ferraForgeheartRelationship(), 1) } } }, { Dialogue: ["Freed Kobolds", "Killed Kobolds", "Ignore Kobolds"], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function saveMinersDialogue(hero) {
    var dialogue = { Name: "Speak with Mine Foreman", Conversation: [{ Dialogue: ["Freed Miners and given Iron Pickaxe"], Responses: [], responseEffect(hero, option) { AddItemToInventory(hero, hero.Inventory, ironPickAxe(), hero); IncreaseReputation(hero, daleTownReputation(), 1) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//littleroot farm dialogue
export function littleRootFarmDialogue(hero) {
    var dialogue = ""
    var questIndex = CheckForQuest(hero, scareCrowQuest1())
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
            dialogue = littleRoot2(hero)
        }
    }
    else {
        dialogue = littleRoot2(hero)
    }
    return dialogue;
}
export function littleRoot1(hero, questIndex) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Accept Quest kill Posessed Scarecrow"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, scareCrowQuest1()) } } })
    dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Leave", 0]], responseEffect(hero, option) { } })
    dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
export function littleRoot2(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Conversation: [{ Dialogue: ["Busy Farming"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }]
    }
    return dialogue
}
export function littleRoot3(hero, questIndex) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["Find crows"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest2()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
export function littleRoot6(hero) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Conversation: []
    }
    var questIndex = CheckForQuest(hero, scareCrowQuest4())
    dialogue.Conversation.push({ Dialogue: ["Give ring to Farmer Littleroot"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { var index = FindItemInInventory(hero.Inventory, silverRingLR()); RemoveItemFromInventory(hero, hero.Inventory, hero.Inventory[index], 1, hero); IncreaseReputation(hero, daleTownReputation(), 1) } } })
    dialogue.Conversation.push({ Dialogue: ["You Decide to", "You Decide Not To"], Responses: [["Continue", 0]], responseEffect(hero, option) { if (option === 0) { CompleteQuest(hero, hero.Journal[questIndex]) } } })
    dialogue.Conversation.push({ Dialogue: ["Leave Conversation"], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//lumbermill dialogue
export function lumbermillDialogue(hero) {
    var dialogue = {
        Name: "Speak to Woodcutters", Conversation: []
    }
    var questIndex = CheckForQuest(hero, giantQuest())
    if (questIndex === null) {
        dialogue.Conversation.push({ Dialogue: ["Accept Quest Rescue Foreman George from Giant"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, giantQuest()) } } })
        dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Continue", 0]], responseEffect(hero, option) { } })
        dialogue.Conversation.push({ Dialogue: ["Leave Conversation"], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished") {
        dialogue.Conversation.push({ Dialogue: ["The Foreman gives you a hearty wave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Conversation.push({ Dialogue: ["The Woodcutters are busy at work"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
}

//spider cave dialogue
export function spiderCaveDialogue(hero) {
    var questIndex = CheckForQuest(hero, scareCrowQuest3())
    var dialogue = {
        Name: "Talk to Tengu", Conversation: []
    }
    dialogue.Conversation.push({ Dialogue: ["."], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); } } })
    dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest3()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    return dialogue
}
//tengu camp dialogue
export function tenguCampDialogue(hero) {
    var dialogue = {
        Name: "Investigate Cmmp", Conversation: []
    }
    var questIndex = CheckForQuest(hero, scareCrowQuest2())
    var questIndex2 = CheckForQuest(hero, scareCrowQuest3())
    if (questIndex !== null && questIndex2 === null) {
        dialogue.Conversation.push({ Dialogue: ["Found black feathers leading towards a spider cave."], Responses: [["Finish Quest", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]); AddItemToInventory(hero, hero.Inventory, blackFeather(), 1, hero) } } })
        dialogue.Conversation.push({ Dialogue: ["Go to Spider Cave"], Responses: [], responseEffect(hero, option) { StartQuest(hero, scareCrowQuest3()) } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "In Progress") {
        dialogue.Conversation.push({ Dialogue: ["There's nothing else but scattered junk and food scraps"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "Finished") {
        dialogue.Conversation.push({ Dialogue: ["The Tengu greet you and give you a random piece of 'Treasure'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Conversation.push({ Dialogue: ["There's nothing here but scattered junk and food scraps"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    return dialogue
}
//trading post dialogue
export function joeTheTradersTradingPostDialogue(hero) {
    var dialogue = {
        Name: "Speak with Joe the Trader", Conversation: []
    }
    //if (CheckForQuest(hero, banditQuest1()) === null && CheckForQuest(hero, banditQuest2()) === null) {
    if (CheckForQuest(hero, banditQuest1()) === null) {
        dialogue.Conversation.push({ Dialogue: ["Accept Quest kill Clear out Bandits"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, banditQuest1()) } } })
        dialogue.Conversation.push({ Dialogue: ["Accepted Quest", "Did Not Accept Quest"], Responses: [["Leave", 0]], responseEffect(hero, option) { } })
        dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    // else if (CheckForQuest(hero, banditQuest1()) !== null & CheckForQuest(hero, banditQuest2()) === null) {
    //     dialogue.Conversation.push({ Dialogue: ["Go East"], Responses: [["Leave", 0]], responseEffect(hero, option) { } })
    //     dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    // }
    //else if (hero.Journal[CheckForQuest(hero, banditQuest2())].ObjectiveProgress >= hero.Journal[CheckForQuest(hero, banditQuest2())].Objective && hero.Journal[CheckForQuest(hero, banditQuest2())].Status === "In Progress") {
    else if (hero.Journal[CheckForQuest(hero, banditQuest1())].ObjectiveProgress >= hero.Journal[CheckForQuest(hero, banditQuest1())].Objective && hero.Journal[CheckForQuest(hero, banditQuest1())].Status === "In Progress") {
        //dialogue.Conversation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, banditQuest2()); IncreaseReputation(hero, daleTownReputation(), 1) } } })
        dialogue.Conversation.push({ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, banditQuest1()); IncreaseReputation(hero, daleTownReputation(), 1) } } })
        dialogue.Conversation.push({ Dialogue: ["Leave"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    else {
        dialogue.Conversation.push({ Dialogue: ["Joe offers to sell you something"], Responses: [["Leave", 0]], responseEffect(hero, option) { } })
        dialogue.Conversation.push({ Dialogue: [], Responses: [], responseEffect(hero, option) { } })
    }
    return dialogue
}