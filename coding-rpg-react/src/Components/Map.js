import { useState } from "react";
import '../App.css';
import './Game.css';
import { updateLocation } from '../Scripts/MapScripts'

function Map(props) {
    const [hero, setHero] = useState(props.hero)
    const [canMove, setCanMove] = useState(true)
    const [map, setMap] = useState(props.map)
    const [location, setLocation] = useState(props.hero.CurrentLocation.LocationName)
    const [subLocations, setSubLocations] = useState(props.hero.CurrentLocation.SubLocations)
    const [coordinateX, setCoordinateX] = useState(props.hero.CurrentLocation.XCoord)
    const [coordinateY, setCoordinateY] = useState(props.hero.CurrentLocation.YCoord)
    function handleMove(hero, map, x, y) {
        updateLocation(hero, map, x, y)
        setHero(hero)
        setCoordinateX(hero.CurrentLocation.XCoord)
        setCoordinateY(hero.CurrentLocation.YCoord)
        setLocation(hero.CurrentLocation.LocationName)
        setSubLocations(hero.CurrentLocation.SubLocations)
        props.parentCallback(hero);
    }
    function handleEnterLocation(hero, location)
    {
        var location = location.enterLocation(hero)
        props.parentCallback(hero, location);
    }
    const subLocationsList = subLocations.sort((a, b) => a.Name.localeCompare(b.Name)).map((location, index) => <div key={index}><div style = {{display: "inline-block", lineHeight: "0pt"}}><h5>{location.Name}</h5></div> <div style = {{display: "inline-block", lineHeight: "0pt"}}><button onClick={() => handleEnterLocation(hero, location)}>Enter</button></div></div>)
    return (<div>

        <div style={{ border: "solid", height: 300 }}>
            <h2>{map.Name} Map</h2>
            <div><h3>{location} - ({coordinateX},{coordinateY})</h3></div>
            <div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", marginRight: "1%", border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "150px" }}>
                    <h4 style = {{lineHeight: "0pt"}}>Compass</h4>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY + 1)}>NW</button><button onClick={() => handleMove(hero, map, coordinateX, coordinateY + 1)}>N</button><button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY + 1)}>NE</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY)}>W</button>Compass<button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY)}>E</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(hero, map, coordinateX - 1, coordinateY - 1)}>SW</button><button onClick={() => handleMove(hero, map, coordinateX, coordinateY - 1)}>S</button><button onClick={() => handleMove(hero, map, coordinateX + 1, coordinateY - 1)}>SE</button>
                    </div>
                </div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", marginRight: "1%", border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "150px", overflow: "scroll", width: "300px" }}>{subLocations.length > 0 ? <div><h4 style = {{lineHeight: "0pt"}}>Sub Locations</h4>{subLocationsList}</div> : <div></div>}</div>
            </div>
        </div>
    </div>)
}
export default Map;