import { daleTown} from "./Locations"

export function worldMap(hero)
{
    var worldMap = {Name: "World", Locations: [daleTown(hero)]}
    return worldMap
}
