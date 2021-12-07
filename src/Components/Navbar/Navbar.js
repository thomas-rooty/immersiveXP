import { React, useContext } from 'react';

// Import styles
import './Navbar.css';

// Import PlanetContext
import PlanetContext from '../../Context/PlanetContext';

const Navbar = () => {
    const contextNavbar = useContext(PlanetContext);
    return (
        <nav className="navbar">
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Mercury')}><span className="nav-Font">Mercury</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Venus')}><span className="nav-Font">Venus</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Earth')}><span className="nav-Font">Earth</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Mars')}><span className="nav-Font">Mars</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Jupiter')}><span className="nav-Font">Jupiter</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Saturn')}><span className="nav-Font">Saturn</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Uranus')}><span className="nav-Font">Uranus</span></btn>
            <btn className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('Neptune')}><span className="nav-Font">Neptune</span></btn>
        </nav>
    );
}

export default Navbar;