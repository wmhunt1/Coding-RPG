import { startingLocation, testLocation2 } from "./Locations"

export function worldMap()
{
    var worldMap = {Name: "World", Locations: [startingLocation(), testLocation2()]}
    return worldMap
}