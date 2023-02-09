import { rat } from "./Characters"
import { cheese } from "./Items"
export function testDungeon()
{
    var testDungeon = {Name: "Test Dungeon", Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}
export function testDungeon2()
{
    var testDungeon = {Name: "Test Dungeon2", Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}