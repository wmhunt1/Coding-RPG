import { bite, fur, ratTail, rawRatMeat } from "./Items";

export function dog()
{
    var dog = {Name: "Dog", Log: [], Level: 1, CurrentXP: 0, MaxXP: 50, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 10, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bite(), Torso: fur() ,Inventory: [], Gold: 5, Companions: [], Abilities:[], SpellBook: [], Buffs: [], DeBuffs: [], ItemDrops: []}
    return dog;
}
export function rat()
{
    var rat = {Name: "Rat", Log: [], Level: 1, CurrentXP: 10, MaxXP: 50, CurrentHP: 5, MaxHP: 5, CurrentMP: 5, MaxMP: 5, CurrentSP: 5, MaxSP: 5, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 10, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bite(), Torso: fur() ,Inventory: [], Gold: 5, Companions: [], Abilities:[], SpellBook: [], Buffs: [], DeBuffs: [], ItemDrops: [rawRatMeat(), ratTail()]}
    return rat;
}