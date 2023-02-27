import { BanditHideout, BatCave, BearCave, Bridge, DaleTown, DaleWizardTower, DwarvenMine, Farm, ForestTerrain, FortDale, GiantCave, GnollDen, Graveyard, HauntedManor, LakeTerrain, LittleRootFarm, DaleLumbermill, Mill, MountainTerrain, OrcVillage, RiverTerrain, RoadTerrain, SpiderCave, TenguCamp, WhiteScalesLair, WitchHut, WolfDen } from "./LocationsDB"

export function startingAdjacentLocations(hero) {
    var start = [new RoadTerrain(hero, 0, 1), new HauntedManor(hero, 1, 1), new RoadTerrain(hero, 1, 0), new Graveyard(hero, 1, -1), new RoadTerrain(hero, 0, -1), new LittleRootFarm(hero, -1, -1), new RoadTerrain(hero, -1, 0), new ForestTerrain(hero, -1, 1), new RoadTerrain(hero, 0, 2), new RoadTerrain(hero, 2, 0), new RoadTerrain(hero, 0, -2), new Bridge(hero, -2, 0)]
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
        new MountainTerrain(hero, -5, 10), new MountainTerrain(hero, -4, 10), new RoadTerrain(hero, -3, 10), new MountainTerrain(hero, -2, 10), new MountainTerrain(hero, -1, 10), new MountainTerrain(hero, 0, 10), new MountainTerrain(hero, 1, 10), new MountainTerrain(hero, 2, 10), new MountainTerrain(hero, 3, 10), new MountainTerrain(hero, 4, 10), new MountainTerrain(hero, 5, 10),
        //9
        new MountainTerrain(hero, -5, 9), new GiantCave(hero, -4, 9), new RoadTerrain(hero, -3, 9), new OrcVillage(hero, -2, 9), new LakeTerrain(hero, -1, 9), new LakeTerrain(hero, 0, 9), new LakeTerrain(hero, 1, 9), new ForestTerrain(hero, 2, 9), new MountainTerrain(hero, 3, 9), new MountainTerrain(hero, 4, 9), new MountainTerrain(hero, 5, 9),
        //8
        new MountainTerrain(hero, -5, 8), new ForestTerrain(hero, -4, 8), new RoadTerrain(hero, -3, 8), new ForestTerrain(hero, -2, 8), new LakeTerrain(hero, -1, 8), new FortDale(hero, 0, 8), new LakeTerrain(hero, 1, 8), new GnollDen(hero, 2, 8), new ForestTerrain(hero, 3, 8), new WhiteScalesLair(hero, 4, 8), new MountainTerrain(hero, 5, 8),
        //7
        new MountainTerrain(hero, -5, 7), new ForestTerrain(hero, -4, 7), new RoadTerrain(hero, -3, 7), new ForestTerrain(hero, -2, 7), new LakeTerrain(hero, -1, 7), new Bridge(hero, 0, 7), new LakeTerrain(hero, 1, 7), new ForestTerrain(hero, 2, 7), new ForestTerrain(hero, 3, 7), new Farm(hero, 4, 7), new MountainTerrain(hero, 5, 7),
        //6
        new MountainTerrain(hero, -5, 6), new ForestTerrain(hero, -4, 6), new RoadTerrain(hero, -3, 6), new ForestTerrain(hero, -2, 6), new RiverTerrain(hero, -1, 6), new RoadTerrain(hero, 0, 6), new ForestTerrain(hero, 1, 6), new ForestTerrain(hero, 2, 6), new ForestTerrain(hero, 3, 6), new ForestTerrain(hero, 4, 6), new MountainTerrain(hero, 5, 6),
        //5
        new MountainTerrain(hero, -5, 5), new ForestTerrain(hero, -4, 5), new RoadTerrain(hero, -3, 5), new RiverTerrain(hero, -2, 5), new RiverTerrain(hero, -1, 5), new RoadTerrain(hero, 0, 5), new ForestTerrain(hero, 1, 5), new ForestTerrain(hero, 2, 5), new DaleWizardTower(hero, 3, 5), new ForestTerrain(hero, 4, 5), new MountainTerrain(hero, 5, 5),
        //4
        new MountainTerrain(hero, -5, 4), new ForestTerrain(hero, -4, 4), new RoadTerrain(hero, -3, 4), new RiverTerrain(hero, -2, 4), new ForestTerrain(hero, -1, 4), new RoadTerrain(hero, 0, 4), new ForestTerrain(hero, 1, 4), new ForestTerrain(hero, 2, 4), new RoadTerrain(hero, 3, 4), new ForestTerrain(hero, 4, 4), new MountainTerrain(hero, 5, 4),
        //3
        new MountainTerrain(hero, -5, 3), new ForestTerrain(hero, -4, 3), new DaleLumbermill(hero, -3, 3), new RiverTerrain(hero, -2, 3), new ForestTerrain(hero, -1, 3), new RoadTerrain(hero, 0, 3), new ForestTerrain(hero, 1, 3), new ForestTerrain(hero, 2, 3), new RoadTerrain(hero, 3, 3), new ForestTerrain(hero, 4, 3), new MountainTerrain(hero, 5, 3),
        //2
        new MountainTerrain(hero, -5, 2), new ForestTerrain(hero, -4, 2), new RoadTerrain(hero, -3, 2), new RiverTerrain(hero, -2, 2), new WitchHut(hero, -1, 2), new RoadTerrain(hero, 0, 2), new ForestTerrain(hero, 1, 2), new ForestTerrain(hero, 2, 2), new RoadTerrain(hero, 3, 2), new ForestTerrain(hero, 4, 2), new MountainTerrain(hero, 5, 2),
        //1
        new MountainTerrain(hero, -5, 1), new ForestTerrain(hero, -4, 1), new RoadTerrain(hero, -3, 1), new RiverTerrain(hero, -2, 1), new ForestTerrain(hero, -1, 1), new RoadTerrain(hero, 0, 1), new HauntedManor(hero, 1, 1), new ForestTerrain(hero, 2, 1), new RoadTerrain(hero, 3, 1), new ForestTerrain(hero, 4, 1), new MountainTerrain(hero, 5, 1),
        //0
        new MountainTerrain(hero, -5, 0), new ForestTerrain(hero, -4, 0), new RoadTerrain(hero, -3, 0), new Bridge(hero, -2, 0), new RoadTerrain(hero, -1, 0), new DaleTown(hero, 0, 0), new RoadTerrain(hero, 1, 0), new RoadTerrain(hero, 2, 0), new RoadTerrain(hero, 3, 0), new RoadTerrain(hero, 4, 0), new RoadTerrain(hero, 5, 0),
        //-1
        new MountainTerrain(hero, -5, -1), new ForestTerrain(hero, -4, -1), new TenguCamp(hero, -3, -1), new RiverTerrain(hero, -2, -1), new LittleRootFarm(hero, -1, -1), new RoadTerrain(hero, 0, -1), new Graveyard(hero, 1, -1), new ForestTerrain(hero, 2, -1), new ForestTerrain(hero, 3, -1), new BanditHideout(hero, 4, -1), new MountainTerrain(hero, 5, -1),
        //-2
        new MountainTerrain(hero, -5, -2), new ForestTerrain(hero, -4, -2), new ForestTerrain(hero, -3, -1), new RiverTerrain(hero, -2, -2), new Mill(hero, -1, -2), new RoadTerrain(hero, 0, -2), new ForestTerrain(hero, 1, -2), new ForestTerrain(hero, 2, -2), new ForestTerrain(hero, 3, -2), new MountainTerrain(hero, 4, -2), new MountainTerrain(hero, 5, -2),
        //-3
        new MountainTerrain(hero, -5, -3), new ForestTerrain(hero, -4, -3), new SpiderCave(hero, -3, -2), new RiverTerrain(hero, -2, -3), new RiverTerrain(hero - 1, -3), new RoadTerrain(hero, 0, -3), new ForestTerrain(hero, 1, -3), new ForestTerrain(hero, 2, -3), new ForestTerrain(hero, 3, -3), new ForestTerrain(hero, 4, -3), new MountainTerrain(hero, 5, -3),
        //-4
        new MountainTerrain(hero, -5, -4), new ForestTerrain(hero, -4, -4), new ForestTerrain(hero, -3, -3), new ForestTerrain(hero, -2, -4), new RiverTerrain(hero, -1, -4), new RoadTerrain(hero, 0, -4), new ForestTerrain(hero, 1, -4), new ForestTerrain(hero, 2, -4), new ForestTerrain(hero, 3, -4), new ForestTerrain(hero, 4, -4), new MountainTerrain(hero, 5, -4),
        //-5
        new MountainTerrain(hero, -5, -5), new ForestTerrain(hero, -4, -5), new ForestTerrain(hero, -3, -4), new RiverTerrain(hero, -2, -5), new RiverTerrain(hero, -1, -5), new RoadTerrain(hero, 0, -5), new ForestTerrain(hero, 1, -5), new ForestTerrain(hero, 2, -5), new BearCave(hero, 3, -5), new ForestTerrain(hero, 4, -5), new MountainTerrain(hero, 5, -5),
        //-6
        new MountainTerrain(hero, -5, -6), new ForestTerrain(hero, -4, -6), new ForestTerrain(hero, -3, -5), new RiverTerrain(hero, -2, -6), new Farm(hero, -1, -6), new RoadTerrain(hero, 0, -6), new WolfDen(hero, 1, -6), new ForestTerrain(hero, 2, -6), new ForestTerrain(hero, 3, -6), new ForestTerrain(hero, 4, -6), new MountainTerrain(hero, 5, -6),
        //-7
        new MountainTerrain(hero, -5, -7), new ForestTerrain(hero, -4, -7), new ForestTerrain(hero, -3, -5), new RiverTerrain(hero, -2, -7), new RiverTerrain(hero, -1, -7), new RoadTerrain(hero, 0, -7), new ForestTerrain(hero, 1, -7), new ForestTerrain(hero, 2, -6), new ForestTerrain(hero, 3, -7), new ForestTerrain(hero, 4, -7), new MountainTerrain(hero, 5, -7),
        //-8
        new MountainTerrain(hero, -5, -8), new ForestTerrain(hero, -4, -8), new MountainTerrain(hero, -3, -8), new DwarvenMine(hero, -2, -8), new Bridge(hero, -1, -8), new RoadTerrain(hero, 0, -8), new ForestTerrain(hero, 1, -8), new ForestTerrain(hero, 2, -8), new ForestTerrain(hero, 3, -8), new MountainTerrain(hero, 4, -8), new MountainTerrain(hero, 5, -6),
        //-9
        new MountainTerrain(hero, -5, -9), new ForestTerrain(hero, -4, -9), new MountainTerrain(hero, -3, -9), new MountainTerrain(hero, -2, -9), new RiverTerrain(hero, -1, -9), new RoadTerrain(hero, 0, -9), new BatCave(hero, 1, -9), new ForestTerrain(hero, 2, -9), new MountainTerrain(hero, 3, -9), new MountainTerrain(hero, 4, -9), new MountainTerrain(hero, 5, -9),
        //-10
        new MountainTerrain(hero, -5, -10), new MountainTerrain(hero, -4, -10), new MountainTerrain(hero, -3, -10), new MountainTerrain(hero, -2, -10), new RiverTerrain(hero, -1, -10), new RoadTerrain(hero, 0, -10), new MountainTerrain(hero, 1, -10), new MountainTerrain(hero, 2, -10), new MountainTerrain(hero, 3, -10), new MountainTerrain(hero, 4, -10), new MountainTerrain(hero, 5, -10)
    ]) {
        super(hero, name, locations)
    }
}



