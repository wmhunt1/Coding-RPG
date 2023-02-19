import { ashes, batGuano, beefStew, blackFeather, bread, bronzeAxe, bronzeAxe2H, bronzeBar, bronzeBarrel, bronzeBomb, bronzeCrossBow1H, bronzeCrossBow2H, bronzeCrossBowOffHand, bronzeDagger, bronzeDaggerOffHand, bronzeGauntlets, bronzeHatchet, bronzeHelmet, bronzeLegs, bronzeLimbs, bronzeMace, bronzePickAxe, bronzePistol, bronzePistolOffHand, bronzeRifle, bronzeShield, bronzeSword, bronzeSword2H, bronzeTools, bronzeTorso, bronzeWarHammer, bronzeWarHammer2H, bucket, burntBeef, burntBread, burntChicken, burntFish, burntRabbitMeat, burntRatMeat, burntStew, charcoal, coalOre, cookedBeef, cookedChicken, cookedFish, cookedRabbitMeat, cookedRatMeat, copperOre, cowLeather, dough, enchantmentTome, fishingRod, fishStew, flour, gunPowder,hardLeatherBoots, hardLeatherCowl, hardLeatherGloves, hardLeatherLegs, hardLeatherTorso, hatchet, ironAxe, ironAxe2H, ironBar, ironBarrel, ironBomb, ironBoots, ironCrossBow1H, ironCrossBow2H, ironCrossBowOffHand, ironDagger, ironDaggerOffHand, ironGauntlets, ironHatchet, ironHelmet, ironLegs, ironLimbs, ironMace, ironOre, ironPickAxe, ironPistol, ironPistolOffHand, ironRifle, ironShield, ironSword, ironSword2H, ironTools, ironTorso, ironWarHammer, ironWarHammer2H, knife, leatherBoots, leatherCowl, leatherGloves, leatherLegs, leatherTorso, milk, needle, oakLogs, oakStaff, oakStock, oakWand, pickAxe, rabbitStew, ratStew, rawBeef, rawChicken, rawFish, rawRabbitMeat, rawRatMeat, saltPeter, shears, sickle, steelAxe, steelAxe2H, steelBar, steelBarrel, steelBomb, steelBoots, steelCrossBow1H, steelCrossBow2H, steelCrossBowOffHand, steelDagger, steelDaggerOffHand, steelGauntlets, steelHatchet, steelHelmet, steelLegs, steelLimbs, steelMace, steelPickAxe, steelPistol, steelPistolOffHand, steelRifle, steelShield, steelSword, steelSword2H, steelTools, steelTorso, steelWarHammer, steelWarHammer2H, sulphur, thread, tinderBox, tinOre, tools, water, wheat, willowLogs, willowStaff, willowStock, willowWand, woodLogs, woodShortBow, woodStaff, woodStock, woodWand, woolBoots, woolCloth, woolGloves, woolHat, woolRobeBottom, woolRobeTop, woolTrousers, woolTunic, woolWizardHat, oakShortBow, willowShortBow, oakLongBow, willowLongBow, woodLongBow, bones, skull, ectoplasm, spiderSilkCloth, spiderSilkBoots, spiderSilkGloves, spiderSilkRobeBottom, spiderSilkRobeTop, spiderSilkWizardHat } from "./ItemsDB"
//crafting
//alchemy
export function alchemyRecipes() {
    var alchemyRecipes = [makeGunPowder(), processBatGuano()]
    return alchemyRecipes
}
export function makeGunPowder() {
    var alc = {
        Name: "Make Gunpowder", Skill: "Alchemy", Tool: null, Verb: "Make", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: sulphur(), Quantity: 1 }, { Item: saltPeter(), Quantity: 1 }, { Item: charcoal(), Quantity: 1 }],
        Output: { Item: gunPowder(), Quantity: 1 },
        FailureOutput: null
    }
    return alc
}
export function processBatGuano() {
    var alc = {
        Name: "Process Bat Guano", Skill: "Alchemy", Tool: null, Verb: "Process", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: batGuano(), Quantity: 1 }, { Item: water(), Quantity: 1 }],
        Output: { Item: saltPeter(), Quantity: 1 },
        FailureOutput: null
    }
    return alc
}
//cooking
export function cookingRecipes() {
    var cookingRecipes = [bakeBread(), cookBeefStew(), cookFishStew(), cookRabbitStew(), cookRatStew(), cookRawBeef(), cookRawFish(), cookRawRabbitMeat(), cookRawRatMeat(), makeDough()]
    return cookingRecipes;
}
export function bakeBread() {
    var cook = {
        Name: "Bake Bread", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: dough(), Quantity: 1 }],
        Output: { Item: bread(), Quantity: 1 },
        FailureOutput: { Item: burntBread(), Quantity: 1 }
    }
    return cook
}
export function cookBeefStew() {
    var cook = {
        Name: "Cook Beef Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: rawBeef(), Quantity: 1 }, { Item: milk(), Quantity: 1 }],
        Output: { Item: beefStew(), Quantity: 1 },
        FailureOutput: { Item: burntStew(), Quantity: 1 }
    }
    return cook
}
export function cookFishStew() {
    var cook = {
        Name: "Cook Fish Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: rawFish(), Quantity: 1 }, { Item: milk(), Quantity: 1 }],
        Output: { Item: fishStew(), Quantity: 1 },
        FailureOutput: { Item: burntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRabbitStew() {
    var cook = {
        Name: "Cook Rabbit Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: rawRabbitMeat(), Quantity: 1 }, { Item: milk(), Quantity: 1 }],
        Output: { Item: rabbitStew(), Quantity: 1 },
        FailureOutput: { Item: burntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRatStew() {
    var cook = {
        Name: "Cook Rat Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: rawRatMeat(), Quantity: 1 }, { Item: milk(), Quantity: 1 }],
        Output: { Item: ratStew(), Quantity: 1 },
        FailureOutput: { Item: burntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRawBeef() {
    var cook = {
        Name: "Cook Raw Beef", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawBeef(), Quantity: 1 }],
        Output: { Item: cookedBeef(), Quantity: 1 },
        FailureOutput: { Item: burntBeef(), Quantity: 1 }
    }
    return cook
}
export function cookRawChicken() {
    var cook = {
        Name: "Cook Raw Chicken", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawChicken(), Quantity: 1 }],
        Output: { Item: cookedChicken(), Quantity: 1 },
        FailureOutput: { Item: burntChicken(), Quantity: 1 }
    }
    return cook
}
export function cookRawFish() {
    var cook = {
        Name: "Cook Raw Fish", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawFish(), Quantity: 1 }],
        Output: { Item: cookedFish(), Quantity: 1 },
        FailureOutput: { Item: burntFish(), Quantity: 1 }
    }
    return cook
}
export function cookRawRabbitMeat() {
    var cook = {
        Name: "Cook Raw Rabbit Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawRabbitMeat(), Quantity: 1 }],
        Output: { Item: cookedRabbitMeat(), Quantity: 1 },
        FailureOutput: { Item: burntRabbitMeat(), Quantity: 1 }
    }
    return cook
}
export function cookRawRatMeat() {
    var cook = {
        Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: rawRatMeat(), Quantity: 1 }],
        Output: { Item: cookedRatMeat(), Quantity: 1 },
        FailureOutput: { Item: burntRatMeat(), Quantity: 1 }
    }
    return cook
}
export function drawWater() {
    var cook = {
        Name: "Draw Water", Skill: "Cooking", Tool: null, Verb: "Draw", LevelRequirement: 1, Exp: 1,
        Input: [{ Item: bucket(), Quantity: 1 }],
        Output: { Item: water(), Quantity: 1 },
        FailureOutput: null
    }
    return cook
}
export function makeDough() {
    var cook = {
        Name: "Make Dough", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 5,
        Input: [{ Item: flour(), Quantity: 1 }, { Item: water(), Quantity: 1 }],
        Output: { Item: dough(), Quantity: 1 },
        FailureOutput: null
    }
    return cook
}
export function millWheat() {
    var cook = {
        Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: wheat(), Quantity: 1 }],
        Output: { Item: flour(), Quantity: 1 },
        FailureOutput: null
    }
    return cook
}
//crafting
export function craftingRecipes() {
    var craft = [craftHardLeatherBoots(), craftHardLeatherCowl(), craftHardLeatherGloves(), craftHardLeatherLegs(), craftHardLeatherTorso(),
    craftLeatherBoots(), craftLeatherCowl(), craftLeatherGloves(), craftLeatherLegs(), craftLeatherTorso(),
    weaveSpiderSilkBoots(), weaveSpiderSilkGloves(), weaveSpiderSilkRobeBottom(), weaveSpiderSilkRobeTop(), weaveSpiderSilkWizardHat(),
    weaveWoolBoots(), weaveWoolGloves(), weaveWoolHat(), weaveWoolRobeBottom(), weaveWoolRobeTop(), weaveWoolTrousers(), weaveWoolTunic(), weaveWoolWizardHat()]
    return craft;
}
export function craftHardLeatherBoots() {
    var craft = {
        Name: "Craft Hard Leather Boots", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: hardLeatherBoots(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftHardLeatherCowl() {
    var craft = {
        Name: "Craft Hard Leather Cowl", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 6, Exp: 100,
        Input: [{ Item: cowLeather(), Quantity: 2 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: hardLeatherCowl(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 2 }
    }
    return craft;
}
export function craftHardLeatherGloves() {
    var craft = {
        Name: "Craft Hard Leather Gloves", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: hardLeatherGloves(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftHardLeatherLegs() {
    var craft = {
        Name: "Craft Hard Leather Legs", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 7, Exp: 150,
        Input: [{ Item: cowLeather(), Quantity: 3 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: hardLeatherLegs(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 3 }
    }
    return craft;
}
export function craftHardLeatherTorso() {
    var craft = {
        Name: "Craft Hard Leather Armor", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 9, Exp: 250,
        Input: [{ Item: cowLeather(), Quantity: 5 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: hardLeatherTorso(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 5 }
    }
    return craft;
}
export function craftLeatherBoots() {
    var craft = {
        Name: "Craft Hard Leather Boots", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: leatherBoots(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherCowl() {
    var craft = {
        Name: "Craft Leather Cowl", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: cowLeather(), Quantity: 2 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: leatherCowl(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 2 }
    }
    return craft;
}
export function craftLeatherGloves() {
    var craft = {
        Name: "Craft Leather Gloves", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: cowLeather(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: leatherGloves(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherLegs() {
    var craft = {
        Name: "Craft Leather Legs", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: cowLeather(), Quantity: 3 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: leatherLegs(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 3 }
    }
    return craft;
}
export function craftLeatherTorso() {
    var craft = {
        Name: "Craft Leather Armor", Skill: "Crafting", Tool: needle(), Verb: "Craft", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: cowLeather(), Quantity: 5 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: leatherTorso(), Quantity: 1 },
        FailureOutput: { Item: cowLeather(), Quantity: 5 }
    }
    return craft;
}
export function weaveSpiderSilkBoots() {
    var weave = {
        Name: "Weave Spider Silk Boots", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: spiderSilkCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: spiderSilkBoots(), Quantity: 1 },
        FailureOutput: { Item: spiderSilkCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveSpiderSilkGloves() {
    var weave = {
        Name: "Weave Spider Silk Gloves", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: spiderSilkCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: spiderSilkGloves(), Quantity: 1 },
        FailureOutput: { Item: spiderSilkCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveSpiderSilkRobeBottom() {
    var weave = {
        Name: "Weave Spider SilkRobe Bottom", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 7, Exp: 150,
        Input: [{ Item: spiderSilkCloth(), Quantity: 3 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: spiderSilkRobeBottom(), Quantity: 3 },
        FailureOutput: { Item: spiderSilkCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveSpiderSilkRobeTop() {
    var weave = {
        Name: "Weave Spider Silk Robe Top", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 9, Exp: 250,
        Input: [{ Item: spiderSilkCloth(), Quantity: 5 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: spiderSilkRobeTop(), Quantity: 1 },
        FailureOutput: { Item: spiderSilkCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveSpiderSilkWizardHat() {
    var weave = {
        Name: "Weave Spider Silk Wizard Hat", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 6, Exp: 100,
        Input: [{ Item: spiderSilkCloth(), Quantity: 2 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: spiderSilkWizardHat(), Quantity: 1 },
        FailureOutput: { Item: spiderSilkCloth(), Quantity: 2 }
    }
    return weave;
}
export function weaveWoolBoots() {
    var weave = {
        Name: "Weave Wool Boots", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woolCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolBoots(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveWoolGloves() {
    var weave = {
        Name: "Weave Wool Gloves", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woolCloth(), Quantity: 1 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolGloves(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveWoolHat() {
    var weave = {
        Name: "Weave Wool Hat", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: woolCloth(), Quantity: 2 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolHat(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 2 }
    }
    return weave;
}
export function weaveWoolRobeBottom() {
    var weave = {
        Name: "Weave Wool Robe Bottom", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: woolCloth(), Quantity: 3 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolRobeBottom(), Quantity: 3 },
        FailureOutput: { Item: woolCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveWoolRobeTop() {
    var weave = {
        Name: "Weave Wool Robe Top", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: woolCloth(), Quantity: 5 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolRobeTop(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveWoolTrousers() {
    var weave = {
        Name: "Weave Wool Trousers", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: woolCloth(), Quantity: 3 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolTrousers(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveWoolTunic() {
    var weave = {
        Name: "Weave Wool Tunic", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: woolCloth(), Quantity: 5 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolTunic(), Quantity: 5 },
        FailureOutput: { Item: woolCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveWoolWizardHat() {
    var weave = {
        Name: "Weave Wool Wizard Hat", Skill: "Crafting", Tool: needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: woolCloth(), Quantity: 2 }, { Item: thread(), Quantity: 1 }],
        Output: { Item: woolWizardHat(), Quantity: 1 },
        FailureOutput: { Item: woolCloth(), Quantity: 2 }
    }
    return weave;
}
//enchanting;
export function enchantingRecipes() {
    var enchantingRecipes = [enchantOakStaff(), enchantOakWand(), enchantWillowStaff(), enchantWillowWand(), enchantWoodStaff(), enchantWoodWand()]
    return enchantingRecipes
}
export function enchantOakStaff() {
    var enchant = {
        Name: "Enchant Oak Staff", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 7, Exp: 200,
        Input: [{ Item: oakLogs(), Quantity: 2 }],
        Output: { Item: oakStaff(), Quantity: 1 },
        FailureOutput: { Item: oakLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantOakWand() {
    var enchant = {
        Name: "Enchant Oak Wand", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: oakWand(), Quantity: 1 },
        FailureOutput: { Item: oakLogs(), Quantity: 1 }
    }
    return enchant;
}
export function enchantWillowStaff() {
    var enchant = {
        Name: "Enchant Willow Staff", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 13, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 2 }],
        Output: { Item: willowStaff(), Quantity: 1 },
        FailureOutput: { Item: willowLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantWillowWand() {
    var enchant = {
        Name: "Enchant Willow Wand", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: willowWand(), Quantity: 1 },
        FailureOutput: { Item: willowLogs(), Quantity: 1 }
    }
    return enchant;
}
export function enchantWoodStaff() {
    var enchant = {
        Name: "Enchant Wood Staff", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 3, Exp: 50,
        Input: [{ Item: woodLogs(), Quantity: 2 }],
        Output: { Item: woodStaff(), Quantity: 1 },
        FailureOutput: { Item: woodLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantWoodWand() {
    var enchant = {
        Name: "Enchant Wood Wand", Skill: "Enchanting", Tool: enchantmentTome(), Verb: "Enchant", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: woodWand(), Quantity: 1 },
        FailureOutput: { Item: woodLogs(), Quantity: 1 }
    }
    return enchant;
}
//engineering
export function engineeringRecipes() {
    var engineeringRecipes = [buildBronzeBomb(), buildBronzePistol(), buildBronzePistolOffHand(), buildBronzeRifle(),
    buildIronBomb(), buildIronPistol(), buildIronPistolOffHand(), buildIronRifle(),
    buildSteelBomb(), buildSteelPistol(), buildSteelPistolOffHand(), buildSteelRifle()]
    return engineeringRecipes;
}
export function buildBronzeBomb() {
    var build = {
        Name: "Build Bronze Bomb", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }, { Item: gunPowder(), Quantity: 1 }],
        Output: { Item: bronzeBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzePistol() {
    var build = {
        Name: "Build Bronze Pistol", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBarrel(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 1 }],
        Output: { Item: bronzePistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzePistolOffHand() {
    var build = {
        Name: "Build Bronze Pistol (OffHand)", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBarrel(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 1 }],
        Output: { Item: bronzePistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzeRifle() {
    var build = {
        Name: "Build Bronze Rifle (OffHand)", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBarrel(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 2 }],
        Output: { Item: bronzeRifle(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronBomb() {
    var build = {
        Name: "Build Iron Bomb", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironBar(), Quantity: 1 }, { Item: gunPowder(), Quantity: 2 }],
        Output: { Item: ironBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronPistol() {
    var build = {
        Name: "Build Iron Pistol", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironBarrel(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 2 }],
        Output: { Item: ironPistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronPistolOffHand() {
    var build = {
        Name: "Build Iron Pistol (OffHand)", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironBarrel(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 2 }],
        Output: { Item: ironPistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronRifle() {
    var build = {
        Name: "Build Iron Rifle", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironBarrel(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 4 }],
        Output: { Item: ironRifle(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelBomb() {
    var build = {
        Name: "Build Steel Bomb", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelBar(), Quantity: 1 }, { Item: gunPowder(), Quantity: 3 }],
        Output: { Item: steelBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelPistol() {
    var build = {
        Name: "Build Steel Pistol", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelBarrel(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 3 }],
        Output: { Item: steelPistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelPistolOffHand() {
    var build = {
        Name: "Build Steel Pistol (OffHand)", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelBarrel(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 3 }],
        Output: { Item: steelPistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelRifle() {
    var build = {
        Name: "Build Steel Rifle", Skill: "Engineering", Tool: tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelBarrel(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }, { Item: gunPowder(), Quantity: 6 }],
        Output: { Item: steelRifle(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
//firemaking
export function firemakingRecipes() {
    var firemakingRecipes = [burnOakLogs(), burnWillowLogs(), burnWoodLogs()]
    return firemakingRecipes
}
export function burnOakLogs() {
    var burn = {
        Name: "Burn Oak Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function burnWillowLogs() {
    var burn = {
        Name: "Burn Willow Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function burnWoodLogs() {
    var burn = {
        Name: "Burn Wood Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromOakLogs() {
    var burn = {
        Name: "Make Charcoal from Oak Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Make", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: charcoal(), Quantity: 2 },
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromWillowLogs() {
    var burn = {
        Name: "Make Charcoal from Willow Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: charcoal(), Quantity: 3 }
        ,
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromWoodLogs() {
    var burn = {
        Name: "Make Charcoal from Wood Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Make", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: charcoal(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
//fletching
export function fletchingRecipes() {
    var fletchingRecipes = [assembleBronzeCrossBow1H(), assembleBronzeCrossBow2H(), assembleBronzeCrossBowOffHand(),
    assembleIronCrossBow1H(), assembleIronCrossBow2H(), assembleIronCrossBowOffHand(),
    assembleSteelCrossBow1H(), assembleSteelCrossBow2H(), assembleSteelCrossBowOffHand(),
    fletchOakLongBow(), fletchOakShortBow(), fletchOakStock(), fletchWillowLongBow(), fletchWillowShortBow(), fletchWillowStock(), fletchWoodLongBow(), fletchWoodShortBow(), fletchWillowStock()]
    return fletchingRecipes
}
export function assembleBronzeCrossBow1H() {
    var assemble = {
        Name: "Assemble Bronze CrossBow 1H", Skill: "Fletching", Tool: null, Verb: "Assembled", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeLimbs(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }],
        Output: { Item: bronzeCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleBronzeCrossBow2H() {
    var assemble = {
        Name: "Assemble Bronze CrossBow 2H", Skill: "Fletching", Tool: null, Verb: "Assembled", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeLimbs(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }],
        Output: { Item: bronzeCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleBronzeCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Bronze CrossBow (OffHand)", Skill: "Fletching", Tool: null, Verb: "Assembled", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeLimbs(), Quantity: 1 }, { Item: woodStock(), Quantity: 1 }],
        Output: { Item: bronzeCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBow1H() {
    var assemble = {
        Name: "Assemble Iron CrossBow 1H", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironLimbs(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }],
        Output: { Item: ironCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBow2H() {
    var assemble = {
        Name: "Assemble Iron CrossBow 2H", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironLimbs(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }],
        Output: { Item: ironCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Iron CrossBow OffHand", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: ironLimbs(), Quantity: 1 }, { Item: oakStock(), Quantity: 1 }],
        Output: { Item: ironCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBow1H() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelLimbs(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }],
        Output: { Item: steelCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBow2H() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelLimbs(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }],
        Output: { Item: steelCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: steelLimbs(), Quantity: 1 }, { Item: willowStock(), Quantity: 1 }],
        Output: { Item: steelCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function fletchOakLongBow() {
    var fletch = {
        Name: "Fletch Oak Long Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: oakLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchOakShortBow() {
    var fletch = {
        Name: "Fletch Oak Short Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: oakShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchOakStock() {
    var fletch = {
        Name: "Fletch Oak Stock", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: oakLogs(), Quantity: 1 }],
        Output: { Item: oakStock(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowLongBow() {
    var fletch = {
        Name: "Fletch Willow Long Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: willowLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowShortBow() {
    var fletch = {
        Name: "Fletch Willow Short Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: willowShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowStock() {
    var fletch = {
        Name: "Fletch Willow Stock", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: willowLogs(), Quantity: 1 }],
        Output: { Item: willowStock(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodLongBow() {
    var fletch = {
        Name: "Fletch Wood Long Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: woodLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodShortBow() {
    var fletch = {
        Name: "Fletch Wood Short Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: woodShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodStock() {
    var fletch = {
        Name: "Fletch Wood Stock", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: woodLogs(), Quantity: 1 }],
        Output: { Item: woodStock(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
//smith
export function smithingRecipes() {
    var smithingRecipes = [smeltBronzeBar(), smeltIronBar(), smeltSteelBar(),
    smithBronzeAxe(), smithBronzeAxe2H(), smithBronzeBarrel(), smithBronzeBoots(), smithBronzeDagger(), smithBronzeDaggerOffHand(),
    smithBronzeGauntlets(), smithBronzeHatchet(), smithBronzeHelmet(), smithBronzeLegs(), smithBronzeLimbs(), smithBronzeMace(),
    smithBronzePickaxe(), smithBronzeShield(), smithBronzeSword(), smithBronzeSword2H(), smithBronzeTools(), smithBronzeTorso(),
    smithBronzeWarHammer(), smithBronzeWarHammer2H(),
    smithIronAxe(), smithIronAxe2H(), smithIronBarrel(), smithIronBoots(), smithIronDagger(), smithIronDaggerOffHand(),
    smithIronGauntlets(), smithIronHatchet(), smithIronHelmet(), smithIronLegs(), smithIronLimbs(), smithIronMace(),
    smithIronPickaxe(), smithIronShield(), smithIronSword(), smithIronSword2H(), smithIronTools(), smithIronTorso(),
    smithIronWarHammer(), smithIronWarHammer2H(),
    smithSteelAxe(), smithSteelAxe2H(), smithSteelBarrel(), smithSteelBoots(), smithSteelDagger(), smithSteelDaggerOffHand(),
    smithSteelGauntlets(), smithSteelHatchet(), smithSteelHelmet(), smithSteelLegs(), smithSteelLimbs(), smithSteelMace(),
    smithSteelPickaxe(), smithSteelShield(), smithSteelSword(), smithSteelSword2H(), smithSteelTools(), smithSteelTorso(),
    smithSteelWarHammer(), smithSteelWarHammer2H()]
    return smithingRecipes
}
//smelting
export function smeltBronzeBar() {
    var smelt = {
        Name: "Smelt Bronze Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: copperOre(), Quantity: 1 }, { Item: tinOre(), Quantity: 1 }],
        Output: { Item: bronzeBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
export function smeltIronBar() {
    var smelt = {
        Name: "Smelt Iron Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironOre(), Quantity: 2 }],
        Output: { Item: ironBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
export function smeltSteelBar() {
    var smelt = {
        Name: "Smelt Steel Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: ironOre(), Quantity: 1 }, { Item: coalOre(), Quantity: 2 }],
        Output: { Item: steelBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
//smithing
//bronze
//armor
export function smithBronzeBoots() {
    var smith = {
        Name: "Smith Bronze Boots", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeGauntlets, Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeGauntlets() {
    var smith = {
        Name: "Smith Bronze Sword", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeHelmet() {
    var smith = {
        Name: "Smith Bronze Helmet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 3, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeLegs() {
    var smith = {
        Name: "Smith Bronze Legs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 4, Exp: 75,
        Input: [{ Item: bronzeBar(), Quantity: 3 }],
        Output: { Item: bronzeLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeShield() {
    var smith = {
        Name: "Smith Bronze Shield", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 4, Exp: 75,
        Input: [{ Item: bronzeBar(), Quantity: 3 }],
        Output: { Item: bronzeShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeTorso() {
    var smith = {
        Name: "Smith Bronze Armor", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: bronzeBar(), Quantity: 5 }],
        Output: { Item: bronzeTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithBronzeBarrel() {
    var smith = {
        Name: "Smith Bronze Barrel", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeLimbs() {
    var smith = {
        Name: "Smith Bronze Limbs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//tools
export function smithBronzeHatchet() {
    var smith = {
        Name: "Smith Bronze Hatchet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzePickaxe() {
    var smith = {
        Name: "Smith Bronze Pickaxe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzePickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeTools() {
    var smith = {
        Name: "Smith Bronze Tools", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapon
export function smithBronzeAxe() {
    var smith = {
        Name: "Smith Bronze Axe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeAxe2H() {
    var smith = {
        Name: "Smith Bronze Axe 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: bronzeBar(), Quantity: 4 }],
        Output: { Item: bronzeAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeDagger() {
    var smith = {
        Name: "Smith Bronze Dagger", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeDaggerOffHand() {
    var smith = {
        Name: "Smith Bronze Dagger (OffHand)", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bronzeBar(), Quantity: 1 }],
        Output: { Item: bronzeDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeMace() {
    var smith = {
        Name: "Smith Bronze Mace", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeSword() {
    var smith = {
        Name: "Smith Bronze Sword", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeSword2H() {
    var smith = {
        Name: "Smith Bronze Sword 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: bronzeBar(), Quantity: 4 }],
        Output: { Item: bronzeSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeWarHammer() {
    var smith = {
        Name: "Smith Bronze WarHammer", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: bronzeBar(), Quantity: 2 }],
        Output: { Item: bronzeWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeWarHammer2H() {
    var smith = {
        Name: "Smith Bronze WarHammer 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: bronzeBar(), Quantity: 4 }],
        Output: { Item: bronzeWarHammer2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//iron
//armor
export function smithIronBoots() {
    var smith = {
        Name: "Smith Iron Boots", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironBoots(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronGauntlets() {
    var smith = {
        Name: "Smith Iron Gauntlets", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronHelmet() {
    var smith = {
        Name: "Smith Iron Helmet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 7, Exp: 100,
        Input: [{ Item: ironBar(), Quantity: 2 }],
        Output: { Item: ironHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronLegs() {
    var smith = {
        Name: "Smith Iron Legs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 8, Exp: 150,
        Input: [{ Item: ironBar(), Quantity: 3 }],
        Output: { Item: ironLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronShield() {
    var smith = {
        Name: "Smith Iron Shield", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 8, Exp: 150,
        Input: [{ Item: ironBar(), Quantity: 3 }],
        Output: { Item: ironShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronTorso() {
    var smith = {
        Name: "Smith Iron Armor", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 250,
        Input: [{ Item: ironBar(), Quantity: 5 }],
        Output: { Item: ironTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithIronBarrel() {
    var smith = {
        Name: "Smith Iron Barrel", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronLimbs() {
    var smith = {
        Name: "Smith Iron Limbs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//tool
export function smithIronHatchet() {
    var smith = {
        Name: "Smith Iron Hatchet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronPickaxe() {
    var smith = {
        Name: "Smith Iron Pickaxe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironPickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronTools() {
    var smith = {
        Name: "Smith Iron Tools", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapon
export function smithIronAxe() {
    var smith = {
        Name: "Smith Iron Axe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 2 }],
        Output: { Item: ironAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronAxe2H() {
    var smith = {
        Name: "Smith Iron Axe 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: ironBar(), Quantity: 4 }],
        Output: { Item: ironAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronDagger() {
    var smith = {
        Name: "Smith Iron Dagger", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronDaggerOffHand() {
    var smith = {
        Name: "Smith Iron Dagger (OffHand)", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 1 }],
        Output: { Item: ironDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronMace() {
    var smith = {
        Name: "Smith Iron Mace", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 2 }],
        Output: { Item: ironMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronSword() {
    var smith = {
        Name: "Smith Iron Sword", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 2 }],
        Output: { Item: ironSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronSword2H() {
    var smith = {
        Name: "Smith Iron Sword 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: ironBar(), Quantity: 4 }],
        Output: { Item: ironSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronWarHammer() {
    var smith = {
        Name: "Smith Iron WarHammer", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: ironBar(), Quantity: 2 }],
        Output: { Item: ironWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronWarHammer2H() {
    var smith = {
        Name: "Smith Iron WarHammer 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: ironBar(), Quantity: 4 }],
        Output: { Item: ironWarHammer2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
//steel
//armor
export function smithSteelBoots() {
    var smith = {
        Name: "Smith Steel Boots", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelBoots(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelGauntlets() {
    var smith = {
        Name: "Smith Steel Gauntlets", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelHelmet() {
    var smith = {
        Name: "Smith Steel Helmet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 12, Exp: 200,
        Input: [{ Item: steelBar(), Quantity: 2 }],
        Output: { Item: steelHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelLegs() {
    var smith = {
        Name: "Smith Steel Legs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 13, Exp: 300,
        Input: [{ Item: steelBar(), Quantity: 3 }],
        Output: { Item: steelLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelShield() {
    var smith = {
        Name: "Smith Steel Shield", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 13, Exp: 300,
        Input: [{ Item: steelBar(), Quantity: 3 }],
        Output: { Item: steelShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelTorso() {
    var smith = {
        Name: "Smith Steel Armor", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 15, Exp: 500,
        Input: [{ Item: steelBar(), Quantity: 5 }],
        Output: { Item: steelTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithSteelBarrel() {
    var smith = {
        Name: "Smith Steel Barrel", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelLimbs() {
    var smith = {
        Name: "Smith Steel Limbs", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//tools
export function smithSteelHatchet() {
    var smith = {
        Name: "Smith Steel Hatchet", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelPickaxe() {
    var smith = {
        Name: "Smith Steel Pickaxe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelPickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelTools() {
    var smith = {
        Name: "Smith Steel Tools", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapons
export function smithSteelAxe() {
    var smith = {
        Name: "Smith Steel Axe", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 2 }],
        Output: { Item: steelAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelAxe2H() {
    var smith = {
        Name: "Smith Steel Axe 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: steelBar(), Quantity: 4 }],
        Output: { Item: steelAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelDagger() {
    var smith = {
        Name: "Smith Steel Dagger", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelDaggerOffHand() {
    var smith = {
        Name: "Smith Steel Dagger (OffHand)", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 1 }],
        Output: { Item: steelDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelMace() {
    var smith = {
        Name: "Smith Steel Mace", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 2 }],
        Output: { Item: steelMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelSword() {
    var smith = {
        Name: "Smith Steel Sword", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 2 }],
        Output: { Item: steelSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelSword2H() {
    var smith = {
        Name: "Smith Steel Sword 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: steelBar(), Quantity: 4 }],
        Output: { Item: steelSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelWarHammer() {
    var smith = {
        Name: "Smith Steel WarHammer", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: steelBar(), Quantity: 2 }],
        Output: { Item: steelWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelWarHammer2H() {
    var smith = {
        Name: "Smith Steel WarHammer 2H", Skill: "Smithing", Tool: tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: steelBar(), Quantity: 4 }],
        Output: { Item: steelWarHammer2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//gathering
//farming
export function farmingRecipes() {
    var farm = [harvestWheat(), milkCow(), shearSheep()]
    return farm;
}
export function harvestWheat() {
    var harvest = {
        Name: "Harvest Wheat", Skill: "Farming", Tool: sickle(), Verb: "Harvest", LevelRequirement: 1, Exp: 5,
        Input: [],
        Output: { Item: wheat(), Quantity: 1 },
        FailureOutput: null
    }
    return harvest;
}
export function milkCow() {
    var milkCow = {
        Name: "Milk Cow", Skill: "Farming", Tool: null, Verb: "Milk", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bucket(), Quantity: 1 }],
        Output: { Item: milk(), Quantity: 1 },
        FailureOutput: null
    }
    return milkCow
}
export function shearSheep() {
    var shearSheep = {
        Name: "Shear Sheap", Skill: "Farming", Tool: shears(), Verb: "Shear", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: woolCloth(), Quantity: 1 },
        FailureOutput: null
    }
    return shearSheep
}
//fishing
export function fishingRecipes() {
    var fish = [fishFish()]
    return fish;
}
export function fishFish() {
    var fish = {
        Name: "Fish Fish", Skill: "Fishing", Tool: fishingRod(), Verb: "Fish", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: rawFish(), Quantity: 1 },
        FailureOutput: null
    }
    return fish
}
//herblore
export function herbLoreRecipes() {
    var herb = []
    return herb;
}
//hunting
export function huntingRecipes() {
    var hunt = [huntRabbit()]
    return hunt;
}
export function gatherBlackFeathers() {
    var hunt = {
        Name: "Gather Feathers", Skill: "Hunting", Tool: null, Verb: "Gather", LevelRequirement: 1, Exp: 5,
        Input: [],
        Output: { Item: blackFeather(), Quantity: 1 },
        FailureOutput: null
    }
    return hunt
}
export function huntRabbit() {
    var hunt = {
        Name: "Hunt Rabbit", Skill: "Hunting", Tool: null, Verb: "Hunt", LevelRequirement: 1, Exp: 25, Input: [],
        Output: { Item: rawRabbitMeat(), Quantity: 1 },
        FailureOutput: null
    }
    return hunt
}
//mining
export function miningRecipes() {
    var mine = [mineCoalOre(), mineCopperOre(), mineTinOre(), mineIronOre(), mineSulphur()]
    return mine;
}
export function mineCoalOre() {
    var mine = {
        Name: "Mine Coal", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 10, Exp: 100,
        Input: [],
        Output: { Item: coalOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineCopperOre() {
    var mine = {
        Name: "Mine Copper Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: copperOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineIronOre() {
    var mine = {
        Name: "Mine Iron Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: ironOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineSaltpeter() {
    var mine = {
        Name: "Mine Saltpeter", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: ironOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineSulphur() {
    var mine = {
        Name: "Mine Sulpfur", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: ironOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;

}
export function mineTinOre() {
    var mine = {
        Name: "Mine Tin Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: tinOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
//woodcutting
export function woodcuttingRecipes() {
    var wood = [cutOakWood(), cutWillowWood(), cutWood()]
    return wood;
}
export function cutOakWood() {
    var cut = {
        Name: "Cut Oak Wood", Skill: "Woodcutting", Tool: hatchet(), Verb: "Chop", LevelRequirement: 5, Exp: 100,
        Input: [],
        Output: { Item: oakLogs(), Quantity: 1 },
        FailureOutput: null
    }
    return cut;
}
export function cutWillowWood() {
    var cut = {
        Name: "Cut Willow Wood", Skill: "Woodcutting", Tool: hatchet(), Verb: "Chop", LevelRequirement: 10, Exp: 400,
        Input: [],
        Output: { Item: willowLogs(), Quantity: 1 },
        FailureOutput: null
    }
    return cut;
}
export function cutWood() {
    var cut = {
        Name: "Cut Wood", Skill: "Woodcutting", Tool: hatchet(), Verb: "Chop", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: woodLogs(), Quantity: 1 },
        FailureOutput: null
    }
    return cut;
}
//magic
//restoration
export function restorationRecipes() {
    var all = [buryBones(), buryEctoplasm(), burySkull()]
    return all;
}
export function buryBones() {
    var cut = {
        Name: "Consecrate Bones", Skill: "Restoration", Tool: null, Verb: "Consecrate", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: bones(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
export function buryEctoplasm() {
    var cut = {
        Name: "Consecrate Ectoplasm", Skill: "Restoration", Tool: null, Verb: "Consecrate", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: ectoplasm(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
export function burySkull() {
    var cut = {
        Name: "Consecrate Skull", Skill: "Restoration", Tool: null, Verb: "Consecrate", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: skull(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
//utility