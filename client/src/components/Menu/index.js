import React from 'react';
import "./index.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Menu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                {/* <Navbar.Brand href="home">Home</Navbar.Brand> */}
                <Nav className="mr-auto">
                <h1>Menu</h1>
                    <Nav.Link href="home"><h4 class ="option">Game</h4></Nav.Link>
                    <Nav.Link href="character"><h4 class ="option">Character</h4></Nav.Link>
                    <Nav.Link href="inventory"><h4 class ="option">Inventory</h4></Nav.Link>
                    <Nav.Link href="journal"><h4 class ="option">Journal</h4></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}