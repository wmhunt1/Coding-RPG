import { OutOfBounds } from "../Database/LocationsDB";
export function AddToExplorationLog(log, message)
{
    log.Log.push("Exploration: " + message);
}
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
        return map.Locations[mapIndex]
    }
    else {
        return new OutOfBounds(hero, x, y)
    }
}
export function findAdjacentLocations(hero, map, x, y) {
    //n 0
    hero.AdjacentLocations = []
    var n = findAdjacentLocation(hero, map, x, y + 1)
    hero.AdjacentLocations.push(n)
    //ne 1
    var ne = findAdjacentLocation(hero, map, x + 1, y + 1)
    hero.AdjacentLocations.push(ne)
    //e 2
    var e = findAdjacentLocation(hero, map, x + 1, y)
    hero.AdjacentLocations.push(e)
    //se 3
    var se = findAdjacentLocation(hero, map, x + 1, y - 1)
    hero.AdjacentLocations.push(se)
    //s 4
    var s = findAdjacentLocation(hero, map, x, y - 1)
    hero.AdjacentLocations.push(s)
    //sw 5
    var sw = findAdjacentLocation(hero, map, x - 1, y - 1)
    hero.AdjacentLocations.push(sw)
    //w 6
    var w = findAdjacentLocation(hero, map, x - 1, y)
    hero.AdjacentLocations.push(w)
    //nw 7
    var nw = findAdjacentLocation(hero, map, x - 1, y + 1)
    hero.AdjacentLocations.push(nw)
    //n2 8
    var n2 = findAdjacentLocation(hero, map, x, y + 2)
    hero.AdjacentLocations.push(n2)
    //e2 9
    var e2 = findAdjacentLocation(hero, map, x + 2, y)
    hero.AdjacentLocations.push(e2)
    //s2 10
    var s2 = findAdjacentLocation(hero, map, x, y - 2)
    hero.AdjacentLocations.push(s2)
    //w2 11
    var w2 = findAdjacentLocation(hero, map, x - 2, y)
    hero.AdjacentLocations.push(w2)
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
        hero.CurrentLocation.Color = map.Locations[mapIndex].Color;
        hero.CurrentLocation.SubLocations = map.Locations[mapIndex].SubLocations;
        AddToExplorationLog(hero,hero.Name + " travels to " + hero.CurrentLocation.LocationName)
        var knownIndex = null;
        if (hero.Map.find(x => x.LocationName === map.Locations[mapIndex].LocationName)) {
            knownIndex = hero.Map.findIndex(x => x.LocationName === map.Locations[mapIndex].LocationName);
        }
        if (knownIndex === null) {
            if (map.Locations[mapIndex].CanTravel === true) {
                hero.Map.push(map.Locations[mapIndex])
                AddToExplorationLog(hero,hero.Name + " discovers " + map.Locations[mapIndex].LocationName)
            }
        }
        findAdjacentLocations(hero, map, x, y)
    }
    else {
        AddToExplorationLog(hero,"Location is out of bounds")
    }
}