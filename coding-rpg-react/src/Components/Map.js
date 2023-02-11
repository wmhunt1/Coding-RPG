import { useState } from "react";
import '../App.css';
import './Game.css';
import { updateLocation } from '../Scripts/MapScripts'

function Map(props) {
    const [hero, setHero] = useState(props.hero)
    const [map, setMap] = useState(props.map)
    const [knownLocations, setKnownLocations] = useState(props.hero.Map)
    const [location, setLocation] = useState(props.hero.CurrentLocation.LocationName)
    const [subLocations, setSubLocations] = useState(props.hero.CurrentLocation.SubLocations)
    const [coordinateX, setCoordinateX] = useState(props.hero.CurrentLocation.XCoord)
    const [coordinateY, setCoordinateY] = useState(props.hero.CurrentLocation.YCoord)
    function handleMove(hero, map, x, y, hour) {
        updateLocation(hero, map, x, y, hour)
        setHero(hero)
        var updateKnownLocations = [...hero.Map]
        setKnownLocations(updateKnownLocations)
        setCoordinateX(hero.CurrentLocation.XCoord)
        setCoordinateY(hero.CurrentLocation.YCoord)
        setLocation(hero.CurrentLocation.LocationName)
        setSubLocations(hero.CurrentLocation.SubLocations)
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
    const subLocationsList = subLocations.sort((a, b) => a.Name.localeCompare(b.Name)).map((location, index) => <div key={index}><div style={{ display: "inline-block", lineHeight: "0pt" }}><h5>{location.Name}</h5></div> <div style={{ display: "inline-block", lineHeight: "0pt" }}><button onClick={() => handleEnterLocation(hero, location)}>Enter</button></div></div>)
    const knownLocationsList = knownLocations.sort((a, b) => a.XCoord - b.XCoord && a.YCoord - b.YCoord).map((location, index) => <div key={index}><div style={{ display: "inline-block", lineHeight: "0pt" }}><h5>{location.LocationName}: ({location.XCoord}, {location.YCoord})</h5></div> <div style={{ display: "inline-block", lineHeight: "0pt" }}><button onClick={() => goToKnownLocation(hero, map, location.XCoord, location.YCoord, coordinateX, coordinateY)}>Travel</button></div></div>)
    return (<div>

        <div style={{ border: "solid", height: "300px" }}>
            <h2>{map.Name} Map - {hero.Name}</h2>
            <div><h3>{location} - ({coordinateX},{coordinateY}) Time: {hero.Time.Day}, {hero.Time.Hour} - {hero.Time.TimeOfDay}</h3></div>
            <div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", marginRight: "1%", border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "150px" }}>
                    <h4 style={{ lineHeight: "0pt" }}>Compass</h4>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY + 1, 1)}>NW</button><button onClick={() => handleMove(hero, map, coordinateX, coordinateY + 1, 1)}>N</button><button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY + 1, 1)}>NE</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY, 1)}>W</button>Compass<button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY, 1)}>E</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY - 1, 1)}>SW</button><button onClick={() => handleMove(hero, map, coordinateX, coordinateY - 1, 1)}>S</button><button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY - 1, 1)}>SE</button>
                    </div>
                </div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", marginRight: "1%", border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "150px", overflow: "scroll", width: "300px" }}>{subLocations.length > 0 ? <div><h4 style={{ lineHeight: "0pt" }}>Sub Locations</h4>{subLocationsList}</div> : <div><h4 style={{ lineHeight: "0pt" }}>Sub Locations</h4></div>}</div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", marginRight: "1%", border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "150px", overflow: "scroll", width: "200px" }}>{knownLocations.length > 0 ? <div><h4 style={{ lineHeight: "0pt" }}>Known Locations</h4>{knownLocationsList}</div> : <div><h4 style={{ lineHeight: "0pt" }}>Known Locations</h4></div>}</div>
            </div>
        </div>
    </div>)
}
export default Map;