import { FerraForgeHeart } from "./CharactersDB";
import { silverRingLR } from "./ItemsDB";
import { banditQuest1, dwarvenMineGoblinQuest, giantQuest, gnollQuest1, metSweetheart, ratCellarQuest, scareCrowQuest1, scareCrowQuest2, scareCrowQuest3, scareCrowQuest4, skeletonQuest, wizardTowerQuest1 } from "./QuestsDB"
import { CalculateTime } from "../Scripts/MapScripts";
import { FindPartyMember, JoinParty, LeaveParty, PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { FindItemInInventory, RemoveItemFromInventory } from "../Scripts/ItemScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { DecreaseRelationship, IncreaseRelationship, IncreaseReputation } from "../Scripts/RelationshipAndReputationScript";
import { FerraForgeheartRelationship } from "./RelationshipsDB";
import { DaleTownReputation, WhiteScalesFlockReputation } from "./ReputationsDB";
import { BlessBuff } from "./BuffsDB";

export function testDialogueOverhaul(hero) {
    var dialogue;
    dialogue = { Name: "Test", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Yes or No?", Next: 1 }, { Id: 2, Line: "You said Yes", Next: 3 }, { Id: 3, Line: "You said no", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { console.log(hero.Name, option) } }
    return dialogue;
}
//generic dialogue
export function innDialogue(hero) {
    var innDialogue = { Name: "Speak with Innkeeper", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Would you like to rent a room?", Next: 1 }, { Id: 2, Line: "You said Yes", Next: 2 }, { Id: 3, Line: "You said no", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }
    return innDialogue;
}
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
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: The trading post is looking for someone to deal with a bandit problem", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function giantRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: The lumbermill's foreman was recently kidnapped by a giant", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function goblinRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: The Smithy hasn't gotten any shipments of ore for a few days.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function ratRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: The lumbermill's foreman was recently kidnapped by a giant", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function scareCrowRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: Littleroot farm is having problems with a possesed scarecrow.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function skeletonRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: The priest is looking for someone to deal with a skeleton problem.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function witchRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Townsperson: There's a witch that lives north of town if you're looking for potions.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function priestDialogue(hero) {
    var questIndex = CheckForQuest(hero, skeletonQuest())
    var dialogue = ""
    if (questIndex === null) {
        dialogue = {
            Name: "Talk to Priest", Conversation: {
                npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Kill Skeletons?", Next: 1 }, { Id: 2, Line: "Accepted Quest", Next: 2 }, { Id: 3, Line: "Didn't Accept Quest", Next: 2 }],
                heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }]
            }, responseEffect(hero, option) { if (option === 2) { StartQuest(hero, skeletonQuest()) } }
        }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = { Name: "Talk to Priest", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The Priest Thanks you.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, skeletonQuest(hero)); IncreaseReputation(hero, new DaleTownReputation(), 1) } }
    }
    else {
        dialogue = { Name: "Talk to Priest", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The Priest blesses you.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { new BlessBuff(3).ApplyBuff(hero) } }
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
        innDialogue = sweetheart2(hero)
    }
    return innDialogue;
}
//dreamingworker inn sub dialogues
export function sweetheart1(hero) {
    var npc1 = "You enter the Dreaming Worker Inn and immediately notice a large ogress wearing all pink with a frilly apron and a bow atop her blonde curls. The Ogre turns to address you, Sweetheart: Well hello there. You must be a newcomer. I'm Sweetheart the Ogre."
    var npc2 = "It's Sweetheart the Ogre you need to say the whole thing or I'll think you're flirting with me, sweetheart"
    var npc3 = "Well nice you meet you to, sweetheart"
    var npc4 = "Well anyway...Would you like to rent a room, sweetheart?"
    var npc5 = "Good Morning, sweetheart. Now that you've rested would you mind taking care of the large rat in the cellar? Little old me can't handle such a frightful creature.";
    var npc6 = "Well in the meantime would you mind taking care of the large rat in the cellar? Little old me can't handle such a frightful creature."
    var npc7 = "Thanks, sweetheart."
    var npc8 = "Well let me Know if you change your mind."
    var response1A = "Hello, Sweetheart the Ogre";
    var response1B = "Hello, Sweetheart";
    var response2 = "...";
    var response3A = "Yes";
    var response3B = "No";
    var response4A = "Yes";
    var response4B = "No";
    var sweetheart;
    if (CheckForQuest(hero, metSweetheart(hero)) === null) {
        sweetheart = {
            Name: "Speak with Sweetheart",
            Conversation: {
                npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: npc1, Next: 1 }, { Id: 2, Line: npc2, Next: 2 },
                { Id: 3, Line: npc3, Next: 2 }, { Id: 4, Line: npc4, Next: 3 }, { Id: 5, Line: npc5, Next: 4 },
                { Id: 6, Line: npc6, Next: 4 }, { Id: 7, Line: npc7, Next: 5 }, { Id: 8, Line: npc8, Next: 5 }],
                heroSide: [{ Id: 1, Options: [[response1A, 2], [response1B, 3]] }, { Id: 2, Options: [[response2, 4]] },
                { Id: 3, Options: [[response3A, 5], [response3B, 6]] }, { Id: 4, Options: [[response4A, 7], [response4B, 8]] }, { Id: 5, Options: [["Leave", 0]] }]
            },
            responseEffect(hero, option) {
                if (option === 5) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } if (option === 7) { StartQuest(hero, ratCellarQuest()) }
            }
        }
    }
    else {
        sweetheart = {
            Name: "Speak with Sweetheart",
            Conversation: {
                npcSide: [{ Id: 0, Line: "Exit" }, { Id: 4, Line: npc4, Next: 3 }, { Id: 5, Line: npc5, Next: 4 },
                { Id: 6, Line: npc6, Next: 4 }, { Id: 7, Line: npc7, Next: 5 }, { Id: 8, Line: npc8, Next: 5 }],
                heroSide: [{ Id: 3, Options: [[response3A, 5], [response3B, 6]] }, { Id: 4, Options: [[response4A, 7], [response4B, 8]] }, { Id: 5, Options: [["Leave", 0]] }]
            },
            responseEffect(hero, option) {
                if (option === 5) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } if (option === 7) { StartQuest(hero, ratCellarQuest()) }
            }
        }
    }
    return sweetheart
}
export function sweetheart2(hero) {
    var innDialogue = { Name: "Speak with Sweetheart the Ogre", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Would you like to rent a room, sweetheart?", Next: 1 }, { Id: 2, Line: "Have a good night, sweetheart", Next: 2 }, { Id: 3, Line: "I'll be waiting, sweetheart.", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }
    return innDialogue;
}
export function sweetheart3(hero, questIndex) {
    var dialogue = { Name: "Speak with Sweetheart the Ogre", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Thanks for taking care of that Giant Rat, Sweetheart. As thanks you can rent a room anytime you want, free of charge.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, ratCellarQuest(hero)); IncreaseReputation(hero, new DaleTownReputation(), 1) } }
    return dialogue;
}
export function sweetheart4(hero) {
    var innDialogue = { Name: "Speak with Sweetheart the Ogre", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Would you like to take a rest, sweetheart?", Next: 1 }, { Id: 2, Line: "Have a good night, sweetheart", Next: 2 }, { Id: 3, Line: "I'll be waiting, sweetheart.", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } }
    return innDialogue;
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
    var npc1 = "Accept Quest to clear out Dwarven Mine of Goblins?"
    //var npc2 = "Accepted Quest"
    var npc3 = "Did Not Accept Quest"
    var npc4 = "Bring Ferra Forgeheart (Cleric) with you?"
    var npc5 = "Bringing Ferra.";
    var npc6 = "Not Bringing Ferra."
    var response1A = "Yes";
    var response1B = "No";
    var response2A = "Yes";
    var response2B = "No";
    var dialogue = {
        Name: "Speak with Forgehearts",
        Conversation: {
            npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: npc1, Next: 1 }, { Id: 2, Line: npc4, Next: 2 },
            { Id: 3, Line: npc3, Next: 3 }, { Id: 4, Line: npc4, Next: 3 }, { Id: 5, Line: npc5, Next: 3 },
            { Id: 6, Line: npc6, Next: 3 }],
            heroSide: [{ Id: 1, Options: [[response1A, 2], [response1B, 3]] }, { Id: 2, Options: [[response2A, 5], [response2B, 6]] },
            { Id: 3, Options: [["Leave", 0]] }]
        },
        responseEffect(hero, option) {
            if (option === 2) { StartQuest(hero, dwarvenMineGoblinQuest()); } if (option === 5) { JoinParty(hero, new FerraForgeHeart(), hero); IncreaseRelationship(hero, new FerraForgeheartRelationship(), 1) }
        }
    }
    return dialogue
}
export function forgeHeart2(hero) {
    var dialogue;
    if (FindPartyMember(new FerraForgeHeart(), hero.Companions) !== null) {
        dialogue = { Name: "Speak with Faldan", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The old dwarf is sleeping.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    else {
        dialogue = { Name: "Speak with Ferra", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Let Ferra Join?", Next: 1 }, { Id: 2, Line: "Ferra comes along", Next: 2 }, { Id: 3, Line: "You leave Ferra", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { JoinParty(hero, new FerraForgeHeart(), hero) } } }
    }
    return dialogue
}
export function forgeHeart3(hero, questIndex) {
    var npc1 = "Accept Reward?"
    var npc2 = "Keep Ferra with you?"
    var npc3 = "Keep Ferra "
    var npc4 = "Keeping Ferra.";
    var response2A = "Yes";
    var response2B = "No";
    var dialogue = {
        Name: "Speak with Forgehearts",
        Conversation: {
            npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: npc1, Next: 1 }, { Id: 2, Line: npc2, Next: 2 },
            { Id: 3, Line: npc3, Next: 3 }, { Id: 4, Line: npc4, Next: 3 }],
            heroSide: [{ Id: 1, Options: [["Continue", 2]] }, { Id: 2, Options: [[response2A, 3], [response2B, 4]] },
            { Id: 3, Options: [["Leave", 0]] }]
        },
        responseEffect(hero, option) {
            if (option === 2) { CompleteQuest(hero, dwarvenMineGoblinQuest()); IncreaseReputation(hero, new DaleTownReputation(), 1) } if (option === 5) {
                JoinParty(hero, new FerraForgeHeart(), hero); IncreaseRelationship(hero, new FerraForgeheartRelationship(), 1)
                if (option === 4) { LeaveParty(hero, FindPartyMember(new FerraForgeHeart(), hero.Party), hero.Party); DecreaseRelationship(hero, new FerraForgeheartRelationship(), 1) } if (option === 3) { IncreaseRelationship(hero, new FerraForgeheartRelationship(), 1) }
            }
        }
    }
    return dialogue
}
//giant cave dialogues
export function giantCaveDialogue(hero) {
    var dialogue = { Name: "Speak with Foreman George", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Foreman George rewards you for the rescue", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { IncreaseReputation(hero, new DaleTownReputation(), 1) } }
    return dialogue
}
//goblinMine Dialogues
export function enterGoblinMineDialogue(hero) {
    var dialogue = { Name: "Entering Mine", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "You see goblins overruning the mine", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function enslavedKoboldsDialogue(hero) {
    var dialogue = {
        Name: "Entering Mine",
        Conversation: {
            npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Multiple enslaved kobolds", Next: 1 }, { Id: 2, Line: "Freed Kobolds", Next: 2 }, { Id: 3, Line: "Killed Kobolds", Next: 2 }, { Id: 4, Line: "Ignored Kobolds", Next: 2 }],
            heroSide: [{ Id: 1, Options: [["Free", 2], ["Kill", 3], ["Ignore", 4]] }, { Id: 2, Options: [["Leave", 0]] }]
        },
        responseEffect(hero, option) {
            if (option === 2) { IncreaseRelationship(hero, new FerraForgeheartRelationship(), 2); IncreaseReputation(hero, new WhiteScalesFlockReputation(), 5) }
            else if (option === 3) { DecreaseRelationship(hero, new FerraForgeheartRelationship(), 2) }
            else if (option === 4) { DecreaseRelationship(hero, new FerraForgeheartRelationship(), 1) } else { }
        }
    }
    return dialogue
}
export function saveMinersDialogue(hero) {
    var dialogue = { Name: "Speak with Mine Foreman", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Freed Miners", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { IncreaseReputation(hero, new DaleTownReputation(), 1) } }
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
            dialogue = littleRoot4(hero)
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
    var dialogue = { Name: "Speak with Farmer Littleroot", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Kill Scarecrow?", Next: 1 }, { Id: 2, Line: "Accepted Quest", Next: 2 }, { Id: 3, Line: "Didn't Accept Quest", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { StartQuest(hero, scareCrowQuest1(hero)) } } }
    return dialogue
}
export function littleRoot2(hero) {
    var dialogue = { Name: "Speak with Farmer Littleroot", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The farmer politely waves but keeps working.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    return dialogue
}
export function littleRoot3(hero, questIndex) {
    var dialogue = {
        Name: "Speak to Farmer LittleRoot", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The Farmer thanks you but wonders what the crows the scarecrow was rambling were.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] },
        responseEffect(hero, option) { CompleteQuest(hero, hero.Journal[questIndex]); IncreaseReputation(hero, new DaleTownReputation(), 1); StartQuest(hero, scareCrowQuest2()) }
    }
    return dialogue
}
export function littleRoot4(hero) {
    var questIndex = CheckForQuest(hero, scareCrowQuest4())
    var dialogue = {
        Name: "Return ring to Farmer Littleroot", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Give ring to Farmer Littleroot?", Next: 1 }, { Id: 2, Line: "You decide to return it", Next: 3 }, { Id: 3, Line: "You decide to keep it", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }
        , responseEffect(hero, option) { if (option === 2) { var index = FindItemInInventory(hero.Inventory, silverRingLR()); RemoveItemFromInventory(hero, hero.Inventory, hero.Inventory[index], 1, hero); IncreaseReputation(hero, new DaleTownReputation(), 1); CompleteQuest(hero, hero.Journal[questIndex]) } }
    }
    return dialogue
}
//lumbermill dialogue
export function lumbermillDialogue(hero) {
    var dialogue = ""
    var questIndex = CheckForQuest(hero, giantQuest())
    if (questIndex === null) {
        dialogue = { Name: "Speak with woodcutters", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Find Foreman George?", Next: 1 }, { Id: 2, Line: "Accepted Quest", Next: 2 }, { Id: 3, Line: "Didn't Accept Quest", Next: 2 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { StartQuest(hero, giantQuest(hero)) } } }
    }
    else if (hero.Journal[questIndex].Status === "Finished") {
        dialogue = { Name: "Speak with Woodcutters", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Foreman givees you a hearty wave.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    else {
        dialogue = { Name: "Speak with Woodcutters", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The woodcutters are busy at work.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    return dialogue;
}
//puzzle dungeon dialogue
export function puzzleDungeonDialogue(hero) {
    //apprentice joins
}
//spider cave dialogue
export function spiderCaveDialogue(hero) {
    var dialogue = { Name: "Listen to Crows", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The crows thank you and give you a silver ring.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, scareCrowQuest3()) } }
    return dialogue
}
//tengu camp dialogue
export function tenguCampDialogue(hero) {
    var dialogue = "";
    var questIndex = CheckForQuest(hero, scareCrowQuest2())
    var questIndex2 = CheckForQuest(hero, scareCrowQuest3())
    if (questIndex !== null && questIndex2 === null) {
        dialogue = { Name: "Investigate Camp", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "You Find black feathers leading towards a spider cave.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, hero.Journal[questIndex]); } }
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "In Progress") {
        dialogue = { Name: "Investigate Camp", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "There's nothing else but scattered junk and food scraps", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    else if (hero.Journal[questIndex].Status === "Finished" && hero.Journal[questIndex2].Status === "Finished") {
        dialogue = { Name: "Talk to Crows", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "The Tengu greet you and give you a random piece of 'Treasure'", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    else {
        dialogue = { Name: "Investigate Camp", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "There's nothing but scattered junk and food scraps", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    return dialogue
}
//trading post dialogue
export function joeTheTradersTradingPostDialogue(hero) {
    var questIndex = CheckForQuest(hero, banditQuest1())
    var dialogue = ""
    if (questIndex === null) {
        dialogue = { Name: "Speak with Joe", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Clear out Bandit Hideout?", Next: 1 }, { Id: 2, Line: "Accepted Quest", Next: 2 }, { Id: 3, Line: "Didn't Accept Quest", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { StartQuest(hero, banditQuest1()) } } }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = { Name: "Speak with Joe", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Joe Thanks you.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, banditQuest1(hero)); IncreaseReputation(hero, new DaleTownReputation(), 1) } }
    }
    else {
        dialogue = { Name: "Speak with Joe", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Joe asks if you'd like to buy or sell something.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    return dialogue
}
//whitescale dialogue
export function whiteScaleDialogue(hero) {
    var questIndex = CheckForQuest(hero, gnollQuest1())
    var dialogue = ""
    if (questIndex === null) {
        dialogue = { Name: "Speak with Whitescale", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Clear out Gnoll Den?", Next: 1 }, { Id: 2, Line: "Accepted Quest", Next: 2 }, { Id: 3, Line: "Didn't Accept Quest", Next: 3 }], heroSide: [{ Id: 1, Options: [["Yes", 2], ["No", 3]] }, { Id: 2, Options: [["Leave", 0]] }, { Id: 3, Options: [["Leave", 0]] }] }, responseEffect(hero, option) { if (option === 2) { StartQuest(hero, banditQuest1()) } } }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = { Name: "Speak with Whitescale", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Joe Thanks you.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { CompleteQuest(hero, gnollQuest1(hero)); IncreaseReputation(hero, new WhiteScalesFlockReputation(), 1) } }
    }
    else {
        dialogue = { Name: "Speak with Whitescale", Conversation: { npcSide: [{ Id: 0, Line: "Exit" }, { Id: 1, Line: "Whitescale is knitting.", Next: 1 }], heroSide: [{ Id: 1, Options: [["Leave", 0],] }] }, responseEffect(hero, option) { } }
    }
    return dialogue
}
//witchhut dialogue
export function witchHutDialogue(hero) {

}
export function wizardTowerDialogue(hero) {
    var questIndex = CheckForQuest(hero, wizardTowerQuest1())
    var dialogue = ""
    if (questIndex === null) {
        dialogue = wizardTower1(hero)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "In Progress") {
        dialogue = wizardTower2(hero)
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dialogue = wizardTower3(hero)
    }
    else {
        dialogue = wizardTower4(hero)
    }
    return dialogue;
}
export function wizardTower1(hero) {
    //talking with apprentice
    //skill check or int check to see if you figure out puzzle else they do
    //apprentice sucked in
}
export function wizardTower2(hero) {
    //apprentice thanks you and ambrosius scolds you
    //says apprentice should journey to gain knowledge and maturity
    //apprentice can perma join
}
export function wizardTower3(hero) {
    //if not in party wizard asks to join again
    //if in party ambrosius checks progress
}
export function wizardTower4(hero) {
    //guilt over apprentice being sucked in
}