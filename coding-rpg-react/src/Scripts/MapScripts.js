import { AddToCharacterLog } from "./CharacterScripts";

export function updateLocation(hero, map, x, y) {
    if (map.Locations.find(m => m.XCoord === x && m.YCoord === y)) {
        var mapIndex = map.Locations.findIndex(m => m.XCoord === x && m.YCoord === y);
        hero.CurrentLocation.LocationName = map.Locations[mapIndex].LocationName;
        hero.CurrentLocation.XCoord = map.Locations[mapIndex].XCoord;
        hero.CurrentLocation.YCoord = map.Locations[mapIndex].YCoord;
        hero.CurrentLocation.SubLocations = map.Locations[mapIndex].SubLocations;
        AddToCharacterLog(hero, hero.Name + " travels to " + hero.CurrentLocation.LocationName)
        var knownIndex = null;
        if (hero.Map.find(x => x.LocationName === map.Locations[mapIndex].LocationName)) {
            knownIndex = hero.Map.findIndex(x => x.LocationName === map.Locations[mapIndex].LocationName);
        }
        if (knownIndex === null) {
            if (map.Locations[mapIndex].CanTravel === true) {
                hero.Map.push(map.Locations[mapIndex])
                AddToCharacterLog(hero, hero.Name + " discovers " + map.Locations[mapIndex].LocationName)
            }
        }
        console.log(hero.Map)
    }
    else {
        AddToCharacterLog(hero, "Location is out of bounds")
    }
}