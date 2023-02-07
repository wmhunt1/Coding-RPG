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
export function LevelUpSkill(char, skill) {
    skill.Level++;
    skill.MaxXP = (skill.Level * (skill.Level - 1)) * 100;
    AddToCharacterLog(char, char.Name + " has reached " + skill.Name + " level " + skill.Level);
}
export function CheckForSkillLevelUp(char, skill) {
    if (skill.CurrentXP >= skill.MaxXP) {
        LevelUpSkill(char, skill)
    }
}
export function EarnSkillXP(char, skill, xp) {
    skill.CurrentXP += xp;
    CheckForSkillLevelUp(char, skill)
}
export function UseSkillRecipe(char, skill, recipe) {
    AddToCharacterLog(char, char.Name + " tries to  " + recipe.Name)
    var quantity = recipe.Output.Quantity
    var sucess = false;
    if (recipe.LevelRequirement >= skill.Level) {
        if (recipe.Input.Item.Name !== "") {
            var index = FindItemInInventory(char.Inventory, recipe.Input.Item)
            if (index !== null) {
                if (char.Inventory[index].Quantity >= recipe.Input.Quantity) {
                    RemoveItemFromInventory(char, char.Inventory, recipe.Input.Item, recipe.Input.Quantity)
                    sucess = true
                }
                else {
                    AddToCharacterLog(char, char.Name + " doesn't have enough " + recipe.Input.Item.Name + " to " + recipe.Name)
                }
            }
            else {
                AddToCharacterLog(char, char.Name + " doesn't have any " + recipe.Input.Item.Name)
            }
        }
        else {
            sucess = true;
        }
        if (sucess === true) {
            AddItemToInventory(char, char.Inventory, recipe.Output.Item, recipe.Output.Quantity)
            EarnSkillXP(char, skill, recipe.Exp)
            AddToCharacterLog(char, char.Name + " has " + recipe.Verb + "ed " + recipe.Output.Item.Name + " X " + quantity + ", earning " + recipe.Exp + " " + skill.Name + " XP")
        }
    }
    else {
        AddToCharacterLog(char, char.Name + " requires " + recipe.LevelRequirement + " in " + skill.Name + " to " + recipe.Name)
    }
}