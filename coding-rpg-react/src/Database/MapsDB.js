import { bridgeOverRiver, daleTown, dwarvenMine, farm, forest, giantCave, littleRootFarm, lumbermill, mountains, river, road, spiderCave, tenguCamp, witchHut } from "./LocationsDB"

export function startingAdjacentLocations() {
    var start = ["Bridge", "River", "Farm", "Farm", "Road", "LittleRoot Farm", "River", "River"]
    return start;
}
export function worldMap(hero) {
    var worldMap = {
        Name: "World", Locations: [
            bridgeOverRiver(hero, 0, 1), daleTown(hero, 0, 0), dwarvenMine(hero, 3, -3), giantCave(hero, 4, 4),
            farm(hero, 1, 0), farm(hero, 1, -1), forest(hero, -1, 2), forest(hero, 2, -2), forest(hero, 3, -2), forest(hero, 1, 3),
            littleRootFarm(hero, -1, -1), lumbermill(hero, 1, 4), mountains(hero, 2, -4), mountains(hero, 3, -4), mountains(hero, 4, -4), mountains(hero, 4, -3), mountains(hero, 4, -2),
            river(hero, 1, 1), river(hero, -1, 0), river(hero, -1, 1), river(hero, 2, 1), river(hero, 2, 2), river(hero, 2, 3),
            river(hero, 2, 4), river(hero, -2, 0), river(hero, -2, -1),
            road(hero, 0, -1), road(hero, 0, 2), road(hero, 0, -2), road(hero, 1, -2), road(hero, 1, -3), road(hero, 2, - 3), road(hero, 0, 2), road(hero, 0, 3),
            spiderCave(hero, -3, -3), tenguCamp(hero, -3, -1), witchHut(hero, 1, 2)]
    }
    return worldMap
}
//map sketch
//|- (-3,5) -|- (-2,5)-|-(-1, 5)-|- (0,5)  -|- (1, 5) -|- (2, 5) -|- (3, 5) -|
//|          |         |         |          |          |          |          |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,4) -|- (-2,4)-|-(-1, 4)-|- (0,4)  -|- (1, 4) -|- (2, 4) -|- (3, 4) -|- (4,4) - |
//|          |         |         |road      |lumber    |river     |forest    |giant     |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,3) -|- (-2,3)-|-(-1, 3)-|- (0,3)  -|- (1, 3) -|- (2, 3) -|- (3, 3) -|
//|          |         |         |road      |forest    |river     |forest    |
//|----------|---------|---------|----------|----------|----------|----------|
//|- (-3,2) -|- (-2,2)-|-(-1, 2)-|- (0,2)  -|- (1, 2) -|- (2, 2) -|- (3, 2) -|
//|          |         |forest   |road      |witchhut  |river     |          |
//|----------|---------|---------|----------|----------|----------|----------|
//|-(-3, 1) -|-(-2,1) -|-(-1, 1)-|- (0,1)  -|- (1, 1) -|- (2, 1) -|- (3, 1) -|
//|          |         |river    |bridge    |river     |river     |          |
//|----------|---------|---------|----------|----------|----------|----------|
//|-(-3, 0) -|-(-2,0) -|-(-1, 0)-|- (0,0)  -|- (1, 0) -|- (2, 0) -|- (3, 0) -|
//|          |river    |river    |daleTown  |farm      |          |          |
//|----------|---------|---------|----------|----------|----------|----------|
//|-(-3,-1) -|-(-2,-1) |-(-1,-1)-|- (0,-1)- |- (1, -1)-|- (2,-1) -|- (3,-1) -|
//|crow camp |river    |lr farm  |road      |      farm|          |          |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,-2)-|-(-2,-2)-|-(-1,-2)-|- (0,-2)- |- (1,-2) -|- (2,-2) -|- (3,-2) -|- (4,-2) -|
//|          |         |         |road      |road      |forest    |forest    |mountains |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,-3)-|-(-2,-3)-|-(-1,-3)-|- (0,-3)- |- (1,-3) -|- (2,-3) -|- (3,-3) -|- (4,-3) -|
//|spider    |         |         |          |road      |road      |dwarf mine|mountains |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,-4)-|-(-2,-4)-|-(-1,-4)-|- (0,-4)- |- (1,-4) -|- (2,-4) -|- (3,-4) -|- (4,-4) -|
//|          |         |         |          |          |mountains |mountains |mountains |
//|----------|---------|---------|----------|----------|----------|----------|----------|
//|- (-3,-5)-|-(-2,-5)-|-(-1,-5)-|- (0,-5)- |- (1,-5) -|- (2,-5) -|- (3,-5) -|- (4,-5) -|
//|          |         |         |          |          |          |          |          |
//|----------|---------|---------|----------|----------|----------|----------|----------|