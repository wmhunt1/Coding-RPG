import {
    Ashes, BatGuano, BeefStew, BlackFeather, Bread, BronzeAxe, BronzeAxe2H, BronzeBar, BronzeBarrel, BronzeBomb,
    BronzeCrossBow1H, BronzeCrossBow2H, BronzeCrossBowOffHand, BronzeDagger, BronzeDaggerOffHand, BronzeGauntlets,
    BronzeHatchet, BronzeHelmet, BronzeLegs, BronzeLimbs, BronzeMace, BronzePickAxe, BronzePistol, BronzePistolOffHand,
    BronzeRifle, BronzeShield, BronzeSword, BronzeSword2H, BronzeTools, BronzeTorso, BronzeWarHammer, BronzeWarHammer2H,
    Bucket, BurntBeef, BurntBread, BurntChicken, BurntFish, BurntRabbitMeat, BurntRatMeat, BurntStew, Charcoal, CoalOre,
    CookedBeef, CookedChicken, CookedFish, CookedRabbitMeat, CookedRatMeat, CopperOre, CowLeather, Dough, EnchantmentTome,
    FishingRod, FishStew, Flour, GunPowder, HardLeatherBoots, HardLeatherCowl, HardLeatherGloves, HardLeatherLegs,
    HardLeatherTorso, Hatchet, IronAxe, IronAxe2H, IronBar, IronBarrel, IronBomb, IronBoots, IronCrossBow1H, IronCrossBow2H,
    IronCrossBowOffHand, IronDagger, IronDaggerOffHand, IronGauntlets, IronHatchet, IronHelmet, IronLegs, IronLimbs,
    IronMace, IronOre, IronPickAxe, IronPistol, IronPistolOffHand, IronRifle, IronShield, IronSword, IronSword2H, IronTools,
    IronTorso, IronWarHammer, IronWarHammer2H, Knife, LeatherBoots, LeatherCowl, LeatherGloves, LeatherLegs, LeatherTorso,
    Milk, Needle, OakLogs, OakStaff, OakStock, OakWand, PickAxe, RabbitStew, RatStew, RawBeef, RawChicken, RawFish,
    RawRabbitMeat, RawRatMeat, SaltPeter, Shears, Sickle, SteelAxe, SteelAxe2H, SteelBar, SteelBarrel, SteelBomb,
    SteelBoots, SteelCrossBow1H, SteelCrossBow2H, SteelCrossBowOffHand, SteelDagger, SteelDaggerOffHand, SteelGauntlets,
    SteelHatchet, SteelHelmet, SteelLegs, SteelLimbs, SteelMace, SteelPickAxe, SteelPistol, SteelPistolOffHand,
    SteelRifle, SteelShield, SteelSword, SteelSword2H, SteelTools, SteelTorso, SteelWarHammer, SteelWarHammer2H,
    Sulphur, Thread, TinderBox, TinOre, Tools, Water, Wheat, WillowLogs, WillowStaff, WillowStock, WillowWand, WoodLogs,
    WoodShortBow, WoodStaff, WoodStock, WoodWand, WoolBoots, WoolCloth, WoolGloves, WoolHat, WoolRobeBottom, WoolRobeTop,
    WoolTrousers, WoolTunic, WoolWizardHat, OakShortBow, WillowShortBow, OakLongBow, WillowLongBow, WoodLongBow, Bones,
    Skull, Ectoplasm, SpiderSilkCloth, SpiderSilkBoots, SpiderSilkGloves, SpiderSilkRobeBottom, SpiderSilkRobeTop,
    SpiderSilkWizardHat, BronzeBoots
} from "./ItemsDB"
//crafting
//alchemy
export function alchemyRecipes() {
    var alchemyRecipes = [makeGunPowder(), processBatGuano()]
    return alchemyRecipes
}
export function makeGunPowder() {
    var alc = {
        Name: "Make Gunpowder", Skill: "Alchemy", Tool: null, Verb: "Make", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new Sulphur(), Quantity: 1 }, { Item: new SaltPeter(), Quantity: 1 }, { Item: new Charcoal(), Quantity: 1 }],
        Output: { Item: new GunPowder(), Quantity: 1 },
        FailureOutput: null
    }
    return alc
}
export function processBatGuano() {
    var alc = {
        Name: "Process Bat Guano", Skill: "Alchemy", Tool: null, Verb: "Process", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BatGuano(), Quantity: 1 }, { Item: new Water(), Quantity: 1 }],
        Output: { Item: new SaltPeter(), Quantity: 1 },
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
        Input: [{ Item: new Dough(), Quantity: 1 }],
        Output: { Item: new Bread(), Quantity: 1 },
        FailureOutput: { Item: new BurntBread(), Quantity: 1 }
    }
    return cook
}
export function cookBeefStew() {
    var cook = {
        Name: "Cook Beef Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: new RawBeef(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }],
        Output: { Item: new BeefStew(), Quantity: 1 },
        FailureOutput: { Item: new BurntStew(), Quantity: 1 }
    }
    return cook
}
export function cookFishStew() {
    var cook = {
        Name: "Cook Fish Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: new RawFish(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }],
        Output: { Item: new FishStew(), Quantity: 1 },
        FailureOutput: { Item: new BurntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRabbitStew() {
    var cook = {
        Name: "Cook Rabbit Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: new RawRabbitMeat(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }],
        Output: { Item: new RabbitStew(), Quantity: 1 },
        FailureOutput: { Item: new BurntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRatStew() {
    var cook = {
        Name: "Cook Rat Stew", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: new RawRatMeat(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }],
        Output: { Item: new RatStew(), Quantity: 1 },
        FailureOutput: { Item: new BurntStew(), Quantity: 1 }
    }
    return cook
}
export function cookRawBeef() {
    var cook = {
        Name: "Cook Raw Beef", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new RawBeef(), Quantity: 1 }],
        Output: { Item: new CookedBeef(), Quantity: 1 },
        FailureOutput: { Item: new BurntBeef(), Quantity: 1 }
    }
    return cook
}
export function cookRawChicken() {
    var cook = {
        Name: "Cook Raw Chicken", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new RawChicken(), Quantity: 1 }],
        Output: { Item: new CookedChicken(), Quantity: 1 },
        FailureOutput: { Item: new BurntChicken(), Quantity: 1 }
    }
    return cook
}
export function cookRawFish() {
    var cook = {
        Name: "Cook Raw Fish", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new RawFish(), Quantity: 1 }],
        Output: { Item: new CookedFish(), Quantity: 1 },
        FailureOutput: { Item: new BurntFish(), Quantity: 1 }
    }
    return cook
}
export function cookRawRabbitMeat() {
    var cook = {
        Name: "Cook Raw Rabbit Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new RawRabbitMeat(), Quantity: 1 }],
        Output: { Item: new CookedRabbitMeat(), Quantity: 1 },
        FailureOutput: { Item: new BurntRabbitMeat(), Quantity: 1 }
    }
    return cook
}
export function cookRawRatMeat() {
    var cook = {
        Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new RawRatMeat(), Quantity: 1 }],
        Output: { Item: new CookedRatMeat(), Quantity: 1 },
        FailureOutput: { Item: new BurntRatMeat(), Quantity: 1 }
    }
    return cook
}
export function drawWater() {
    var cook = {
        Name: "Draw  Water", Skill: "Cooking", Tool: null, Verb: "Draw", LevelRequirement: 1, Exp: 1,
        Input: [{ Item: new Bucket(), Quantity: 1 }],
        Output: { Item: new Water(), Quantity: 1 },
        FailureOutput: null
    }
    return cook
}
export function makeDough() {
    var cook = {
        Name: "Make Dough", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 5,
        Input: [{ Item: new Flour(), Quantity: 1 }, { Item: new Water(), Quantity: 1 }],
        Output: { Item: new Dough(), Quantity: 1 },
        FailureOutput: null
    }
    return cook
}
export function millWheat() {
    var cook = {
        Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new Wheat(), Quantity: 1 }],
        Output: { Item: new Flour(), Quantity: 1 },
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
        Name: "Craft Hard Leather Boots", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new HardLeatherBoots(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftHardLeatherCowl() {
    var craft = {
        Name: "Craft Hard Leather Cowl", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 6, Exp: 100,
        Input: [{ Item: new CowLeather(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new HardLeatherCowl(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 2 }
    }
    return craft;
}
export function craftHardLeatherGloves() {
    var craft = {
        Name: "Craft Hard Leather Gloves", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new HardLeatherGloves(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftHardLeatherLegs() {
    var craft = {
        Name: "Craft Hard Leather Legs", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 7, Exp: 150,
        Input: [{ Item: new CowLeather(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new HardLeatherLegs(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 3 }
    }
    return craft;
}
export function craftHardLeatherTorso() {
    var craft = {
        Name: "Craft Hard Leather Armor", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 9, Exp: 250,
        Input: [{ Item: new CowLeather(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new HardLeatherTorso(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 5 }
    }
    return craft;
}
export function craftLeatherBoots() {
    var craft = {
        Name: "Craft Hard Leather Boots", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new LeatherBoots(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherCowl() {
    var craft = {
        Name: "Craft Leather Cowl", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new CowLeather(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new LeatherCowl(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 2 }
    }
    return craft;
}
export function craftLeatherGloves() {
    var craft = {
        Name: "Craft Leather Gloves", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new LeatherGloves(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 1 }
    }
    return craft;
}
export function craftLeatherLegs() {
    var craft = {
        Name: "Craft Leather Legs", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: new CowLeather(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new LeatherLegs(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 3 }
    }
    return craft;
}
export function craftLeatherTorso() {
    var craft = {
        Name: "Craft Leather Armor", Skill: "Crafting", Tool: new Needle(), Verb: "Craft", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: new CowLeather(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new LeatherTorso(), Quantity: 1 },
        FailureOutput: { Item: new CowLeather(), Quantity: 5 }
    }
    return craft;
}
export function weaveSpiderSilkBoots() {
    var weave = {
        Name: "Weave Spider Silk Boots", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new SpiderSilkCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new SpiderSilkBoots(), Quantity: 1 },
        FailureOutput: { Item: new SpiderSilkCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveSpiderSilkGloves() {
    var weave = {
        Name: "Weave Spider Silk Gloves", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new SpiderSilkCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new SpiderSilkGloves(), Quantity: 1 },
        FailureOutput: { Item: new SpiderSilkCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveSpiderSilkRobeBottom() {
    var weave = {
        Name: "Weave Spider SilkRobe Bottom", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 7, Exp: 150,
        Input: [{ Item: new SpiderSilkCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new SpiderSilkRobeBottom(), Quantity: 3 },
        FailureOutput: { Item: new SpiderSilkCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveSpiderSilkRobeTop() {
    var weave = {
        Name: "Weave Spider Silk Robe Top", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 9, Exp: 250,
        Input: [{ Item: new SpiderSilkCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new SpiderSilkRobeTop(), Quantity: 1 },
        FailureOutput: { Item: new SpiderSilkCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveSpiderSilkWizardHat() {
    var weave = {
        Name: "Weave Spider Silk Wizard Hat", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 6, Exp: 100,
        Input: [{ Item: new SpiderSilkCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new SpiderSilkWizardHat(), Quantity: 1 },
        FailureOutput: { Item: new SpiderSilkCloth(), Quantity: 2 }
    }
    return weave;
}
export function weaveWoolBoots() {
    var weave = {
        Name: "Weave Wool Boots", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoolCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolBoots(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveWoolGloves() {
    var weave = {
        Name: "Weave Wool Gloves", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoolCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolGloves(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 1 }
    }
    return weave;
}
export function weaveWoolHat() {
    var weave = {
        Name: "Weave Wool Hat", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new WoolCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolHat(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 2 }
    }
    return weave;
}
export function weaveWoolRobeBottom() {
    var weave = {
        Name: "Weave Wool Robe Bottom", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: new WoolCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolRobeBottom(), Quantity: 3 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveWoolRobeTop() {
    var weave = {
        Name: "Weave Wool Robe Top", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: new WoolCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolRobeTop(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveWoolTrousers() {
    var weave = {
        Name: "Weave Wool Trousers", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 3, Exp: 75,
        Input: [{ Item: new WoolCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolTrousers(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 3 }
    }
    return weave;
}
export function weaveWoolTunic() {
    var weave = {
        Name: "Weave Wool Tunic", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 4, Exp: 125,
        Input: [{ Item: new WoolCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolTunic(), Quantity: 5 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 5 }
    }
    return weave;
}
export function weaveWoolWizardHat() {
    var weave = {
        Name: "Weave Wool Wizard Hat", Skill: "Crafting", Tool: new Needle(), Verb: "Weave", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new WoolCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }],
        Output: { Item: new WoolWizardHat(), Quantity: 1 },
        FailureOutput: { Item: new WoolCloth(), Quantity: 2 }
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
        Name: "Enchant Oak Staff", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 7, Exp: 200,
        Input: [{ Item: new OakLogs(), Quantity: 2 }],
        Output: { Item: new OakStaff(), Quantity: 1 },
        FailureOutput: { Item: new OakLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantOakWand() {
    var enchant = {
        Name: "Enchant Oak Wand", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new OakWand(), Quantity: 1 },
        FailureOutput: { Item: new OakLogs(), Quantity: 1 }
    }
    return enchant;
}
export function enchantWillowStaff() {
    var enchant = {
        Name: "Enchant Willow Staff", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 13, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 2 }],
        Output: { Item: new WillowStaff(), Quantity: 1 },
        FailureOutput: { Item: new WillowLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantWillowWand() {
    var enchant = {
        Name: "Enchant Willow Wand", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new WillowWand(), Quantity: 1 },
        FailureOutput: { Item: new WillowLogs(), Quantity: 1 }
    }
    return enchant;
}
export function enchantWoodStaff() {
    var enchant = {
        Name: "Enchant Wood Staff", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 3, Exp: 50,
        Input: [{ Item: new WoodLogs(), Quantity: 2 }],
        Output: { Item: new WoodStaff(), Quantity: 1 },
        FailureOutput: { Item: new WoodLogs(), Quantity: 2 }
    }
    return enchant;
}
export function enchantWoodWand() {
    var enchant = {
        Name: "Enchant Wood Wand", Skill: "Enchanting", Tool: new EnchantmentTome(), Verb: "Enchant", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new WoodWand(), Quantity: 1 },
        FailureOutput: { Item: new WoodLogs(), Quantity: 1 }
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
        Name: "Build Bronze Bomb", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }],
        Output: { Item: new BronzeBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzePistol() {
    var build = {
        Name: "Build Bronze Pistol", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }],
        Output: { Item: new BronzePistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzePistolOffHand() {
    var build = {
        Name: "Build Bronze Pistol (OffHand)", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }],
        Output: { Item: new BronzePistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildBronzeRifle() {
    var build = {
        Name: "Build Bronze Rifle (OffHand)", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }],
        Output: { Item: new BronzeRifle(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronBomb() {
    var build = {
        Name: "Build Iron Bomb", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }],
        Output: { Item: new IronBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronPistol() {
    var build = {
        Name: "Build Iron Pistol", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }],
        Output: { Item: new IronPistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronPistolOffHand() {
    var build = {
        Name: "Build Iron Pistol (OffHand)", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }],
        Output: { Item: new IronPistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildIronRifle() {
    var build = {
        Name: "Build Iron Rifle", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 4 }],
        Output: { Item: new IronRifle(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelBomb() {
    var build = {
        Name: "Build Steel Bomb", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }],
        Output: { Item: new SteelBomb(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelPistol() {
    var build = {
        Name: "Build Steel Pistol", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }],
        Output: { Item: new SteelPistol(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelPistolOffHand() {
    var build = {
        Name: "Build Steel Pistol (OffHand)", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }],
        Output: { Item: new SteelPistolOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return build;
}
export function buildSteelRifle() {
    var build = {
        Name: "Build Steel Rifle", Skill: "Engineering", Tool: new Tools(), Verb: "Build", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 6 }],
        Output: { Item: new SteelRifle(), Quantity: 1 },
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
        Name: "Burn Oak Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Burn", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new Ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function burnWillowLogs() {
    var burn = {
        Name: "Burn Willow Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Burn", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new Ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function burnWoodLogs() {
    var burn = {
        Name: "Burn Wood Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Burn", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new Ashes(), Quantity: 1 },
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromOakLogs() {
    var burn = {
        Name: "Make Charcoal from Oak Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Make", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new Charcoal(), Quantity: 2 },
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromWillowLogs() {
    var burn = {
        Name: "Make Charcoal from Willow Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Burn", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new Charcoal(), Quantity: 3 }
        ,
        FailureOutput: null
    }
    return burn;
}
export function makeCharcoalFromWoodLogs() {
    var burn = {
        Name: "Make Charcoal from Wood Logs", Skill: "Firemaking", Tool: new TinderBox(), Verb: "Make", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new Charcoal(), Quantity: 1 },
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
        Input: [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }],
        Output: { Item: new BronzeCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleBronzeCrossBow2H() {
    var assemble = {
        Name: "Assemble Bronze CrossBow 2H", Skill: "Fletching", Tool: null, Verb: "Assembled", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }],
        Output: { Item: new BronzeCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleBronzeCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Bronze CrossBow (OffHand)", Skill: "Fletching", Tool: null, Verb: "Assembled", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }],
        Output: { Item: new BronzeCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBow1H() {
    var assemble = {
        Name: "Assemble Iron CrossBow 1H", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }],
        Output: { Item: new IronCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBow2H() {
    var assemble = {
        Name: "Assemble Iron CrossBow 2H", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }],
        Output: { Item: new IronCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleIronCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Iron CrossBow OffHand", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }],
        Output: { Item: new IronCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBow1H() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }],
        Output: { Item: new SteelCrossBow1H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBow2H() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }],
        Output: { Item: new SteelCrossBow2H(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function assembleSteelCrossBowOffHand() {
    var assemble = {
        Name: "Assemble Steel CrossBow 1H", Skill: "Fletching", Tool: new Tools(), Verb: "Assembled", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }],
        Output: { Item: new SteelCrossBowOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return assemble;
}
export function fletchOakLongBow() {
    var fletch = {
        Name: "Fletch Oak Long Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new OakLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchOakShortBow() {
    var fletch = {
        Name: "Fletch Oak Short Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new OakShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchOakStock() {
    var fletch = {
        Name: "Fletch Oak Stock", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 5, Exp: 100,
        Input: [{ Item: new OakLogs(), Quantity: 1 }],
        Output: { Item: new OakStock(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowLongBow() {
    var fletch = {
        Name: "Fletch Willow Long Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new WillowLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowShortBow() {
    var fletch = {
        Name: "Fletch Willow Short Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new WillowShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWillowStock() {
    var fletch = {
        Name: "Fletch Willow Stock", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 10, Exp: 400,
        Input: [{ Item: new WillowLogs(), Quantity: 1 }],
        Output: { Item: new WillowStock(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodLongBow() {
    var fletch = {
        Name: "Fletch Wood Long Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new WoodLongBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodShortBow() {
    var fletch = {
        Name: "Fletch Wood Short Bow", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new WoodShortBow(), Quantity: 1 },
        FailureOutput: null
    }
    return fletch;
}
export function fletchWoodStock() {
    var fletch = {
        Name: "Fletch Wood Stock", Skill: "Fletching", Tool: new Knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new WoodLogs(), Quantity: 1 }],
        Output: { Item: new WoodStock(), Quantity: 1 },
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
        Input: [{ Item: new CopperOre(), Quantity: 1 }, { Item: new TinOre(), Quantity: 1 }],
        Output: { Item: new BronzeBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
export function smeltIronBar() {
    var smelt = {
        Name: "Smelt Iron Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronOre(), Quantity: 2 }],
        Output: { Item: new IronBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
export function smeltSteelBar() {
    var smelt = {
        Name: "Smelt Steel Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new IronOre(), Quantity: 1 }, { Item: new CoalOre(), Quantity: 2 }],
        Output: { Item: new SteelBar(), Quantity: 1 },
        FailureOutput: null
    }
    return smelt;
}
//smithing
//new Bronze
//armor
export function smithBronzeBoots() {
    var smith = {
        Name: "Smith Bronze Boots", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeBoots(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeGauntlets() {
    var smith = {
        Name: "Smith Bronze Sword", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeHelmet() {
    var smith = {
        Name: "Smith Bronze Helmet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 3, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeLegs() {
    var smith = {
        Name: "Smith Bronze Legs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 4, Exp: 75,
        Input: [{ Item: new BronzeBar(), Quantity: 3 }],
        Output: { Item: new BronzeLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeShield() {
    var smith = {
        Name: "Smith Bronze Shield", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 4, Exp: 75,
        Input: [{ Item: new BronzeBar(), Quantity: 3 }],
        Output: { Item: new BronzeShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeTorso() {
    var smith = {
        Name: "Smith Bronze Armor", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 125,
        Input: [{ Item: new BronzeBar(), Quantity: 5 }],
        Output: { Item: new BronzeTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithBronzeBarrel() {
    var smith = {
        Name: "Smith Bronze Barrel", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeLimbs() {
    var smith = {
        Name: "Smith Bronze Limbs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//new Tools
export function smithBronzeHatchet() {
    var smith = {
        Name: "Smith Bronze Hatchet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzePickaxe() {
    var smith = {
        Name: "Smith Bronze Pickaxe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzePickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeTools() {
    var smith = {
        Name: "Smith Bronze Tools", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapon
export function smithBronzeAxe() {
    var smith = {
        Name: "Smith Bronze Axe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeAxe2H() {
    var smith = {
        Name: "Smith Bronze Axe 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: new BronzeBar(), Quantity: 4 }],
        Output: { Item: new BronzeAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeDagger() {
    var smith = {
        Name: "Smith Bronze Dagger", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeDaggerOffHand() {
    var smith = {
        Name: "Smith Bronze Dagger (OffHand)", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new BronzeBar(), Quantity: 1 }],
        Output: { Item: new BronzeDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeMace() {
    var smith = {
        Name: "Smith Bronze Mace", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeSword() {
    var smith = {
        Name: "Smith Bronze Sword", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeSword2H() {
    var smith = {
        Name: "Smith Bronze Sword 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: new BronzeBar(), Quantity: 4 }],
        Output: { Item: new BronzeSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeWarHammer() {
    var smith = {
        Name: "Smith Bronze WarHammer", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 2, Exp: 50,
        Input: [{ Item: new BronzeBar(), Quantity: 2 }],
        Output: { Item: new BronzeWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithBronzeWarHammer2H() {
    var smith = {
        Name: "Smith Bronze WarHammer 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 4, Exp: 100,
        Input: [{ Item: new BronzeBar(), Quantity: 4 }],
        Output: { Item: new BronzeWarHammer2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//new Iron
//armor
export function smithIronBoots() {
    var smith = {
        Name: "Smith Iron Boots", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronBoots(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronGauntlets() {
    var smith = {
        Name: "Smith Iron Gauntlets", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronHelmet() {
    var smith = {
        Name: "Smith Iron Helmet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 7, Exp: 100,
        Input: [{ Item: new IronBar(), Quantity: 2 }],
        Output: { Item: new IronHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronLegs() {
    var smith = {
        Name: "Smith Iron Legs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 8, Exp: 150,
        Input: [{ Item: new IronBar(), Quantity: 3 }],
        Output: { Item: new IronLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronShield() {
    var smith = {
        Name: "Smith Iron Shield", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 8, Exp: 150,
        Input: [{ Item: new IronBar(), Quantity: 3 }],
        Output: { Item: new IronShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronTorso() {
    var smith = {
        Name: "Smith Iron Armor", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 250,
        Input: [{ Item: new IronBar(), Quantity: 5 }],
        Output: { Item: new IronTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithIronBarrel() {
    var smith = {
        Name: "Smith Iron Barrel", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronLimbs() {
    var smith = {
        Name: "Smith Iron Limbs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//tool
export function smithIronHatchet() {
    var smith = {
        Name: "Smith Iron Hatchet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronPickaxe() {
    var smith = {
        Name: "Smith Iron Pickaxe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronPickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronTools() {
    var smith = {
        Name: "Smith Iron Tools", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapon
export function smithIronAxe() {
    var smith = {
        Name: "Smith Iron Axe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 2 }],
        Output: { Item: new IronAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronAxe2H() {
    var smith = {
        Name: "Smith Iron Axe 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: new IronBar(), Quantity: 4 }],
        Output: { Item: new IronAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronDagger() {
    var smith = {
        Name: "Smith Iron Dagger", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronDaggerOffHand() {
    var smith = {
        Name: "Smith Iron Dagger (OffHand)", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 5, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 1 }],
        Output: { Item: new IronDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronMace() {
    var smith = {
        Name: "Smith Iron Mace", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 2 }],
        Output: { Item: new IronMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronSword() {
    var smith = {
        Name: "Smith Iron Sword", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 2 }],
        Output: { Item: new IronSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronSword2H() {
    var smith = {
        Name: "Smith Iron Sword 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: new IronBar(), Quantity: 4 }],
        Output: { Item: new IronSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
export function smithIronWarHammer() {
    var smith = {
        Name: "Smith Iron WarHammer", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 6, Exp: 50,
        Input: [{ Item: new IronBar(), Quantity: 2 }],
        Output: { Item: new IronWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithIronWarHammer2H() {
    var smith = {
        Name: "Smith Iron WarHammer 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 9, Exp: 100,
        Input: [{ Item: new IronBar(), Quantity: 4 }],
        Output: { Item: new IronWarHammer2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith
}
//new Steel
//armor
export function smithSteelBoots() {
    var smith = {
        Name: "Smith Steel Boots", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelBoots(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelGauntlets() {
    var smith = {
        Name: "Smith Steel Gauntlets", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelGauntlets(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelHelmet() {
    var smith = {
        Name: "Smith Steel Helmet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 12, Exp: 200,
        Input: [{ Item: new SteelBar(), Quantity: 2 }],
        Output: { Item: new SteelHelmet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelLegs() {
    var smith = {
        Name: "Smith Steel Legs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 13, Exp: 300,
        Input: [{ Item: new SteelBar(), Quantity: 3 }],
        Output: { Item: new SteelLegs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelShield() {
    var smith = {
        Name: "Smith Steel Shield", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 13, Exp: 300,
        Input: [{ Item: new SteelBar(), Quantity: 3 }],
        Output: { Item: new SteelShield(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelTorso() {
    var smith = {
        Name: "Smith Steel Armor", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 15, Exp: 500,
        Input: [{ Item: new SteelBar(), Quantity: 5 }],
        Output: { Item: new SteelTorso(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//processed
export function smithSteelBarrel() {
    var smith = {
        Name: "Smith Steel Barrel", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelBarrel(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelLimbs() {
    var smith = {
        Name: "Smith Steel Limbs", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelLimbs(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//new Tools
export function smithSteelHatchet() {
    var smith = {
        Name: "Smith Steel Hatchet", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelHatchet(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelPickaxe() {
    var smith = {
        Name: "Smith Steel Pickaxe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelPickAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelTools() {
    var smith = {
        Name: "Smith Steel Tools", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelTools(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
//weapons
export function smithSteelAxe() {
    var smith = {
        Name: "Smith Steel Axe", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 2 }],
        Output: { Item: new SteelAxe(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelAxe2H() {
    var smith = {
        Name: "Smith Steel Axe 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: new SteelBar(), Quantity: 4 }],
        Output: { Item: new SteelAxe2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelDagger() {
    var smith = {
        Name: "Smith Steel Dagger", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelDagger(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelDaggerOffHand() {
    var smith = {
        Name: "Smith Steel Dagger (OffHand)", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 10, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 1 }],
        Output: { Item: new SteelDaggerOffHand(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelMace() {
    var smith = {
        Name: "Smith Steel Mace", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 2 }],
        Output: { Item: new SteelMace(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelSword() {
    var smith = {
        Name: "Smith Steel Sword", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 2 }],
        Output: { Item: new SteelSword(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelSword2H() {
    var smith = {
        Name: "Smith Steel Sword 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: new SteelBar(), Quantity: 4 }],
        Output: { Item: new SteelSword2H(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelWarHammer() {
    var smith = {
        Name: "Smith Steel WarHammer", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 11, Exp: 100,
        Input: [{ Item: new SteelBar(), Quantity: 2 }],
        Output: { Item: new SteelWarHammer(), Quantity: 1 },
        FailureOutput: null
    }
    return smith;
}
export function smithSteelWarHammer2H() {
    var smith = {
        Name: "Smith Steel WarHammer 2H", Skill: "Smithing", Tool: new Tools(), Verb: "Smith", LevelRequirement: 14, Exp: 400,
        Input: [{ Item: new SteelBar(), Quantity: 4 }],
        Output: { Item: new SteelWarHammer2H(), Quantity: 1 },
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
        Name: "Harvest Wheat", Skill: "Farming", Tool: new Sickle(), Verb: "Harvest", LevelRequirement: 1, Exp: 5,
        Input: [],
        Output: { Item: new Wheat(), Quantity: 1 },
        FailureOutput: null
    }
    return harvest;
}
export function milkCow() {
    var milkCow = {
        Name: "Milk Cow", Skill: "Farming", Tool: null, Verb: "Milk", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new Bucket(), Quantity: 1 }],
        Output: { Item: new Milk(), Quantity: 1 },
        FailureOutput: null
    }
    return milkCow
}
export function shearSheep() {
    var shearSheep = {
        Name: "Shear Sheap", Skill: "Farming", Tool: new Shears(), Verb: "Shear", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: new WoolCloth(), Quantity: 1 },
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
        Name: "Fish Fish", Skill: "Fishing", Tool: new FishingRod(), Verb: "Fish", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: new RawFish(), Quantity: 1 },
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
        Output: { Item: new BlackFeather(), Quantity: 1 },
        FailureOutput: null
    }
    return hunt
}
export function huntRabbit() {
    var hunt = {
        Name: "Hunt Rabbit", Skill: "Hunting", Tool: null, Verb: "Hunt", LevelRequirement: 1, Exp: 25, Input: [],
        Output: { Item: new RawRabbitMeat(), Quantity: 1 },
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
        Name: "Mine Coal", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 10, Exp: 100,
        Input: [],
        Output: { Item: new CoalOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineCopperOre() {
    var mine = {
        Name: "Mine Copper Ore", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: new CopperOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineIronOre() {
    var mine = {
        Name: "Mine Iron Ore", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: new IronOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineSaltpeter() {
    var mine = {
        Name: "Mine Saltpeter", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: new IronOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
export function mineSulphur() {
    var mine = {
        Name: "Mine Sulpfur", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50,
        Input: [],
        Output: { Item: new IronOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;

}
export function mineTinOre() {
    var mine = {
        Name: "Mine Tin Ore", Skill: "Mining", Tool: new PickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: new TinOre(), Quantity: 1 },
        FailureOutput: null
    }
    return mine;
}
//new Woodcutting
export function woodcuttingRecipes() {
    var wood = [cutOakWood(), cutWillowWood(), cutWood()]
    return wood;
}
export function cutOakWood() {
    var cut = {
        Name: "Cut Oak Wood", Skill: "Woodcutting", Tool: new Hatchet(), Verb: "Chop", LevelRequirement: 5, Exp: 100,
        Input: [],
        Output: { Item: new OakLogs(), Quantity: 1 },
        FailureOutput: null
    }
    return cut;
}
export function cutWillowWood() {
    var cut = {
        Name: "Cut Willow Wood", Skill: "Woodcutting", Tool: new Hatchet(), Verb: "Chop", LevelRequirement: 10, Exp: 400,
        Input: [],
        Output: { Item: new WillowLogs(), Quantity: 1 },
        FailureOutput: null
    }
    return cut;
}
export function cutWood() {
    var cut = {
        Name: "Cut Wood", Skill: "Woodcutting", Tool: new Hatchet(), Verb: "Chop", LevelRequirement: 1, Exp: 25,
        Input: [],
        Output: { Item: new WoodLogs(), Quantity: 1 },
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
        Input: [{ Item: new Bones(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
export function buryEctoplasm() {
    var cut = {
        Name: "Consecrate Ectoplasm", Skill: "Restoration", Tool: null, Verb: "Consecrate", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new Ectoplasm(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
export function burySkull() {
    var cut = {
        Name: "Consecrate Skull", Skill: "Restoration", Tool: null, Verb: "Consecrate", LevelRequirement: 1, Exp: 25,
        Input: [{ Item: new Skull(), Quantity: 1 }],
        Output: null,
        FailureOutput: null
    }
    return cut;
}
//utility