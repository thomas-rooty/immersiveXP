import { React, useContext } from 'react';

// Import styles
import './Navbar.css';

// Import PlanetContext
import PlanetContext from '../../Context/PlanetContext';

const toggleNavbar = () => {
    const navbarElement = document.getElementById('navbar');
    const navArrow = document.getElementById('navArrow');
    if (navbarElement.style.display === 'flex') {
        // The navbar will be hidden
        navbarElement.style.display = 'none';
        navArrow.classList.remove('up');
        navArrow.classList.add('down');
        navArrow.style.marginTop = '20px';
    } else {
        navbarElement.style.display = 'flex';
        navArrow.classList.remove('down');
        navArrow.classList.add('up');
        navArrow.style.marginTop = '40px';
    }
}

const Navbar = () => {
    const contextNavbar = useContext(PlanetContext);
    return (
        <div className="navbar-container hidden">
            <i id="navArrow" className="arrow down" onClick={() => toggleNavbar()}></i>
            <nav id="navbar">
                <button id="mercury" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mercury')}><span className="nav-Font">Mercury</span></button>
                <button id="venus" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('venus')}><span className="nav-Font">Venus</span></button>
                <button id="earth" className="navbar-item navbar-active-item" onClick={() => contextNavbar.handleChangePlanet('earth')}><span className="nav-Font">Earth</span></button>
                <button id="mars" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('mars')}><span className="nav-Font">Mars</span></button>
                <button id="jupiter" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('jupiter')}><span className="nav-Font">Jupiter</span></button>
                <button id="saturn" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('saturn')}><span className="nav-Font">Saturn</span></button>
                <button id="uranus" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('uranus')}><span className="nav-Font">Uranus</span></button>
                <button id="neptune" className="navbar-item" onClick={() => contextNavbar.handleChangePlanet('neptune')}><span className="nav-Font">Neptune</span></button>
            </nav>
        </div>
    );
}

export default Navbar;