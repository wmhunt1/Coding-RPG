import { bite, fur, rawRatMeat } from "./Items";

export function rat()
{
    var rat = {Name: "Rat", Log: [], Level: 1, CurrentXP: 10, MaxXP: 100, CurrentHP: 5, MaxHP: 5, CurrentMP: 5, MaxMP: 5, CurrentSP: 5, MaxSP: 5, Strength: 10, Constitution: 10, Dexterity: 10, Intelligence: 10, Wisdom: 10, Charisma: 10, WillPower: 10, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bite(), Torso: fur() ,Inventory: [], Gold: 5, ItemDrop: rawRatMeat()}
    return rat;
}