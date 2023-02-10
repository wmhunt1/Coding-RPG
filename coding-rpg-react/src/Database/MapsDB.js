import { daleTown} from "./LocationsDB"

export function worldMap(hero)
{
    var worldMap = {Name: "World", Locations: [daleTown(hero)]}
    return worldMap
}
//map sketch
//|- (0,0) -|
//|daleTown |
//|---------|
//
