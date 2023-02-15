import { AddToCharacterLog } from "./CharacterScripts";
export function CalculateTime(char, hours) {
    char.Time.Hour += hours;
    if (char.Time.Hour >= 6 && char.Time.Hour < 12) {
        char.Time.TimeOfDay = "Morning"
    }
    else if (char.Time.Hour === 12) {
        char.Time.TimeOfDay = "Noon"
    }
    else if (char.Time.Hour > 12 && char.Time.Hour < 18) {
        char.Time.TimeOfDay = "Afternoon"
    }
    else if (char.Time.Hour >= 18 && char.Time.Hour < 21) {
        char.Time.TimeOfDay = "Evening"
    }
    else if (char.Time.Hour === 0) {
        char.Time.TimeOfDay = "Midnight"
    }
    else {
        char.Time.TimeOfDay = "Night"
    }
    if (char.Time.Hour >= 24) {
        char.Time.Day++;
        char.Time.Hour = 0
    }
}
export function findAdjacentLocation(hero, map, x, y) {
    if (map.Locations.find(m => m.XCoord === x && m.YCoord === y)) {
        var mapIndex = map.Locations.findIndex(m => m.XCoord === x && m.YCoord === y);
        return map.Locations[mapIndex].LocationName
    }
    else {
        return "OOB"
    }
}
export function findAdjacentLocations(hero, map, x, y) {
    //n
    hero.AdjacentLocations = []
    var n = findAdjacentLocation(hero, map, x, y + 1)
    hero.AdjacentLocations.push(n)
    //ne
    var ne = findAdjacentLocation(hero, map, x + 1, y + 1)
    hero.AdjacentLocations.push(ne)
    //e
    var e = findAdjacentLocation(hero, map, x + 1, y)
    hero.AdjacentLocations.push(e)
    //se
    var se = findAdjacentLocation(hero, map, x + 1, y - 1)
    hero.AdjacentLocations.push(se)
    //s
    var s = findAdjacentLocation(hero, map, x, y - 1)
    hero.AdjacentLocations.push(s)
    //sw
    var sw = findAdjacentLocation(hero, map, x + 1, y - 1)
    hero.AdjacentLocations.push(sw)
    //w
    var w = findAdjacentLocation(hero, map, x - 1, y)
    hero.AdjacentLocations.push(w)
    //nw
    var nw = findAdjacentLocation(hero, map, x - 1, y + 1)
    hero.AdjacentLocations.push(nw)
}
export function updateLocation(hero, map, x, y, hour) {
    if (map.Locations.find(m => m.XCoord === x && m.YCoord === y)) {
        if (hero.CurrentLocation.LocationName === "Forest" || hero.CurrentLocation.LocationName === "Mountains" || hero.CurrentLocation.LocationName === "River" || hero.CurrentLocation.LocationName === "Lake") {
            CalculateTime(hero, hour * 2)
        }
        else {
            CalculateTime(hero, hour)
        }
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
        findAdjacentLocations(hero, map, x, y)
    }
    else {
        AddToCharacterLog(hero, "Location is out of bounds")
    }
}