import { dreamingWorkerInnDialogue, forgeheartSmithDialogue, innDialogue, joeTheTradersTradingPostDialogue, priestDialogue } from "./DialoguesDB";
import { RatCellar } from "./DungeonsDB";
import { allBronze, allHealingScrolls, allIron, allPotions, allSpellScrolls, EnchantmentTome, generalTools, innFood, MortarAndPestle, PotionBottle, } from "./ItemsDB"
import { DaleTownReputation } from "./ReputationsDB";
import { CookNode, RestorationNode, SmithNode } from "./SkillNodesDB";

export class Shop {
    Hero; Name; Dialogue; Dungeon; Node; Rep; Inventory; buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Potion") }
    constructor(hero, name, dialogue, dungeon, node, rep, inventory) {
        this.Hero = hero; this.Name = name; this.Dialogue = dialogue; this.Dungeon = dungeon; this.Node = node; this.Rep = rep; this.Inventory = inventory;
    }
}
//alchemists
export class AlchemyShop extends Shop {
    constructor(hero, name = "Alchemy Shop", dialogue = null, dungeon = null, node = null, rep = null, inventory = [...allPotions(), new MortarAndPestle(), new PotionBottle()]) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
    buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Potion") }
}
export class WitchHutShop extends AlchemyShop {
    constructor(name = "Witch's Hut", dialogue = null, dungeon = null, node = null, rep = new DaleTownReputation(), inventory = allPotions()) {
        super(name, dialogue, dungeon, node, rep, inventory)
    }
}
//general store
export class GeneralShop extends Shop {
    constructor(hero, name = "General Store", dialogue = null, dungeon = null, node = null, rep = null, inventory = generalTools()) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
    buyFilter(hero) { return hero.Inventory.filter(item => item.SubType !== "") }
}
export class JoeTheTradersTradingPost extends GeneralShop {
    constructor(hero, name = "Joe the Trader's", dialogue = joeTheTradersTradingPostDialogue(hero), dungeon = null, node = null, rep = new DaleTownReputation(), inventory) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
}
//inn
export class InnShop extends Shop {
    constructor(hero, name = "Inn", dialogue = innDialogue(hero), dungeon = null, node = null, rep = null, inventory = innFood()) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
    buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Food" || item.SubType === "Drink") }
}
export class DreamingWorkerInn extends GeneralShop {
    constructor(hero, name = "Dreaming Worker Inn", dialogue = dreamingWorkerInnDialogue(hero), dungeon = new RatCellar(hero), node = new CookNode(hero), rep = new DaleTownReputation(), inventory) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
}
//magic shop
export class MagicShop extends Shop {
    constructor(hero, name = "Magic Shop", dialogue = null, dungeon = null, node = null, rep = null, inventory = [...allSpellScrolls(), new EnchantmentTome()]) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
    buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Scroll") }
}
//chapels
export class ChapelShop extends MagicShop {
    constructor(hero, name = "Chapel", dialogue = null, dungeon = null, node = new RestorationNode(hero), rep = null, inventory = [...allHealingScrolls()]) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
}
export class DaleChapelShop extends ChapelShop {
    constructor(hero, name = "Dale Chapel", dialogue = priestDialogue(hero), dungeon = null, node, rep = new DaleTownReputation(), inventory) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }

}
export class WizardTowerShop extends MagicShop {
    constructor(hero, name = "Wizard Tower Shop", dialogue = priestDialogue(hero), dungeon = null, node = null, rep = new DaleTownReputation(), inventory) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
}
//smiths
export class SmithShop extends Shop {
    constructor(hero, name = "Smithy", dialogue = null, dungeon = null, node = new SmithNode(hero), rep = null, inventory = [...allBronze(), ...allIron()]) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
    buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Ore" || item.SubType === "Bar" || item.Type === "Equipable") }
}
export class ForgeHeartSmithy extends SmithShop {
    constructor(hero, name = "Forgeheart Smithy", dialogue = forgeheartSmithDialogue(hero), dungeon = null, node, rep = new DaleTownReputation(), inventory) {
        super(hero, name, dialogue, dungeon, node, rep, inventory)
    }
}
