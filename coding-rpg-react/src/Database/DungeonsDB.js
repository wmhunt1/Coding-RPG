import { rat } from "./CharactersDB"
import { testDungeonDialogue} from "./DialoguesDB"
import { cheese } from "./ItemsDB"

//tests
export function testDungeon(hero)
{
    var testDungeon = {Name: "Test Dungeon", Dialogue:testDungeonDialogue(hero, 0, 0, 0), haveDungeonDialogue(hero, encounters, defeated, boss){this.Dialogue = testDungeonDialogue(hero, encounters, defeated, boss)} ,Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}
export function testDungeon2(hero)
{
    var testDungeon = {Name: "Test Dungeon2",Dialogue:null, haveDungeonDialogue(){} ,Encounters :[[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese()}
    return testDungeon
}