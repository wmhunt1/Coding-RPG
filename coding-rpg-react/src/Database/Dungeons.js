import { rat } from "./Characters"
import { testDialogue } from "./Dialogues"
import { cheese } from "./Items"
export function testDungeon(hero)
{
    var testDungeon = {Name: "Test Dungeon", Dialogue:testDialogue(hero) ,Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}
export function testDungeon2(hero)
{
    var testDungeon = {Name: "Test Dungeon2",Dialogue:null, Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}