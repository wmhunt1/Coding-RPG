import { AddToCharacterLog } from "./CharacterScripts";
import { AddItemToInventory, FindItemInInventory, RemoveItemFromInventory } from "./ItemScripts"

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
export function SkillCheck(skill, sucess)
{
    if (skill.Level >= sucess)
    {
        return true
    }
    else
    {
        return false;
    }
}
export function FindSkillInSkillBook(char, skill)
{
    var skillIndex = char.SkillBook.findIndex(x => x.Name === skill.Name);
    return char.SkillBook[skillIndex]
}
export function LevelUpSkill(char, skill) {
    skill.Level++;
    skill.MaxXP = (skill.Level * (skill.Level - 1)) * 100;
    AddToCharacterLog(char, char.Name + " has reached " + skill.Name + " level " + skill.Level);
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
    AddToCharacterLog(char, char.Name + " tries to  " + recipe.Name)
    var quantity = recipe.Output.Quantity
    var sucess = false;
    var foundItems = 0;
    if (recipe.LevelRequirement <= skill.Level) {
        if (recipe.Input.length > 0) {
            for (var r = 0; r < recipe.Input.length; r++) {
                var index = FindItemInInventory(char.Inventory, recipe.Input[r].Item)
                if (index !== null) {
                    if (char.Inventory[index].Quantity >= recipe.Input[r].Quantity) {
                        foundItems++
                    }
                    else {
                        AddToCharacterLog(char, char.Name + " doesn't have enough " + recipe.Input[r].Item.Name + " to " + recipe.Name)
                    }
                }
                else {
                    AddToCharacterLog(char, char.Name + " doesn't have any " + recipe.Input[r].Item.Name)
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
            for (var r2 = 0; r2 < recipe.Input.length; r2++) {
                RemoveItemFromInventory(char, char.Inventory, recipe.Input[r2].Item, recipe.Input[r2].Quantity)
            }
            AddItemToInventory(char, char.Inventory, recipe.Output.Item, recipe.Output.Quantity)
            AddToCharacterLog(char, char.Name + " has " + recipe.Verb + " " + recipe.Output.Item.Name + " X " + quantity + ", earning " + recipe.Exp + " " + skill.Name + " XP")
            EarnSkillXP(char, skill, recipe.Exp)
        }
    }

    else {
        AddToCharacterLog(char, char.Name + " requires " + recipe.LevelRequirement + " in " + skill.Name + " to " + recipe.Name)
    }
}

