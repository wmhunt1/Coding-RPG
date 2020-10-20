import React from "react";

function Menu() {
  return (
    //   <header style={styles.headerStyle} className="header">
    //     <h1 style={styles.headingStyle}>Welcome</h1>
    //   </header>
    <nav id="Menu">
        <h1>Menu</h1>
        <ul>
            <li><button id="charBtn">Character</button> </li>
            <li><button id="equipBtn">Equipment</button></li>
            <li><button id="factionBtn">Factions and Reputation</button></li>
            <li><button id="invBtn">Inventory</button></li>
            <li><button id="journalBtn">Journal</button></li>
        </ul>
    </nav>
  );
}

export default Menu;