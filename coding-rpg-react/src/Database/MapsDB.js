import { banditHideout, batCave, bearCave, bridge, brokenBridge, daleTown, daleWizardTower, dwarvenMine, farm, forest, fortDale, giantCave, gnollDen, graveyard, hauntedManor, lake, littleRootFarm, lumbermill, mill, mountains, orcVillage, river, road, spiderCave, tenguCamp, whiteScalesLair, witchHut, wolfDen } from "./LocationsDB"

export function startingAdjacentLocations(hero) {
    var start = [road(hero, 0, 1), hauntedManor(hero, 1, 1), road(hero, 1, 0), graveyard(hero, 1, -1), road(hero, 0, -1), littleRootFarm(hero, -1, -1), road(hero, -1, 0), forest(hero, -1, 1), road(hero, 0, 2), road(hero, 2, 0), road(hero, 0, -2), bridge(hero, -2, 0)]
    return start;
}
export class Map {
    Hero; Name; Locations;
    constructor(hero, name, locations) {
        this.Hero = hero; this.Name = name; this.Locations = locations;
    }
}
export class WorldMap extends Map {
    constructor(hero, name = "World", locations = [
        //      -5                       -4                      -3                    -2                        -1                      0                      1                       2                              3                4                      5
        //10
        mountains(hero, -5, 10), mountains(hero, -4, 10), road(hero, -3, 10), mountains(hero, -2, 10), mountains(hero, -1, 10), mountains(hero, 0, 10), mountains(hero, 1, 10), mountains(hero, 2, 10), mountains(hero, 3, 10), mountains(hero, 4, 10), mountains(hero, 5, 10),
        //9
        mountains(hero, -5, 9), giantCave(hero, -4, 9), road(hero, -3, 9), orcVillage(hero, -2, 9), lake(hero, -1, 9), lake(hero, 0, 9), lake(hero, 1, 9), forest(hero, 2, 9), mountains(hero, 3, 9), mountains(hero, 4, 9), mountains(hero, 5, 9),
        //8
        mountains(hero, -5, 8), forest(hero, -4, 8), road(hero, -3, 8), forest(hero, -2, 8), lake(hero, -1, 8), fortDale(hero, 0, 8), lake(hero, 1, 8), gnollDen(hero, 2, 8), forest(hero, 3, 8), whiteScalesLair(hero, 4, 8), mountains(hero, 5, 8),
        //7
        mountains(hero, -5, 7), forest(hero, -4, 7), road(hero, -3, 7), forest(hero, -2, 7), lake(hero, -1, 7), brokenBridge(hero, 0, 7), lake(hero, 1, 7), forest(hero, 2, 7), forest(hero, 3, 7), farm(hero, 4, 7), mountains(hero, 5, 7),
        //6
        mountains(hero, -5, 6), forest(hero, -4, 6), road(hero, -3, 6), forest(hero, -2, 6), river(hero, -1, 6), road(hero, 0, 6), forest(hero, 1, 6), forest(hero, 2, 6), forest(hero, 3, 6), forest(hero, 4, 6), mountains(hero, 5, 6),
        //5
        mountains(hero, -5, 5), forest(hero, -4, 5), road(hero, -3, 5), river(hero, -2, 5), river(hero, -1, 5), road(hero, 0, 5), forest(hero, 1, 5), forest(hero, 2, 5), daleWizardTower(hero, 3, 5), forest(hero, 4, 5), mountains(hero, 5, 5),
        //4
        mountains(hero, -5, 4), forest(hero, -4, 4), road(hero, -3, 4), river(hero, -2, 4), forest(hero, -1, 4), road(hero, 0, 4), forest(hero, 1, 4), forest(hero, 2, 4), road(hero, 3, 4), forest(hero, 4, 4), mountains(hero, 5, 4),
        //3
        mountains(hero, -5, 3), forest(hero, -4, 3), lumbermill(hero, -3, 3), river(hero, -2, 3), forest(hero, -1, 3), road(hero, 0, 3), forest(hero, 1, 3), forest(hero, 2, 3), road(hero, 3, 3), forest(hero, 4, 3), mountains(hero, 5, 3),
        //2
        mountains(hero, -5, 2), forest(hero, -4, 2), road(hero, -3, 2), river(hero, -2, 2), witchHut(hero, -1, 2), road(hero, 0, 2), forest(hero, 1, 2), forest(hero, 2, 2), road(hero, 3, 2), forest(hero, 4, 2), mountains(hero, 5, 2),
        //1
        mountains(hero, -5, 1), forest(hero, -4, 1), road(hero, -3, 1), river(hero, -2, 1), forest(hero, -1, 1), road(hero, 0, 1), hauntedManor(hero, 1, 1), forest(hero, 2, 1), road(hero, 3, 1), forest(hero, 4, 1), mountains(hero, 5, 1),
        //0
        mountains(hero, -5, 0), forest(hero, -4, 0), road(hero, -3, 0), bridge(hero, -2, 0), road(hero, -1, 0), daleTown(hero, 0, 0), road(hero, 1, 0), road(hero, 2, 0), road(hero, 3, 0), road(hero, 4, 0), road(hero, 5, 0),
        //-1
        mountains(hero, -5, -1), forest(hero, -4, -1), tenguCamp(hero, -3, -1), river(hero, -2, -1), littleRootFarm(hero, -1, -1), road(hero, 0, -1), graveyard(hero, 1, -1), forest(hero, 2, -1), forest(hero, 3, -1), banditHideout(hero, 4, -1), mountains(hero, 5, -1),
        //-2
        mountains(hero, -5, -2), forest(hero, -4, -2), forest(hero, -3, -1), river(hero, -2, -2), mill(hero, -1, -2), road(hero, 0, -2), forest(hero, 1, -2), forest(hero, 2, -2), forest(hero, 3, -2), mountains(hero, 4, -2), mountains(hero, 5, -2),
        //-3
        mountains(hero, -5, -3), forest(hero, -4, -3), spiderCave(hero, -3, -2), river(hero, -2, -3), river(hero - 1, -3), road(hero, 0, -3), forest(hero, 1, -3), forest(hero, 2, -3), forest(hero, 3, -3), forest(hero, 4, -3), mountains(hero, 5, -3),
        //-4
        mountains(hero, -5, -4), forest(hero, -4, -4), forest(hero, -3, -3), forest(hero, -2, -4), river(hero, -1, -4), road(hero, 0, -4), forest(hero, 1, -4), forest(hero, 2, -4), forest(hero, 3, -4), forest(hero, 4, -4), mountains(hero, 5, -4),
        //-5
        mountains(hero, -5, -5), forest(hero, -4, -5), forest(hero, -3, -4), river(hero, -2, -5), river(hero, -1, -5), road(hero, 0, -5), forest(hero, 1, -5), forest(hero, 2, -5), bearCave(hero, 3, -5), forest(hero, 4, -5), mountains(hero, 5, -5),
        //-6
        mountains(hero, -5, -6), forest(hero, -4, -6), forest(hero, -3, -5), river(hero, -2, -6), farm(hero, -1, -6), road(hero, 0, -6), wolfDen(hero, 1, -6), forest(hero, 2, -6), forest(hero, 3, -6), forest(hero, 4, -6), mountains(hero, 5, -6),
        //-7
        mountains(hero, -5, -7), forest(hero, -4, -7), forest(hero, -3, -5), river(hero, -2, -7), river(hero, -1, -7), road(hero, 0, -7), forest(hero, 1, -7), forest(hero, 2, -6), forest(hero, 3, -7), forest(hero, 4, -7), mountains(hero, 5, -7),
        //-8
        mountains(hero, -5, -8), forest(hero, -4, -8), mountains(hero, -3, -8), dwarvenMine(hero, -2, -8), bridge(hero, -1, -8), road(hero, 0, -8), forest(hero, 1, -8), forest(hero, 2, -8), forest(hero, 3, -8), mountains(hero, 4, -8), mountains(hero, 5, -6),
        //-9
        mountains(hero, -5, -9), forest(hero, -4, -9), mountains(hero, -3, -9), mountains(hero, -2, -9), river(hero, -1, -9), road(hero, 0, -9), batCave(hero, 1, -9), forest(hero, 2, -9), mountains(hero, 3, -9), mountains(hero, 4, -9), mountains(hero, 5, -9),
        //-10
        mountains(hero, -5, -10), mountains(hero, -4, -10), mountains(hero, -3, -10), mountains(hero, -2, -10), river(hero, -1, -10), road(hero, 0, -10), mountains(hero, 1, -10), mountains(hero, 2, -10), mountains(hero, 3, -10), mountains(hero, 4, -10), mountains(hero, 5, -10)
    ]) {
        super(hero, name, locations)
    }
}



