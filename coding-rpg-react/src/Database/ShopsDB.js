import { dreamingWorkerInnDialogue, innDialogue, testDialogue } from "./DialoguesDB";
import { ale, antidote, bread, bronzeDagger, club, dagger, healingPotion, magicMissileScroll, manaPotion, staminaPotion, stew } from "./ItemsDB"
import { cookNode, smithNode } from "./SkillNodesDB";

//alchemists
export function alchemyShop() {
    var alchemyShop = { Name: "Alchemy Shop", Dialogue: null, Dungeon: null, Node: null, Inventory: [antidote(), healingPotion(), manaPotion(), staminaPotion()] }
    return alchemyShop
}
//inns
export function dreamingWorkerInn(hero) {
    var inn = { Name: "Dreaming Worker Inn", Dialogue: dreamingWorkerInnDialogue(hero), Dungeon: null, Node: cookNode(hero), Inventory: [ale(), bread(), stew()] };
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
    var forgeHeartSmithy = { Name: "Forgeheart Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Inventory: [bronzeDagger()] };
    return forgeHeartSmithy
}
export function smithShop(hero) {
    var smithShop = { Name: "Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Inventory: [bronzeDagger()] };
    return smithShop
}
//tests
export function testShop(hero) {
    var testShop = { Name: "Test Shop", Dialogue: testDialogue(hero), Dungeon: null, Node: null, Inventory: [club(), dagger(), healingPotion()] };
    return testShop
}