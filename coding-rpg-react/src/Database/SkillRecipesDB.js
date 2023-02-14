import { ashes, bronzeAxe, bronzeAxe2H, bronzeBar, bronzeDagger, bronzeDaggerOffHand, bronzeGauntlets, bronzeHatchet, bronzeHelmet, bronzeLegs, bronzeMace, bronzePickAxe, bronzeShield, bronzeSword, bronzeSword2H, bronzeTorso, bronzeWarHammer, bronzeWarHammer2H, bucket, burntBeef, burntFish, burntRabbitMeat, burntRatMeat, coalOre, cookedBeef, cookedFish, cookedRabbitMeat, cookedRatMeat, copperOre, cowLeather, enchantmentTome, fishingRod, hatchet, ironAxe, ironAxe2H, ironBar, ironBoots, ironDagger, ironDaggerOffHand, ironGauntlets, ironHatchet, ironHelmet, ironLegs, ironMace, ironOre, ironPickAxe, ironShield, ironSword, ironSword2H, ironTorso, ironWarHammer, ironWarHammer2H, knife, leatherBoots, leatherCowl, leatherGloves, leatherLegs, leatherTorso, milk, needle, oakBow, oakLogs, oakStaff, oakWand, pickAxe, rawBeef, rawFish, rawRabbitMeat, rawRatMeat, shears, steelAxe, steelAxe2H, steelBar, steelBoots, steelDagger, steelDaggerOffHand, steelGauntlets, steelHatchet, steelHelmet, steelLegs, steelMace, steelPickAxe, steelShield, steelSword, steelSword2H, steelTorso, steelWarHammer, steelWarHammer2H, thread, tinderBox, tinOre, woodBow, woodLogs, woodStaff, woodWand, woolBoots, woolCloth, woolGloves, woolHat, woolRobeBottom, woolRobeTop, woolTrousers, woolTunic, woolWizardHat, } from "./ItemsDB"
//crafting
//alchemy
export function alchemyRecipes() {
    var alchemyRecipes = []
    return alchemyRecipes
}
//cooking
export function cookingRecipes() {
    var cookingRecipes = [cookRawBeef(), cookRawFish(), cookRawRabbitMeat(), cookRawRatMeat()]
    return cookingRecipes;
}
export function cookRawBeef() {
    var cook = {
        Name: "Cook Raw Beef", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawBeef(), Quantity: 1 }], Output: { Item: cookedBeef(), Quantity: 1 }, FailureOutput: { Item: burntBeef(), Quantity: 1 }
    }
    return cook
}
export function cookRawFish() {
    var cook = {
        Name: "Cook Raw Fish", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawFish(), Quantity: 1 }], Output: { Item: cookedFish(), Quantity: 1 }, FailureOutput: { Item: burntFish(), Quantity: 1 }
    }
    return cook
}
export function cookRawRabbitMeat() {
    var cook = {
        Name: "Cook Raw Rabbit Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawRabbitMeat(), Quantity: 1 }], Output: { Item: cookedRabbitMeat(), Quantity: 1 }, FailureOutput: { Item: burntRabbitMeat(), Quantity: 1 }
    }
    return cook
}
export function cookRawRatMeat() {
    var cook = {
        Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawRatMeat(), Quantity: 1 }], Output: { Item: cookedRatMeat(), Quantity: 1 }, FailureOutput: { Item: burntRatMeat(), Quantity: 1 }
    }
    return cook
}
//crafting
export function craftingRecipes() {
    var craft = [craftLeatherBoots(), craftLeatherCowl(), craftLeatherGloves(), craftLeatherLegs(), craftLeatherTorso(), weaveWoolBoots(), weaveWoolGloves(), weaveWoolHat(), weaveWoolRobeBottom(), weaveWoolRobeTop(), weaveWoolTrousers(), weaveWoolTunic(), weaveWoolWizardHat()]
    return craft;
}
export function craftLeatherBoots() {
    var craft = {
        Name: "Craft Leather Boots", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }], Output: { Item: leatherBoots(), Quantity: 1 }, FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherCowl() {
    var craft = {
        Name: "Craft Leather Cowl", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: cowLeather(), Quantity: 2 }, { Item: thread(), Quantity: 1 }], Output: { Item: leatherCowl(), Quantity: 1 }, FailureOutput: { Item: cowLeather(), Quantity: 2 }
    }
    return craft;
}
export function craftLeatherGloves() {
    var craft = {
        Name: "Craft Leather Gloves", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }], Output: { Item: leatherGloves(), Quantity: 1 }, FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherLegs() {
    var craft = {
        Name: "Craft Leather Legs", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: cowLeather(), Quantity: 3 }, { Item: thread(), Quantity: 1 }], Output: { Item: leatherLegs(), Quantity: 1 }, FailureOutput: { Item: cowLeather(), Quantity: 3 }
    }
    return craft;
}
export function craftLeatherTorso() {
    var craft = { Name: "Craft Leather Armor", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 4, Exp: 125, Input: [{ Item: cowLeather(), Quantity: 5 }, { Item: thread(), Quantity: 1 }], Output: { Item: leatherTorso(), Quantity: 1 }, FailureOutput: { Item: cowLeather(), Quantity: 5 } }
    return craft;
}
export function weaveWoolBoots() {
    var weave = { Name: "Weave Wool Boots", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25, Input: [{ Item: woolCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolBoots(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 1 } }
    return weave;
}
export function weaveWoolGloves() {
    var weave = { Name: "Weave Wool Gloves", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25, Input: [{ Item: woolCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolGloves(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 1 } }
    return weave;
}
export function weaveWoolHat() {
    var weave = { Name: "Weave Wool Hat", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50, Input: [{ Item: woolCloth(), Quantity: 2 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolHat(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 2 } }
    return weave;
}
export function weaveWoolRobeBottom() {
    var weave = { Name: "Weave Wool Robe Bottom", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75, Input: [{ Item: woolCloth(), Quantity: 3 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolRobeBottom(), Quantity: 3 }, FailureOutput: { Item: woolCloth(), Quantity: 3 } }
    return weave;
}
export function weaveWoolRobeTop() {
    var weave = { Name: "Weave Wool Robe Top", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125, Input: [{ Item: woolCloth(), Quantity: 5 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolRobeTop(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 5 } }
    return weave;
}
export function weaveWoolTrousers() {
    var weave = { Name: "Weave Wool Trousers", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75, Input: [{ Item: woolCloth(), Quantity: 3 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolTrousers(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 3 } }
    return weave;
}
export function weaveWoolTunic() {
    var weave = { Name: "Weave Wool Tunic", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125, Input: [{ Item: woolCloth(), Quantity: 5 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolTunic(), Quantity: 5 }, FailureOutput: { Item: woolCloth(), Quantity: 5 } }
    return weave;
}
export function weaveWoolWizardHat() {
    var weave = { Name: "Weave Wool Wizard Hat", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50, Input: [{ Item: woolCloth(), Quantity: 2 }, { Item: thread(), Quantity: 1 }], Output: { Item: woolWizardHat(), Quantity: 1 }, FailureOutput: { Item: woolCloth(), Quantity: 2 } }
    return weave;
}
//enchanting;
export function enchantingRecipes() {
    var enchantingRecipes = [enchantOakStaff(), enchantOakWand(), enchantWoodStaff(), enchantWoodWand()]
    return enchantingRecipes
}
export function enchantOakStaff() {
    var enchant = { Name: "Enchant Oak Staff", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 7, Exp: 200, Input: [{ Item: oakLogs(), Quantity: 2 }], Output: { Item: oakStaff(), Quantity: 1 }, FailureOutput: { Item: oakLogs(), Quantity: 2 } }
    return enchant;
}
export function enchantOakWand() {
    var enchant = { Name: "Enchant Oak Wand", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 5, Exp: 100, Input: [{ Item: oakLogs(), Quantity: 1 }], Output: { Item: oakWand(), Quantity: 1 }, FailureOutput: { Item: oakLogs(), Quantity: 1 } }
    return enchant;
}
export function enchantWoodStaff() {
    var enchant = { Name: "Enchant Wood Staff", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 3, Exp: 50, Input: [{ Item: woodLogs(), Quantity: 2 }], Output: { Item: woodStaff(), Quantity: 1 }, FailureOutput: { Item: woodLogs(), Quantity: 2 } }
    return enchant;
}
export function enchantWoodWand() {
    var enchant = { Name: "Enchant Wood Wand", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: woodWand(), Quantity: 1 }, FailureOutput: { Item: woodLogs(), Quantity: 1 } }
    return enchant;
}
//firemaking
export function firemakingRecipes() {
    var firemakingRecipes = [burnOakLogs(), burnWoodLogs()]
    return firemakingRecipes
}
export function burnOakLogs() {
    var burn = { Name: "Burn Oak Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 5, Exp: 100, Input: [{ Item: oakLogs(), Quantity: 1 }], Output: { Item: ashes(), Quantity: 1 } }
    return burn;
}
export function burnWoodLogs() {
    var burn = { Name: "Burn Wood Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: ashes(), Quantity: 1 } }
    return burn;
}
//fletching
export function fletchingRecipes() {
    var fletchingRecipes = [fletchOakBow(), fletchWoodBow()]
    return fletchingRecipes
}
export function fletchOakBow() {
    var fletch = { Name: "Fletch Oak Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100, Input: [{ Item: oakLogs(), Quantity: 1 }], Output: { Item: oakBow(), Quantity: 1 } }
    return fletch;
}
export function fletchWoodBow() {
    var fletch = { Name: "Fletch Wood Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: woodBow(), Quantity: 1 } }
    return fletch;
}
//smith
export function smithingRecipes() {
    var smithingRecipes = [smeltBronzeBar(), smeltIronBar(), smeltSteelBar(),
    smithBronzeAxe(), smithBronzeAxe2H(), smithBronzeBoots(), smithBronzeDagger(), smithBronzeDaggerOffHand(), smithBronzeGauntlets(), smithBronzeHatchet(), smithBronzeHelmet(), smithBronzeLegs(), smithBronzeMace()
        , smithBronzePickaxe(), smithBronzeShield(), smithBronzeSword(), smithBronzeSword2H(), smithBronzeTorso(), smithBronzeWarHammer(), smithBronzeWarHammer2H(),
    smithIronAxe(), smithIronAxe2H(), smithIronBoots(), smithIronDagger(), smithIronDaggerOffHand(), smithIronGauntlets(), smithIronHatchet(), smithIronHelmet(), smithIronLegs(), smithIronMace(),
    smithIronPickaxe(), smithIronShield(), smithIronSword(), smithIronSword2H(), smithIronTorso(), smithIronWarHammer(), smithIronWarHammer2H(),
    smithSteelAxe(), smithSteelAxe2H(), smithSteelBoots(), smithSteelDagger(), smithSteelDaggerOffHand(), smithSteelGauntlets(), smithSteelHatchet(), smithSteelHelmet(), smithSteelLegs(), smithSteelMace(),
    smithSteelPickaxe(), smithSteelShield(), smithSteelSword(), smithSteelSword2H(), smithSteelTorso(), smithSteelWarHammer(), smithSteelWarHammer2H()]
    return smithingRecipes
}
//smelting
export function smeltBronzeBar() {
    var smelt = { Name: "Smelt Bronze Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 1, Exp: 25, Input: [{ Item: copperOre(), Quantity: 1 }, { Item: tinOre(), Quantity: 1 }], Output: { Item: bronzeBar(), Quantity: 1 } }
    return smelt;
}
export function smeltIronBar() {
    var smelt = { Name: "Smelt Iron Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironOre(), Quantity: 2 }], Output: { Item: ironBar(), Quantity: 1 } }
    return smelt;
}
export function smeltSteelBar() {
    var smelt = { Name: "Smelt Steel Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 10, Exp: 100, Input: [{ Item: ironOre(), Quantity: 1 }, { Item: coalOre(), Quantity: 2 }], Output: { Item: steelBar(), Quantity: 1 } }
    return smelt;
}
//smithing
//bronze
export function smithBronzeAxe() {
    var smith = { Name: "Smith Bronze Axe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeAxe(), Quantity: 1 } }
    return smith;
}
export function smithBronzeAxe2H() {
    var smith = { Name: "Smith Bronze Axe 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 4, Exp: 100, Input: [{ Item: bronzeBar(), Quantity: 4 }], Output: { Item: bronzeAxe2H(), Quantity: 1 } }
    return smith;
}
export function smithBronzeBoots() {
    var smith = { Name: "Smith Bronze Boots", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeGauntlets, Quantity: 1 } }
    return smith;
}
export function smithBronzeDagger() {
    var smith = { Name: "Smith Bronze Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeDagger(), Quantity: 1 } }
    return smith;
}
export function smithBronzeDaggerOffHand() {
    var smith = { Name: "Smith Bronze Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithBronzeGauntlets() {
    var smith = { Name: "Smith Bronze Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeGauntlets(), Quantity: 1 } }
    return smith;
}
export function smithBronzeHatchet() {
    var smith = { Name: "Smith Bronze Hatchet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeHatchet(), Quantity: 1 } }
    return smith;
}
export function smithBronzeHelmet() {
    var smith = { Name: "Smith Bronze Helmet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 3, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeHelmet(), Quantity: 1 } }
    return smith;
}
export function smithBronzeLegs() {
    var smith = { Name: "Smith Bronze Legs", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 4, Exp: 75, Input: [{ Item: bronzeBar(), Quantity: 3 }], Output: { Item: bronzeLegs(), Quantity: 1 } }
    return smith;
}
export function smithBronzeMace() {
    var smith = { Name: "Smith Bronze Mace", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeMace(), Quantity: 1 } }
    return smith;
}
export function smithBronzePickaxe() {
    var smith = { Name: "Smith Bronze Pickaxe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzePickAxe(), Quantity: 1 } }
    return smith;
}
export function smithBronzeShield() {
    var smith = { Name: "Smith Bronze Shield", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 4, Exp: 75, Input: [{ Item: bronzeBar(), Quantity: 3 }], Output: { Item: bronzeShield(), Quantity: 1 } }
    return smith;
}
export function smithBronzeSword() {
    var smith = { Name: "Smith Bronze Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeSword(), Quantity: 1 } }
    return smith;
}
export function smithBronzeSword2H() {
    var smith = { Name: "Smith Bronze Sword 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 4, Exp: 100, Input: [{ Item: bronzeBar(), Quantity: 4 }], Output: { Item: bronzeSword2H(), Quantity: 1 } }
    return smith;
}
export function smithBronzeTorso() {
    var smith = { Name: "Smith Bronze Armor", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 125, Input: [{ Item: bronzeBar(), Quantity: 5 }], Output: { Item: bronzeTorso(), Quantity: 1 } }
    return smith;
}
export function smithBronzeWarHammer() {
    var smith = { Name: "Smith Bronze WarHammer", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeWarHammer(), Quantity: 1 } }
    return smith;
}
export function smithBronzeWarHammer2H() {
    var smith = { Name: "Smith Bronze WarHammer 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 4, Exp: 100, Input: [{ Item: bronzeBar(), Quantity: 4 }], Output: { Item: bronzeWarHammer2H(), Quantity: 1 } }
    return smith;
}
//iron
export function smithIronAxe() {
    var smith = { Name: "Smith Iron Axe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironAxe(), Quantity: 1 } }
    return smith
}
export function smithIronAxe2H() {
    var smith = { Name: "Smith Iron Axe 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 9, Exp: 100, Input: [{ Item: ironBar(), Quantity: 4 }], Output: { Item: ironAxe2H(), Quantity: 1 } }
    return smith
}
export function smithIronBoots() {
    var smith = { Name: "Smith Iron Boots", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironBoots(), Quantity: 1 } }
    return smith;
}
export function smithIronDagger() {
    var smith = { Name: "Smith Iron Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironDagger(), Quantity: 1 } }
    return smith;
}
export function smithIronDaggerOffHand() {
    var smith = { Name: "Smith Iron Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithIronGauntlets() {
    var smith = { Name: "Smith Iron Gauntlets", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironGauntlets(), Quantity: 1 } }
    return smith;
}
export function smithIronHatchet() {
    var smith = { Name: "Smith Iron Hatchet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironHatchet(), Quantity: 1 } }
    return smith;
}
export function smithIronHelmet() {
    var smith = { Name: "Smith Iron Helmet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 7, Exp: 100, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironHelmet(), Quantity: 1 } }
    return smith;
}
export function smithIronLegs() {
    var smith = { Name: "Smith Iron Legs", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 8, Exp: 150, Input: [{ Item: ironBar(), Quantity: 3 }], Output: { Item: ironLegs(), Quantity: 1 } }
    return smith;
}
export function smithIronMace() {
    var smith = { Name: "Smith Iron Mace", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironMace(), Quantity: 1 } }
    return smith;
}
export function smithIronPickaxe() {
    var smith = { Name: "Smith Iron Pickaxe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironPickAxe(), Quantity: 1 } }
    return smith;
}
export function smithIronShield() {
    var smith = { Name: "Smith Iron Shield", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 8, Exp: 150, Input: [{ Item: ironBar(), Quantity: 3 }], Output: { Item: ironShield(), Quantity: 1 } }
    return smith;
}
export function smithIronSword() {
    var smith = { Name: "Smith Iron Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironSword(), Quantity: 1 } }
    return smith;
}
export function smithIronSword2H() {
    var smith = { Name: "Smith Iron Sword 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 9, Exp: 100, Input: [{ Item: ironBar(), Quantity: 4 }], Output: { Item: ironSword2H(), Quantity: 1 } }
    return smith
}
export function smithIronTorso() {
    var smith = { Name: "Smith Iron Armor", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 250, Input: [{ Item: ironBar(), Quantity: 5 }], Output: { Item: ironTorso(), Quantity: 1 } }
    return smith;
}
export function smithIronWarHammer() {
    var smith = { Name: "Smith Iron WarHammer", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironWarHammer(), Quantity: 1 } }
    return smith;
}
export function smithIronWarHammer2H() {
    var smith = { Name: "Smith Iron WarHammer 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 9, Exp: 100, Input: [{ Item: ironBar(), Quantity: 4 }], Output: { Item: ironWarHammer2H(), Quantity: 1 } }
    return smith
}
//steel
export function smithSteelAxe() {
    var smith = { Name: "Smith Steel Axe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelAxe(), Quantity: 1 } }
    return smith;
}
export function smithSteelAxe2H() {
    var smith = { Name: "Smith Steel Axe 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 14, Exp: 400, Input: [{ Item: steelBar(), Quantity: 4 }], Output: { Item: steelAxe2H(), Quantity: 1 } }
    return smith;
}
export function smithSteelBoots() {
    var smith = { Name: "Smith Steel Boots", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelBoots(), Quantity: 1 } }
    return smith;
}
export function smithSteelDagger() {
    var smith = { Name: "Smith Steel Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelDagger(), Quantity: 1 } }
    return smith;
}
export function smithSteelDaggerOffHand() {
    var smith = { Name: "Smith Steel Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithSteelGauntlets() {
    var smith = { Name: "Smith Steel Gauntlets", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelGauntlets(), Quantity: 1 } }
    return smith;
}
export function smithSteelHatchet() {
    var smith = { Name: "Smith Steel Hatchet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelHatchet(), Quantity: 1 } }
    return smith;
}
export function smithSteelHelmet() {
    var smith = { Name: "Smith Steel Helmet", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 12, Exp: 200, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelHelmet(), Quantity: 1 } }
    return smith;
}
export function smithSteelLegs() {
    var smith = { Name: "Smith Steel Legs", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 13, Exp: 300, Input: [{ Item: steelBar(), Quantity: 3 }], Output: { Item: steelLegs(), Quantity: 1 } }
    return smith;
}
export function smithSteelMace() {
    var smith = { Name: "Smith Steel Mace", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelMace(), Quantity: 1 } }
    return smith;
}
export function smithSteelPickaxe() {
    var smith = { Name: "Smith Steel Pickaxe", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelPickAxe(), Quantity: 1 } }
    return smith;
}
export function smithSteelShield() {
    var smith = { Name: "Smith Steel Shield", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 13, Exp: 300, Input: [{ Item: steelBar(), Quantity: 3 }], Output: { Item: steelShield(), Quantity: 1 } }
    return smith;
}
export function smithSteelSword() {
    var smith = { Name: "Smith Steel Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelSword(), Quantity: 1 } }
    return smith;
}
export function smithSteelSword2H() {
    var smith = { Name: "Smith Steel Sword 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 14, Exp: 400, Input: [{ Item: steelBar(), Quantity: 4 }], Output: { Item: steelSword2H(), Quantity: 1 } }
    return smith;
}
export function smithSteelTorso() {
    var smith = { Name: "Smith Steel Armor", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 15, Exp: 500, Input: [{ Item: steelBar(), Quantity: 5 }], Output: { Item: steelTorso(), Quantity: 1 } }
    return smith;
}
export function smithSteelWarHammer() {
    var smith = { Name: "Smith Steel WarHammer", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelWarHammer(), Quantity: 1 } }
    return smith;
}
export function smithSteelWarHammer2H() {
    var smith = { Name: "Smith Steel WarHammer 2H", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 14, Exp: 400, Input: [{ Item: steelBar(), Quantity: 4 }], Output: { Item: steelWarHammer2H(), Quantity: 1 } }
    return smith;
}
//gathering
//farming
export function farmingRecipes() {
    var farm = [milkCow(), shearSheep()]
    return farm;
}
export function milkCow() {
    var milkCow = { Name: "Milk Cow", Skill: "Farming", Tool: null, Verb: "Milk", LevelRequirement: 1, Exp: 25, Input: [{ Item: bucket(), Quantity: 1 }], Output: { Item: milk(), Quantity: 1 } }
    return milkCow
}
export function shearSheep() {
    var shearSheep = { Name: "Shear Sheap", Skill: "Farming", Tool: shears(), Verb: "Shear", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: woolCloth(), Quantity: 1 } }
    return shearSheep
}
//fishing
export function fishingRecipes() {
    var fish = [fishFish()]
    return fish;
}
export function fishFish() {
    var fish = { Name: "Fish Fish", Skill: "Fishing", Tool: fishingRod(), Verb: "Fish", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: rawFish(), Quantity: 1 } }
    return fish
}
//herblore
export function herbLoreRecipes(){
    var herb = []
    return herb;
}
//hunting
export function huntingRecipes() {
    var hunt = [huntRabbit()]
    return hunt;
}
export function huntRabbit() {
    var hunt = { Name: "Hunt Rabbit", Skill: "Hunting", Tool: null, Verb: "Rabbit", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: rawRabbitMeat(), Quantity: 1 } }
    return hunt
}
//mining
export function miningRecipes() {
    var mine = [mineCoalOre(), mineCopperOre(), mineTinOre(), mineIronOre()]
    return mine;
}
export function mineCoalOre() {
    var mine = { Name: "Mine Coal", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 10, Exp: 100, Input: [], Output: { Item: coalOre(), Quantity: 1 } }
    return mine;
}
export function mineCopperOre() {
    var mine = { Name: "Mine Copper Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: copperOre(), Quantity: 1 } }
    return mine;
}
export function mineIronOre() {
    var mine = { Name: "Mine Iron Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50, Input: [], Output: { Item: ironOre(), Quantity: 1 } }
    return mine;
}
export function mineTinOre() {
    var mine = { Name: "Mine Tin Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: tinOre(), Quantity: 1 } }
    return mine;
}
//woodcutting
export function woodcuttingRecipes() {
    var wood = [cutWood()]
    return wood;
}
export function cutWood() {
    var cut = { Name: "Cut Wood", Skill: "Woodcutting", Tool: hatchet(), Verb: "Chop", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: woodLogs(), Quantity: 1 } }
    return cut;
}