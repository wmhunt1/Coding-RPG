import { dreamingWorkerInnDialogue, innDialogue, testDialogue } from "./DialoguesDB";
import { ratCellar } from "./DungeonsDB";
import { ale, antidote, bread, bronzeDagger, bronzeDaggerOffHand, bronzeSword, club, dagger, fishingRod, hatchet, healingPotion, ironDagger, ironDaggerOffHand, ironSword, knife, magicMissileScroll, manaPotion, pickAxe, staminaPotion, stew, tinderBox } from "./ItemsDB"
import { alchemyNode, cookNode, smithNode } from "./SkillNodesDB";

//alchemists
export function alchemyShop(hero) {
    var alchemyShop = { Name: "Alchemy Shop", Dialogue: null, Dungeon: null, Node: alchemyNode(hero), Inventory: [antidote(), healingPotion(), manaPotion(), staminaPotion()] }
    return alchemyShop
}
//general store
export function generalShop(hero) {
    var generalShop = { Name: "General Store", Dialogue: null, Dungeon: null, Node: null, Inventory: [fishingRod(), knife(), hatchet(), pickAxe(), tinderBox()] };
    return generalShop
}
//inns
export function dreamingWorkerInn(hero) {
    var inn = { Name: "Dreaming Worker Inn", Dialogue: dreamingWorkerInnDialogue(hero), Dungeon: ratCellar(hero), Node: cookNode(hero), Inventory: [ale(), bread(), stew()] };
    return inn;
}
export function innShop(hero) {
    var inn = { Name: "Inn", Dialogue: innDialogue(hero), Dungeon: null, Node: cookNode(hero), Inventory: [ale(), bread(), stew()] };
    return inn;
}
//magic shop
export function magicShop(hero) {
    var magicShop = { Name: "Magic Shop", Dialogue: null, Dungeon: null, Node: null, Inventory: [magicMissileScroll()] }
    return magicShop
}
//smiths
export function forgeHeartSmithy(hero) {
    var forgeHeartSmithy = { Name: "Forgeheart Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Inventory: [bronzeDagger(), bronzeDaggerOffHand(), bronzeSword(), hatchet(), ironDagger(), ironDaggerOffHand(), ironSword(), pickAxe()] };
    return forgeHeartSmithy
}
export function smithShop(hero) {
    var smithShop = { Name: "Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Inventory: [bronzeDagger()] };
    return smithShop
}
//hybrid
//alchemist and magic
export function witchHutShop(hero) {
    var witchHutShop = { Name: "Witch's Hut", Dialogue: null, Dungeon: null, Node: alchemyNode(hero), Inventory: [antidote(), healingPotion(), manaPotion(), staminaPotion(), magicMissileScroll()] }
    return witchHutShop
}
//tests
export function testShop(hero) {
    var testShop = { Name: "Test Shop", Dialogue: testDialogue(hero), Dungeon: null, Node: null, Inventory: [club(), dagger(), healingPotion()] };
    return testShop
}