import { giantRat, rat } from "./CharactersDB";

export function threeRatsEncounter()
{
    var ratEncounter = [rat(), rat(), rat()]
    return ratEncounter
}
export function threeRatsAndGiantRatEncounter()
{
    var ratEncounter = [giantRat(), rat(), rat(), rat()]
    return ratEncounter
}
//tests
export function testEncounter()
{
    var testEncounter = [rat(), rat(), rat()]
    return testEncounter;
}