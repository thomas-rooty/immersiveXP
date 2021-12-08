import { React, useContext } from 'react';

// Import styles
import './Navbar.css';

// Import PlanetContext
import PlanetContext from '../../Context/PlanetContext';

const Navbar = () => {
    const contextNavbar = useContext(PlanetContext);
    return (
        <nav className="navbar">
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mercury')}><span className="nav-Font">Mercury</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('venus')}><span className="nav-Font">Venus</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('earth')}><span className="nav-Font">Earth</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mars')}><span className="nav-Font">Mars</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('jupiter')}><span className="nav-Font">Jupiter</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('saturn')}><span className="nav-Font">Saturn</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('uranus')}><span className="nav-Font">Uranus</span></button>
            <button className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('neptune')}><span className="nav-Font">Neptune</span></button>
        </nav>
    );
}

export default Navbar;