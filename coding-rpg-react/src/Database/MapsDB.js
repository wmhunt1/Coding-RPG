import { bridgeOverRiver, daleTown, farm, forest, river, road } from "./LocationsDB"

export function worldMap(hero) {
    var worldMap = {
        Name: "World", Locations: [daleTown(hero),
        farm(hero, 1, 0), farm(hero, 1, -1), farm(hero, -1, -1),
        bridgeOverRiver(hero, 0, 1),
        forest(hero, 1, 2), forest(hero, -1, 2),
        river(hero, 1, 1), river(hero, -1, 0), river(hero, -1, 1),
        road(hero, 0, -1), road(hero, 0, 2)]
    }
    return worldMap
}
//map sketch
//|- (-2,2) -|-(-1, 2)-|- (0,2) -|- (1, 2) -|- (2, 2) -|
//|          |forest   |road     |forest    |          |
//|----------|---------|---------|----------|----------|
//|-(-2,1)  -|-(-1, 1)-|- (0,1) -|- (1, 1) -|- (2, 1) -|
//|          |river    |bridge   |river     |          |
//|----------|---------|---------|----------|----------|
//|-(-2,0)  -|-(-1, 0)-|- (0,0) -|- (1, 0) -|- (2, 0) -|
//|          |river    |daleTown |farm      |          |
//|----------|---------|---------|----------|----------|
//|-(-2,-1) -|-(-1,-1)-|- (0,-1)-|- (1, -1)-|- (2,-1) -|
//|          |farm     |road     |farm      |          |
//|----------|---------|---------|----------|----------|
//|-(-2,-2) -|-(-1,-2)-|- (0,-2)-|- (1,-2) -|- (2,-2) -|
//|          |         |         |          |          |
//|----------|---------|---------|----------|----------|