import { testDialogue } from "./Dialogues"
import { testDungeon2 } from "./Dungeons"
import { testEncounter } from "./Encounters"
import { testShop } from "./Shops"


//locations
export function startingLocation()
{
    var startingLocation = {LocationName: "Starting Location", XCoord: 0, YCoord: 0, SubLocations:[]}
    return startingLocation
}
export function testLocation2()
{
    var testLocation2 = {LocationName: "Location 2", XCoord: 1, YCoord: 0, SubLocations:[testCombatEnter(), testDialogueEnter(), testDungeonEnter(), testShopEnter()]}
    return testLocation2
}
//sublocations
export function testCombatEnter()
{
    var test = {Name: "TestCombat", enterLocation(hero){var content = {active: "Combat", combat: testEncounter(), dialogue: null, dungeon: null, shop: null}; return content}}
    return test
}
export function testDialogueEnter()
{
    var test = {Name: "TestDialogue", enterLocation(hero){var content = {active: "Dialogue", combat: null, dialogue: testDialogue(hero), dungeon: null, shop: null}; return content}}
    return test
}
export function testDungeonEnter()
{
    var test = {Name: "TestDungeon", enterLocation(hero){var content = {active: "Dungeon", combat: null, dialogue: null, dungeon: testDungeon2(), shop: null}; return content}}
    return test
}
export function testShopEnter()
{
    var test = {Name: "TestShop", enterLocation(hero){var content = {active: "Shop", combat: null, dialogue: null, dungeon: null, shop: testShop()}; return content}}
    return test
}