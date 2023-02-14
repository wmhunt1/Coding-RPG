import { CalculateTime, JoinParty, PartyRecovery, RemoveGold } from "../Scripts/CharacterScripts";
import { CheckForQuest, CompleteQuest, StartQuest } from "../Scripts/QuestScripts"
import { ferraForgeHeart } from "./CharactersDB";
import { dwarvenMineGoblinQuest, giantQuest, ratCellarQuest, scareCrowQuest1 } from "./QuestsDB"

//dungeon encounter dialogues
//goblinMine Dialogues
export function enterGoblinMineDialogue(hero) {
    var dialogue = { Name: "Speak with Ferra", Char: "Ferra", Conversation: [{ Dialogue: [""], Responses: [["Next", 0]], responseEffect(hero, option) { } }, { Dialogue: [""], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function enslavedKoboldsDialogue(hero) {
    var dialogue = { Name: "Speak with Kobolds", Char: "Kobolds", Conversation: [{ Dialogue: [""], Responses: [["Next", 0]], responseEffect(hero, option) { } }, { Dialogue: [""], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function saveMinersDialogue(hero) {
    var dialogue = { Name: "Speak with Mine Foreman", Char: "Mine Foreman", Conversation: [{ Dialogue: [""], Responses: [["Next", 0]], responseEffect(hero, option) { } }, { Dialogue: [""], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//shop dialogues
//inn dialogues
export function dreamingWorkerInnDialogue(hero) {
    var innDialogue = ""
    var questIndex = CheckForQuest(hero.Journal, ratCellarQuest())
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
            Dialogue: ["You enter the Dreaming Worker Inn and immediately notice a large ogress wearing all pink with a frilly apron and a bow atop her blonde curls. The Ogre turns to address you, Sweetheart: 'Well hello there. You must be a newcomer. I'm Sweetheart the Ogre.'"],
            Responses: [["'Hello, Sweetheart'", 0], ["'Hello, Sweetheart the Ogre'", 1]], responseEffect(hero, option) { }
        },
        {
            Dialogue: ["'It's Sweetheart the Ogre you need to say the whole thing or I'll think you're flirting with me, sweetheart'", "'Well nice you meet you to, sweetheart'"],
            Responses: [["...", 0]], responseEffect(hero, option) { }
        }, {
            Dialogue: ["'Well anyway...Would you like to rent a room, sweetheart?'"],
            Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } }
        },
        {
            Dialogue: ["'Now that you've rested would you mind taking care of the large rat in the cellar?'", "'Well in the meantime would you mind taking care of the large rat in the cellar?'"],
            Responses: [["'Yes'", 0], ["'No'", 1]],
            responseEffect(hero, option) { if (option === 0) { StartQuest(hero, ratCellarQuest()) } }
        },
        {
            Dialogue: ["'Thanks, sweetheart.'", "'Well let me Know if you change your mind'"],
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
            Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]) } }
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
export function innDialogue(hero) {
    var innDialogue = { Name: "Speak with Innkeeper", Char: "Innkeeper", Conversation: [{ Dialogue: ["Would you like to rent a room?"], Responses: [["Yes", 0], ["No", 1]], responseEffect(hero, option) { if (option === 0) { if (hero.Gold >= 5) { RemoveGold(hero, 5); PartyRecovery(hero); CalculateTime(hero, 8) } } } }, { Dialogue: ["Have a good rest", "Okay"], Responses: [], responseEffect(hero, option) { }, }] }
    return innDialogue;
}
//smith dialogue
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
export function forgeHeart1(hero, questIndex) {
    var dialogue = {
        Name: "Speak with Old Dwarf and Young Woman", Char: "Old Dwarf and Young Woman",
        Conversation: [{
            Dialogue: ["An elderly dwarf man with a long white beard and a young human woman with red hair and iron armor are arguing. Young woman: 'Grandfather, we haven't recieved any ore for days nor have the miners come into town. Allow me to go and check on them in case something has happended.'"],
            Responses: [["Continue", 0]], responseEffect(hero) { }
        },
        {
            Dialogue: ["'The old dwarf seemingly relents, 'Alright Ferra I know you can handle yourself but please be careful, you're the only family I have left.' Ferra: 'Don't worry, (The God of Smithing) will watch over me.'"],
            Responses: [["Continue", 0]], responseEffect(hero) { }
        },
        {
            Dialogue: ["At this point both turn to you. Old Dwarf: 'You must be an adventurer, my Name is Faldan Forgeheart. Will you go with my granddaughter to check up on the  miners? With the increased Bandit activity I don't want her to go alone'"],
            Responses: [["'Granddaughter?'", 0]], responseEffect(hero, option) { }
        },
        {
            Dialogue: ["The old Dwarf: 'We may not be related by blood but she is still my family, but please will you go with Ferra and help her?'"],
            Responses: [["'Yes'", 0], ["'No'", 1]], responseEffect(hero, option) { if (option === 0) { StartQuest(hero, dwarvenMineGoblinQuest()) }; JoinParty(hero, ferraForgeHeart(), hero.Companions) }
        },
        { Dialogue: ["Ferra: 'Good we have no time to waste then, the mine is to the south west of here.'", "Ferra:'Well I supposed I will have to go on my own then.'"], Responses: [], responseEffect(hero) { } }]
    }
    return dialogue
}
export function forgeHeart2(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping."], Responses: [["Leave", 0]], responseEffect(hero, option) { } }, { Dialogue: ["...ZZZZZZZ"], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart3(hero, questIndex) {
    var dialogue = { Name: "Speak with Faldan and Ferra", Char: "Faldan and Ferra", Conversation: [{ Dialogue: ["Reward"], Responses: [["Accept Reward", 0]], responseEffect(hero, option) { { CompleteQuest(hero, hero.Journal[questIndex]) } } }, { Dialogue: ["Leave."], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart4(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping"], Responses: [["Leave", 0]], responseEffect(hero, option) { } }, { Dialogue: ["...ZZZZZZZ"], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function forgeHeart5(hero) {
    var dialogue = { Name: "Speak with Faldan", Char: "Faldan", Conversation: [{ Dialogue: ["The old dwarf is sleeping"], Responses: [["Leave", 0]], responseEffect(hero, option) { } }, { Dialogue: ["...ZZZZZZZ"], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
//town dialogue
export function daleTownRumors(hero) {
    var dialogue = ""
    var potentialRumors = [witchRumor(hero)]
    if (CheckForQuest(hero.Journal, dwarvenMineGoblinQuest()) === null) {
        potentialRumors.push(goblinRumor(hero))
    }
    if (CheckForQuest(hero.Journal, giantQuest()) === null) {
        potentialRumors.push(giantRumor(hero))
    }
    if (CheckForQuest(hero.Journal, ratCellarQuest()) === null) {
        potentialRumors.push(ratRumor(hero))
    }
    if (CheckForQuest(hero.Journal, scareCrowQuest1()) === null) {
        potentialRumors.push(scareCrowRumor(hero))
    }
    var rumor = potentialRumors[Math.floor(Math.random() * potentialRumors.length)];
    dialogue = rumor
    return dialogue;
}
export function giantRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: 'The lumbermill's foreman was recently kidnapped by a giant'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function goblinRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: 'The Smithy hasn't gotten any shipments of ore for a few days.'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function ratRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: 'I heard that there's a rat problem at the inn.'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function scareCrowRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: 'Littleroot farm is having problems with a possesed scarecrow.'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}
export function witchRumor(hero) {
    var dialogue = { Name: "Listen to Rumors", Char: "Townsperson", Conversation: [{ Dialogue: ["Townsperson: 'There's a witch that lives north of town if you're looking for potions.'"], Responses: [], responseEffect(hero, option) { } }, { Dialogue: [], Responses: [], responseEffect(hero, option) { } }] }
    return dialogue
}