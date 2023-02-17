import { useState } from "react";
import '../App.css';
import './Game.css';
import { updateLocation } from '../Scripts/MapScripts'

function Map(props) {
    const [hero, setHero] = useState(props.hero)
    const [map, setMap] = useState(props.map)
    const [move, setMove] = useState(true)
    const [knownLocations, setKnownLocations] = useState(props.hero.Map)
    const [location, setLocation] = useState(props.hero.CurrentLocation)
    const [subLocations, setSubLocations] = useState(props.hero.CurrentLocation.SubLocations)
    const [coordinateX, setCoordinateX] = useState(props.hero.CurrentLocation.XCoord)
    const [coordinateY, setCoordinateY] = useState(props.hero.CurrentLocation.YCoord)
    const [adjacentLocations, setAdjacentLocations] = useState(props.hero.AdjacentLocations)
    function handleMove(hero, map, x, y, hour) {
        if (move === true) {
            updateLocation(hero, map, x, y, hour)
            setHero(hero)
            var updateKnownLocations = [...hero.Map]
            setKnownLocations(updateKnownLocations)
            setCoordinateX(hero.CurrentLocation.XCoord)
            setCoordinateY(hero.CurrentLocation.YCoord)
            setLocation(hero.CurrentLocation)
            setSubLocations(hero.CurrentLocation.SubLocations)
            setAdjacentLocations(hero.AdjacentLocations)
        }
        props.parentCallback(hero);
    }
    function goToKnownLocation(hero, map, x, y, oldX, oldY) {
        var hour = Math.round((Math.abs(oldX - x) + Math.abs(oldY - y)) / 2)
        handleMove(hero, map, x, y, hour)
    }
    function handleEnterLocation(hero, location) {
        var updateLocation = location.enterLocation(hero)
        props.parentCallback(hero, updateLocation);
    }
    const subLocationsList = subLocations.sort((a, b) => a.Name.localeCompare(b.Name)).map((location, index) => <div key={index}><button onClick={() => handleEnterLocation(hero, location)}>{location.Name}</button></div>)
    const knownLocationsList = knownLocations.sort((a, b) => a.LocationName.localeCompare(b.LocationName)).map((location, index) => <div key={index}><button onClick={() => goToKnownLocation(hero, map, location.XCoord, location.YCoord, coordinateX, coordinateY)}>{location.LocationName}</button></div>)
    return (<div>
        <div style={{ border: "solid", height: "580px" }}>
            {hero.BaseStats.HP.Current > 0 ? <h2>{hero.Name}</h2> : <h2 style={{color:"red"}}>{hero.Name} - Cannot Fight</h2>}
            <div><h3>{location.LocationName} - {hero.Time.TimeOfDay}</h3>
             {/* - ({coordinateX},{coordinateY}) Time: {hero.Time.Day}, {hero.Time.Hour} -  */}
             </div>
            <div>
                <div className="map-row" style={{ width: "200px" }}>{subLocations.length > 0 ? <div><h4 style={{ lineHeight: "0pt" }}>Sub Locations</h4>{subLocationsList}</div> : <div><h4 style={{ lineHeight: "0pt" }}>Sub Locations</h4></div>}</div>
                <div className="map-row" style={{ width: "400px" }}><h4 style={{ lineHeight: "0pt" }}>Compass</h4>
                    <div><button style={{ backgroundColor: adjacentLocations[8].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX, coordinateY + 2, 1)}>{adjacentLocations[8].LocationName}</button></div>
                    <div><button style={{ backgroundColor: adjacentLocations[7].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY + 1, 1)}>{adjacentLocations[7].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[0].Color }} onClick={() => handleMove(hero, map, coordinateX, coordinateY + 1, 1)}>{adjacentLocations[0].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[1].Color }} onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY + 1, 1)}>{adjacentLocations[1].LocationName}</button></div>
                    <div><button style={{ backgroundColor: adjacentLocations[11].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX - 2, coordinateY, 1)}>{adjacentLocations[11].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[6].Color }} onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY, 1)}>{adjacentLocations[6].LocationName}</button><button style={{ backgroundColor: location.Color }} className="map-box">{location.LocationName}</button><button style={{ backgroundColor: adjacentLocations[2].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY, 1)}>{adjacentLocations[2].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[9].Color }} onClick={() => handleMove(hero, map, coordinateX + 2, coordinateY, 1)}>{adjacentLocations[9].LocationName}</button></div>
                    <div><button style={{ backgroundColor: adjacentLocations[5].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY - 1, 1)}>{adjacentLocations[5].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[4].Color }} onClick={() => handleMove(hero, map, coordinateX, coordinateY - 1, 1)}>{adjacentLocations[4].LocationName}</button><button className="map-box" style={{ backgroundColor: adjacentLocations[3].Color }} onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY - 1, 1)}>{adjacentLocations[3].LocationName}</button></div>
                    <div><button style={{ backgroundColor: adjacentLocations[10].Color }} className="map-box" onClick={() => handleMove(hero, map, coordinateX, coordinateY - 2, 1)}>{adjacentLocations[10].LocationName}</button></div>
                </div>
                <div className="map-row" style={{ width: "170px" }}>{knownLocations.length > 0 ? <div><h4 style={{ lineHeight: "0pt" }}>Fast Travel</h4>{knownLocationsList}</div> : <div></div>}</div>
            </div>
        </div>
    </div>)
}
export default Map;