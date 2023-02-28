import { CalculateTime } from "./MapScripts";
import { AddItemToInventory, FindItemInInventory, FindItemInInventoryBySubType, RemoveItemFromInventory } from "./ItemScripts"

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.BaseStats.SP.lice(ax, 1);
        }
    }
    return this;
};
export function AddToSkillLog(log, message) {
    log.Log.push("Skill: " + message);
}
export function SkillCheck(skill, sucess) {
    if (skill.Level >= sucess) {
        return true
    }
    else {
        return false;
    }
}
export function FindSkillInSkillBook(char, skill) {
    var skillIndex = char.SkillBook.findIndex(x => x.Name === skill.Name);
    return char.SkillBook[skillIndex]
}
export function LevelUpSkill(char, skill) {
    skill.Level++;
    skill.MaxXP = (skill.Level * (skill.Level - 1)) * 100;
    AddToSkillLog(char, char.Name + " has reached " + skill.Name + " level " + skill.Level);
}
export function CheckForSkillLevelUp(skill) {
    if (skill.CurrentXP >= skill.MaxXP) {
        return true
    }
    else {
        return false;
    }
}
export function EarnSkillXP(char, skill, xp) {
    if (xp > 0) {
        skill.CurrentXP += xp;
    }
    if (CheckForSkillLevelUp(skill) === true) {
        LevelUpSkill(char, skill)
    }
}
export function UseSkillRecipe(char, skill, recipe) {
    var sucess = false;
    var foundItems = 0;
    if (recipe.Tool !== null) {
        var toolIndex = FindItemInInventoryBySubType(char.Inventory, recipe.Tool)
    }
    if (recipe.LevelRequirement <= skill.Level && toolIndex !== null) {
        if (recipe.Input.length > 0) {
            for (var r = 0; r < recipe.Input.length; r++) {
                var index = FindItemInInventory(char.Inventory, recipe.Input[r].Item)
                if (index !== null) {
                    if (char.Inventory[index].Quantity >= recipe.Input[r].Quantity) {
                        foundItems++
                    }
                    else {
                        AddToSkillLog(char, char.Name + " doesn't have enough " + recipe.Input[r].Item.Name + " to " + recipe.Name)
                    }
                }
                else {
                    AddToSkillLog(char, char.Name + " doesn't have any " + recipe.Input[r].Item.Name)
                }
                if (recipe.Input.length === foundItems) {
                    sucess = true
                }
            }
        }
        else {
            sucess = true;
        }
        if (sucess === true) {
            var fail;
            var toolTier = 0;
            if (recipe.Tool !== null) {
                toolTier = char.Inventory[toolIndex].Tier
            }
            if (recipe.Skill === "Cooking" || recipe.Skill === "Crafting") {
                var failChance = Math.floor(Math.random() * 100) + 1 + skill.Level - recipe.LevelRequirement + toolTier;
                if (failChance >= 50) {
                    fail = false
                }
                else {
                    fail = true
                }
            }
            else {
                fail = false;
            }
            for (var r2 = 0; r2 < recipe.Input.length; r2++) {
                RemoveItemFromInventory(char, char.Inventory, recipe.Input[r2].Item, recipe.Input[r2].Quantity, char)
            }
            if (fail === false) {
                if (recipe.Output !== null) {
                    AddToSkillLog(char, char.Name + " has " + recipe.Name + ", earning " + recipe.Exp + " " + skill.Name + " XP")
                    for (var out = 0; out < recipe.Output.length; out++)
                    {
                        AddItemToInventory(char, char.Inventory, recipe.Output[out].Item, recipe.Output[out].Quantity, char)
                    }
                }
                else {
                    AddToSkillLog(char, char.Name + " has " + recipe.Verb + "ed " + recipe.Input.Item.Name + ", earning " + recipe.Exp + " " + skill.Name + " XP")
                }
                EarnSkillXP(char, skill, recipe.Exp)
            }
            else {
                AddToSkillLog(char, char.Name + " has failed to " + recipe.Verb + " " + recipe.Output.Item.Name)
                AddItemToInventory(char, char.Inventory, recipe.FailureOutput.Item, recipe.FailureOutput.Quantity, char)
            }
            CalculateTime(char, 1)
        }
    }
    else {
        if (toolIndex === null) {
            AddToSkillLog(char, char.Name + " requires " + recipe.Tool.Name + " to " + recipe.Name)
        }
        AddToSkillLog(char, char.Name + " requires " + recipe.LevelRequirement + " in " + skill.Name + " to " + recipe.Name)
    }
}

