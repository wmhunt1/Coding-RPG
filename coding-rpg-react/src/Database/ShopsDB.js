import { dreamingWorkerInnDialogue, innDialogue, testDialogue } from "./DialoguesDB";
import { ratCellar } from "./DungeonsDB";
import { ale, antidote, bread, bronzeDagger, bronzeDaggerOffHand, bronzeSword, club, dagger, fishingRod, hatchet, healingPotion, ironDagger, ironDaggerOffHand, ironSword, knife, magicMissileScroll, manaPotion, pickAxe, staminaPotion, stew, tinderBox } from "./ItemsDB"
import { alchemyNode, cookNode, smithNode } from "./SkillNodesDB";

//alchemists
export function alchemyShop(hero) {
    var alchemyShop = { Name: "Alchemy Shop", Dialogue: null, Dungeon: null, Node: null, Inventory: [antidote(), healingPotion(), manaPotion(), staminaPotion()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Potion") } }
    return alchemyShop
}
//general store
export function generalShop(hero) {
    var generalShop = { Name: "General Store", Dialogue: null, Dungeon: null, Node: null, Inventory: [fishingRod(), knife(), hatchet(), pickAxe(), tinderBox()], buyFilter(hero) { return hero.Inventory.filter(item => item.Type !== "") } };
    return generalShop
}
//inns
export function dreamingWorkerInn(hero) {
    var inn = innShop(hero)
    inn.Name = "Dreaming Worker Inn"
    inn.Dialogue = dreamingWorkerInnDialogue(hero);
    inn.Dungeon = ratCellar(hero);;
    return inn;
}
export function innShop(hero) {
    var inn = { Name: "Inn", Dialogue: innDialogue(hero), Dungeon: null, Node: cookNode(hero), Inventory: [ale(), bread(), stew()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Food" || item.SubType === "Drink") } };
    return inn;
}
//magic shop
export function magicShop(hero) {
    var magicShop = { Name: "Magic Shop", Dialogue: null, Dungeon: null, Node: null, Inventory: [magicMissileScroll()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Scroll") } }
    return magicShop
}
//smiths
export function forgeHeartSmithy(hero) {
    var smith = smithShop(hero)
    smith.Name = "Forgeheart Smithy"
    smith.Dialogue = null;
    smith.Inventory = [bronzeDagger(), bronzeDaggerOffHand(), bronzeSword(), hatchet(), ironDagger(), ironDaggerOffHand(), ironSword(), pickAxe()]
    return smith
}
export function smithShop(hero) {
    var smithShop = { Name: "Smithy", Dialogue: null, Dungeon: null, Node: smithNode(hero), Inventory: [bronzeDagger()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Ore" || item.SubType === "Bar" || item.Type === "Equipable") } };
    return smithShop
}
//hybrid
//alchemist and magic
export function witchHutShop(hero) {
    var witchHutShop = { Name: "Witch's Hut", Dialogue: null, Dungeon: null, Node: null, Inventory: [antidote(), healingPotion(), manaPotion(), staminaPotion(), magicMissileScroll()], buyFilter(hero) { return hero.Inventory.filter(item => item.SubType === "Scroll" || item.SubType === "Potion") } }
    return witchHutShop
}
//tests
export function testShop(hero) {
    var testShop = { Name: "Test Shop", Dialogue: testDialogue(hero), Dungeon: null, Node: null, Inventory: [club(), dagger(), healingPotion()], buyFilter(hero) { return hero.Inventory.filter(item => item.Type !== "") } };
    return testShop
}