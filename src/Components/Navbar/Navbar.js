import { React, useContext } from 'react';

// Import styles
import './Navbar.css';

// Import PlanetContext
import PlanetContext from '../../Context/PlanetContext';

// Toggle Navbar if mobile
const toggleNavbar = () => {
    // Get width of window
    const width = window.innerWidth;
    if (width < 1220) {
        const navbar = document.getElementById('navbar');
        console.log("toggleNavbar");
        // If navbar is hidden, show it
        navbar.classList.toggle('shown-nav');
    }
}

const Navbar = () => {
    const contextNavbar = useContext(PlanetContext);
    return (
        <div className="navbar-container">
            <img src='/icons/starburst-icon.png' alt='starburst-icon' id="navStarBurst" className="starburst" onClick={() => toggleNavbar()}></img>
            <hr />
            <nav id="navbar">
                <button id="mercury" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mercury')}>
                    <span className="nav-Font"><span className="heavy">00</span> Mercury</span>
                </button>
                <button id="venus" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('venus')}>
                    <span className="nav-Font"><span className="heavy">01</span> Venus</span>
                </button>
                <button id="earth" className="navbar-item navbar-active-item" onClick={() => contextNavbar.handleChangePlanet('earth')}>
                    <span className="nav-Font"><span className="heavy">02</span> Earth</span>
                </button>
                <button id="mars" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mars')}>
                    <span className="nav-Font"><span className="heavy">03</span> Mars</span>
                </button>
                <button id="jupiter" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('jupiter')}>
                    <span className="nav-Font"><span className="heavy">04</span> Jupiter</span>
                </button>
                <button id="saturn" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('saturn')}>
                    <span className="nav-Font"><span className="heavy">05</span> Saturn</span>
                </button>
                <button id="uranus" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('uranus')}>
                    <span className="nav-Font"><span className="heavy">06</span> Uranus</span>
                </button>
                <button id="neptune" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('neptune')}>
                    <span className="nav-Font"><span className="heavy">07</span> Neptune</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;