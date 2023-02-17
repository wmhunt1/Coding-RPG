import { AddGold } from "./CharacterScripts";
import { AddItemToInventory } from "./ItemScripts";

export function AddToQuestLog(char, message) {
    char.Log.push("Quest: " + message);
}
export function CheckForQuest(hero, quest) {
    var index = null
    if (hero.Journal.find(x => x.Name === quest.Name)) {
        index = hero.Journal.findIndex(x => x.Name === quest.Name);
    }
    return index
}
export function StartQuest(char, quest) {
    var questIndex = CheckForQuest(char, quest)
    if (questIndex === null) {
        char.Journal.push(quest);
        AddToQuestLog(char, char.Name + " Has Accepted Quest: " + quest.Name)
    }
}
export function GetQuestReward(char, quest) {
    AddToQuestLog(char, quest.Name + " Rewards...")
    AddGold(char, quest.Reward.Gold);
    if (quest.Reward.Items.length > 0) {
        for (var q = 0; q < quest.Reward.Items.length; q++) {
            AddItemToInventory(char, char.Inventory, quest.Reward.Items[q].Item, quest.Reward.Items[q].Quantity)
        }
    }
}
export function CompleteQuest(char, quest) {
    var questIndex = CheckForQuest(char, quest)
    if (questIndex !== null) {
        var updateQuest = char.Journal[questIndex]
        updateQuest.Status = "Completed"
        char.Journal[questIndex] = updateQuest;
        AddToQuestLog(char, char.Name + " Has Completed Quest: " + updateQuest.Name)
    }
}
export function UpdateQuestProgress(char, quest, objective) {
    var questIndex = CheckForQuest(char, quest)
    if (questIndex !== null) {
        var updateQuest = char.Journal[questIndex]
        updateQuest.ObjectiveProgress += objective;
        char.Journal[questIndex] = updateQuest
        AddToQuestLog(char, quest.Description + " Progess: " + updateQuest.ObjectiveProgress + "/" + updateQuest.Objective)
    }
}
export function CheckIfFetchQuestObjective(char, item) {
    if (char.Journal.find(x => x.Target.Name === item.Name)) {
        var questIndex = char.Journal.findIndex(x => x.Target.Name === item.Name);
        if (questIndex !== null) {
            if (char.Journal[questIndex].ObjectiveProgress < char.Journal[questIndex].Objective) {
                var updateQuest = char.Journal[questIndex]
                UpdateQuestProgress(char, updateQuest, 1)
            }
        }
    }
}
export function CheckIfDungeonQuestObjective(char, dungeon) {
    if (char.Journal.find(x => x.Target.Name === dungeon.Name)) {
        var questIndex = char.Journal.findIndex(x => x.Target.Name === dungeon.Name);
        if (questIndex !== null) {
            if (char.Journal[questIndex].ObjectiveProgress < char.Journal[questIndex].Objective) {
                var updateQuest = char.Journal[questIndex]
                UpdateQuestProgress(char, updateQuest, 1)
            }
        }
    }
}
export function CheckIfKillQuestObjective(char, monster) {
    if (char.Journal.find(x => x.Target.Name === monster.Name)) {
        var questIndex = char.Journal.findIndex(x => x.Target.Name === monster.Name);
        if (questIndex !== null) {
            if (char.Journal[questIndex].ObjectiveProgress < char.Journal[questIndex].Objective) {
                var updateQuest = char.Journal[questIndex]
                UpdateQuestProgress(char, updateQuest, 1)
            }
        }
    }
}
export function CheckQuestProgress(char, quest) {
    if (quest.ObjectiveProgress >= quest.Objective) {
        CompleteQuest(char, quest)
    }
}