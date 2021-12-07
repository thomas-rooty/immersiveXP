import { React, useContext } from 'react';

// Import styles
import './Navbar.css';

// Import PlanetContext
import PlanetContext from '../../Context/PlanetContext';

const Navbar = () => {
    const contextNavbar = useContext(PlanetContext);
    return (
        <nav className="navbar">
            <btn className="navbar-item" id="Mercury" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Mercury</span></btn>
            <btn className="navbar-item" id="Venus" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Venus</span></btn>
            <btn className="navbar-item" id="Earth" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Earth</span></btn>
            <btn className="navbar-item" id="Mars" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Mars</span></btn>
            <btn className="navbar-item" id="Jupiter" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Jupiter</span></btn>
            <btn className="navbar-item" id="Saturn" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Saturn</span></btn>
            <btn className="navbar-item" id="Uranus" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Uranus</span></btn>
            <btn className="navbar-item" id="Neptune" onClick={() => contextNavbar.handleChangePlanet}><span className="nav-Font">Neptune</span></btn>
        </nav>
    );
}

export default Navbar;