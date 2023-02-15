import { banditHideout, bridge, daleTown, dwarvenMine, farm, forest, giantCave, littleRootFarm, lumbermill, mountains, river, road, spiderCave, tenguCamp, witchHut } from "./LocationsDB"

export function startingAdjacentLocations() {
    var start = ["Bridge", "River", "Farm", "Farm", "Road", "LittleRoot Farm", "River", "River"]
    return start;
}
export function worldMap(hero) {
    var worldMap = {
        Name: "World", Locations: [
            road(hero, -1, 6),
            road(hero, -1, 5), forest(hero, 0, 5), river(hero, 2, 5), mountains(hero, 4, 5), mountains(hero, 5, 5),
            road(hero, -1, 4), forest(hero, 0, 4), lumbermill(hero, 1, 4), bridge(hero, 2, 4), giantCave(hero, 4, 4), mountains(hero, 5, 4),
            road(hero, 0, 3), forest(hero, 1, 3), river(hero, 2, 3), mountains(hero, 4, 3), mountains(hero, 5, 3),
            forest(hero, -1, 2), road(hero, 0, 2), witchHut(hero, 1, 2), river(hero, 2, 2), forest(hero, 3, 2), mountains(hero, 4, 2), mountains(hero, 5, 2),
            river(hero, -1, 1), bridge(hero, 0, 1), river(hero, 1, 1), river(hero, 2, 1), forest(hero, 3, 1), banditHideout(hero, 4, 1), mountains(hero, 5, 1),
            forest(hero, -4, 0), forest(hero, -3, 0), river(hero, -2, 0), river(hero, -1, 0), daleTown(hero, 0, 0), road(hero, 1, 0), road(hero, 2, 0), road(hero, 3, 0), road(hero, 4, 0), road(hero, 5, 0),
            forest(hero, -4, -1), littleRootFarm(hero, -1, -1), road(hero, 0, -1), farm(hero, 1, -1), forest(hero, 2, -1), forest(hero, 3, -1), mountains(hero, 4, -1), mountains(hero, 5, -1),
            forest(hero, -4, -2), tenguCamp(hero, -3, -1), forest(hero, -3, -2), river(hero, -2, -2), road(hero, 1, -2), river(hero, -2, -1), road(hero, 0, -2), farm(hero, -1, -2), forest(hero, 2, -2), forest(hero, 3, -2), mountains(hero, 4, -2),
            forest(hero, -4, -3), spiderCave(hero, -3, -3), river(hero, -2, -3), road(hero, 1, -3), road(hero, 2, - 3), dwarvenMine(hero, 3, -3), mountains(hero, 4, -3),
            river(hero, -2, -4), road(hero, 1, -4), mountains(hero, 2, -4), mountains(hero, 3, -4), mountains(hero, 4, -4),
            river(hero, -2, -5), road(hero, 1, -5),
        ]
    }
    return worldMap
}
