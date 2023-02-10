import { rat } from "./CharactersDB"
import { testDungeonDialogue} from "./DialoguesDB"
import { threeRatsAndGiantRatEncounter, threeRatsEncounter } from "./EncountersDB";
import { ale, cheese } from "./ItemsDB"

export function ratCellar(hero)
{
    var ratCellar = {Name: "Cellar", Dialogue: null, Encounters:[threeRatsEncounter(), threeRatsEncounter(), threeRatsEncounter()], Boss: threeRatsAndGiantRatEncounter(), GoldReward: 0, ItemReward: ale()}
    return ratCellar;
}
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