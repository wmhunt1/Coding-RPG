import { dreamingWorkerInnDialogue, forgeheartSmithDialogue, innDialogue } from "./DialoguesDB";
import { ratCellar } from "./DungeonsDB";
import { ale, allBronze, allIron, allPotions, allSpellScrolls, bread, bronzeHatchet, bronzePickAxe, bucket, enchantmentTome, fishingRod, knife, needle, shears,sickle, stew, tinderBox } from "./ItemsDB"
import { daleTownReputation } from "./ReputationsDB";
import { cookNode, smithNode } from "./SkillNodesDB";

//alchemists
export function alchemyShop(hero) {
    var alchemyShop = { Name: "Alchemy Shop", Dialogue: null, Dungeon: null, Node: null, Rep: null, Inventory: allPotions(), buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Potion") } }
    return alchemyShop
}
//general store
export function generalShop(hero) {
    var generalShop = { Name: "General Store", Dialogue: null, Dungeon: null, Node: null, Rep: null, Inventory: [bronzeHatchet(), bronzePickAxe(), bucket(), fishingRod(), knife(), needle(), shears(),sickle(), tinderBox()], buyFilter(hero) { return hero.Inventory.filter(item => item.Type !== "") } };
    return generalShop
}
export function joeTheTradersTradingPost(hero) {
    var generalShop = { Name: "Joe the Trader's Trading Post", Dialogue: null, Dungeon: null, Node: null, Rep: daleTownReputation(), Inventory: [bronzeHatchet(), bronzePickAxe(), bucket(), fishingRod(), knife(), needle(), shears(), tinderBox()], buyFilter(hero) { return hero.Inventory.filter(item => item.Type !== "") } };
    return generalShop
}
//inns
export function dreamingWorkerInn(hero) {
    var inn = innShop(hero)
    inn.Name = "Dreaming Worker Inn"
    inn.Dialogue = dreamingWorkerInnDialogue(hero);
    inn.Dungeon = ratCellar(hero);;
    inn.Rep = daleTownReputation()
    return inn;
}
export function innShop(hero) {
    var inn = { Name: "Inn", Dialogue: innDialogue(hero), Dungeon: null, Node: cookNode(hero), Rep: null, Inventory: [ale(), bread(), stew()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Food" || item.SubType === "Drink") } };
    return inn;
}
//magic shop
export function magicShop(hero) {
    var magicShop = { Name: "Magic Shop", Dialogue: null, Dungeon: null, Node: null, Inventory: [...allSpellScrolls(), enchantmentTome()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Scroll") } }
    return magicShop
}
//smiths
export function forgeHeartSmithy(hero) {
    var smith = smithShop(hero)
    smith.Name = "Forgeheart Smithy"
    smith.Dialogue = forgeheartSmithDialogue(hero)
    smith.Rep = daleTownReputation()
    return smith
}
export function smithShop(hero) {
    var smithShop = { Name: "Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Rep: null, Inventory: [...allBronze(), ...allIron()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Ore" || item.SubType === "Bar" || item.Type === "Equipable") } };
    return smithShop
}
//hybrid
//alchemist and magic
export function witchHutShop(hero) {
    var witchHutShop = { Name: "Witch's Hut", Dialogue: null, Dungeon: null, Node: null, Rep: daleTownReputation(), Inventory: [...allPotions(), ...allSpellScrolls()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Scroll" || item.SubType === "Potion") } }
    return witchHutShop
}