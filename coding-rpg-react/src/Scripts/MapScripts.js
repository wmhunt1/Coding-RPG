import { AddToCharacterLog } from "./CharacterScripts";

export function updateLocation(hero, map, x, y)
{
    if (map.Locations.find(m => m.XCoord === x && m.YCoord === y)) {
        var mapIndex = map.Locations.findIndex(m => m.XCoord === x && m.YCoord === y);
        hero.CurrentLocation.LocationName = map.Locations[mapIndex].LocationName;
        hero.CurrentLocation.XCoord = map.Locations[mapIndex].XCoord;
        hero.CurrentLocation.YCoord = map.Locations[mapIndex].YCoord;
        hero.CurrentLocation.SubLocations = map.Locations[mapIndex].SubLocations;
        AddToCharacterLog(hero, hero.Name + " moves to " +  hero.CurrentLocation.LocationName)
    }
    else
    {
        AddToCharacterLog(hero, "Location is out of bounds")
    }
}