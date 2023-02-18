import { banditHideout, batCave, bearCave, bridge, brokenBridge, daleTown, dwarvenMine, farm, forest, fortDale, giantCave,graveyard,lake, littleRootFarm, lumbermill,mill, mountains, orcVillage, river, road, spiderCave, tenguCamp, whiteScalesLair, witchHut, wolfDen } from "./LocationsDB"

export function startingAdjacentLocations(hero) {
    var start = [bridge(hero, 0,1),river(hero, 1,1), road(hero, 1, 0), graveyard(hero, 1,-1), road(hero, 0, -1), littleRootFarm(hero, -1, -1), river(hero, 0, -1), river(hero, -1, 1), road(hero, 0, 2), road(hero,2,0), road(hero, 0, -2), river(hero,-2,0)]
    return start;
}
export function worldMap(hero) {
    var worldMap = {
        Name: "World", Locations: [
            mountains(hero, 3, 15),mountains(hero, 4, 15), mountains(hero, 5, 15),
            road (hero, -2, 14), road(hero, -1, 14),orcVillage(hero, 0, 14), road (hero, 1, 14),forest(hero, 3,14), whiteScalesLair(hero, 4, 14), mountains(hero, 5, 14),
            road(hero, -3, 13), road(hero, -2, 13), lake(hero, -1, 13), lake(hero, 0, 13),road(hero, 1, 13), road(hero, 2, 13), forest(hero,3,13),farm(hero, 4, 13), mountains(hero, 5, 13),
            road(hero, -4, 12), road(hero, -3, 12), lake(hero, -2, 12), lake(hero, -1, 12), lake(hero, 0, 12), lake(hero, 1, 12),road(hero, 2, 12), road(hero, 3, 12),road(hero, 4, 12), mountains(hero, 5, 12),
            road(hero, -4, 11),lake(hero, -3, 11), lake(hero, -2, 11), lake(hero, -1, 11), lake(hero, 0, 11), lake(hero, 1, 11),lake(hero, 2, 11),road(hero, 3, 11),
            road(hero, -4, 10),lake(hero, -3, 10), lake(hero, -2, 10), fortDale(hero, -1, 10), lake(hero, 0, 10), lake(hero, 1, 10), lake(2, 10),road(hero, 3, 10),mountains(hero, 4, 10), mountains(hero, 5, 10),
            road(hero, -4, 9),lake(hero, -3, 9), lake(hero, -2, 9), brokenBridge(hero, -1, 9), lake(hero, 0, 9), lake(hero, 1, 9), lake(2, 9),road(hero, 3, 9),batCave(hero, 4, 9),mountains(hero, 5, 9),
            road(hero, -4, 8),road(hero, -3, 8),lake(hero, -2, 8), brokenBridge(hero, -1, 8), lake(hero, 1, 8),road(hero, 2, 8),road(hero, 3, 8),mountains(hero, 4, 8), mountains(hero, 5, 8),
            mountains(hero, -5,7),forest(hero, -4,7), road(hero, -3, 7),road(hero, -3, 7),road(hero, -1, 7),road(hero,0, 7), bridge(hero, 1, 7),road(hero, 2, 7),
            mountains(hero, -5,6),bearCave(hero, -4,6),forest(hero,-3,6), road(hero, -1, 6), river(hero, 1, 6), river(hero, 2, 6),forest(hero,3,6), mountains(hero, 4, 6),mountains(hero, 5, 6),
            mountains(hero, -5,6),forest(hero, -4,5),forest(hero,-3,5), road(hero, -1, 5), forest(hero, 0, 5), forest(hero, 1, 5), river(hero, 2, 5),forest(hero,3,5), giantCave(hero, 4, 5) , mountains(hero, 5, 5),
            road(hero, -1, 4), road(hero, 0, 4), lumbermill(hero, 1, 4), bridge(hero, 2, 4), forest(hero, 3, 4),mountains(hero, 4, 4), mountains(hero, 5, 4),
            road(hero, 0, 3), forest(hero, 1, 3), river(hero, 2, 3),wolfDen(hero, 3, 3,), mountains(hero, 4, 3), mountains(hero, 5, 3),
            forest(hero, -1, 2), road(hero, 0, 2), witchHut(hero, 1, 2), river(hero, 2, 2), forest(hero, 3, 2), mountains(hero, 4, 2), mountains(hero, 5, 2),
            river(hero, -1, 1), bridge(hero, 0, 1), river(hero, 1, 1), river(hero, 2, 1), forest(hero, 3, 1), banditHideout(hero, 4, 1), mountains(hero, 5, 1),
            forest(hero, -4, 0), forest(hero, -3, 0), river(hero, -2, 0), river(hero, -1, 0), daleTown(hero, 0, 0), road(hero, 1, 0), road(hero, 2, 0), road(hero, 3, 0), road(hero, 4, 0), road(hero, 5, 0),
            forest(hero, -4, -1), tenguCamp(hero, -3, -1), river(hero, -2, -1), littleRootFarm(hero, -1, -1), road(hero, 0, -1),graveyard(hero, 1, -1), forest(hero, 2, -1), forest(hero, 3, -1), mountains(hero, 4, -1), mountains(hero, 5, -1),
            forest(hero, -4, -2), forest(hero, -3, -2), river(hero, -2, -2),mill(hero, -1, -2), road(hero, 0, -2), forest(hero, 2, -2), forest(hero, 3, -2), mountains(hero, 4, -2), mountains(hero, 5, -2),
            forest(hero, -4, -3), spiderCave(hero, -3, -3), river(hero, -2, -3),farm(hero, -1, -3), road(hero, 1, -3),road(hero,0,-3), road(hero, 2, - 3), dwarvenMine(hero, 3, -3), mountains(hero, 4, -3), mountains(hero, 5, -3),
            forest(hero, -4, -4), forest(hero, -3, -4), river(hero, -2, -4), road(hero, 1, -4), mountains(hero, 2, -4), mountains(hero, 3, -4), mountains(hero, 4, -4), mountains(hero, 5, -3),
            river(hero, -2, -5), road(hero, 1, -5),
        ]
    }
    return worldMap
}
//|- x,y -||- -5  -||- -4  -||- -3  -||- -2  -||- -1  -||-  0  -||-  1  -||-  2  -||-  3  -||-  4  -||-  5  -| 
//|- 20  -||       ||       ||       ||       ||       ||       ||       ||       ||       ||       ||       |    
//|- 19  -||       ||       ||       ||       ||       ||       ||       ||       ||       ||       ||       |   
//|- 18  -||       ||       ||       ||       ||       ||       ||       ||       ||       ||       ||       |   
//|- 17  -||       ||       ||       ||       ||       ||       ||       ||       ||       ||       ||       |                            
//|- 16  -||       ||       ||       ||       ||       ||       ||       ||       ||       ||       ||       |                                    
//|- 15  -||       ||       ||       ||       ||       ||       ||       ||       ||  mtn  ||mtn    ||mtn    |                                    
//|- 14  -||       ||       ||       ||  road || road  || orc   || road  ||       ||  for  ||lair   ||mtn    |         
//|- 13  -||       ||       ||  road ||  road || lake  || lake  || road  || road  ||  for  || farm  ||mtn    |
//|- 12  -||       || road  || road  ||  lake || lake  || lake  ||  lake || road  ||  road ||rd     ||mtn    |
//|- 11  -||       ||road   ||  lake ||  lake || lake  || lake  ||  lake || lake  || road  ||       ||       |
//|- 10  -||       ||road   ||  lake ||  lake || fort  || lake  ||  lake || lake  || road  ||mtn    ||mtn    |
//|-  9  -||       ||road   ||  lake ||  lake ||brk brg|| lake  || lake  || lake  || road  ||bat    ||mtn    |
//|-  8  -||       ||road   ||  road || lake  ||brk brg|| lake  || lake  ||  road || road  ||mtn    ||mt     |
//|-  7  -||mtn    ||frst   || road  || road  || rd    ||  rd   ||  brg  ||  road ||       ||       ||       |
//|-  6  -||mtn    ||bear   ||frst   ||       ||  rd   ||       ||  rvr  ||  rvr  ||  for  ||  mtn  ||  mtn  |
//|-  5  -||mtn    ||frst   ||frst   ||       ||  rd   ||  for  ||  for  || rvr   ||  for  || gcave ||  mtn  |
//|-  4  -||       ||       ||       ||       ||  rd   ||  rd   || mill  ||  brdg ||  for  || mtn   ||  mtn  |
//|-  3  -||       ||       ||       ||       ||       ||  rd   ||  for  ||  rvr  ||wolf   ||  mtn  ||  mtn  |
//|-  2  -||       ||       ||       ||       ||  for  ||  rd   || witch ||  rvr  ||  for  ||  mtn  ||  mtn  |
//|-  1  -||       ||       ||       ||       ||  rvr  ||  brdg || rivr  ||  rvr  ||  for  ||bandit1|| mtn   |
//|-  0  -||       || for   || for   || rvr   ||  rvr  ||  dale || rd    ||  rd   ||  rd   ||  rd   ||  rd   |
//|- -1  -||       || for   || crow  || rvr   ||lrfarm ||  rd   ||grave  || for   || for   || mtn   ||  mtn  |
//|- -2  -||       || for   || for   || rvr   ||mill   ||  rd   ||       || rvr   || for   ||  mtn  ||  mtn  |
//|- -3  -||       || for   || spdr  || rvr   ||farm   ||  rd   ||  rd   ||  rd   || mine  ||  mtn  ||  mtn  |
//|- -4  -||       || for   || for   || rvr   ||       ||       ||  rd   || mtn   || mtn   ||  mtn  ||  mtn  |
//|- -5  -||       ||       ||       || rvr   ||       ||       ||  rd   ||       ||       ||       ||       |
//|- x,y -||- -5  -||- -4  -||- -3  -||- -2  -||- -1  -||-  0  -||-  1  -||-  2  -||-  3  -||-  4  -||-  5  -|