import { React } from 'react';
import { Html } from "@react-three/drei"; //Fiber React component for the Planet's atmosphere
import "./LandingPage.css";

import Particles from "react-tsparticles";

const LandingPage = () => {
    // Add click event listener to the button to hide the landing page
    const hideLandingPage = () => {
        const landingPage = document.getElementsByClassName("landingPage")[0];
        const navbar = document.getElementsByClassName("navbar-container")[0];
        landingPage.classList.add("hide");
        navbar.classList.add("shown");
        setTimeout(() => {
            landingPage.remove();
        }, 4000);
    }

    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <Html>
                <div className="landingPage">
                    <button onClick={hideLandingPage} className="landingPage_button">&nbsp;ENTER</button>
                </div>
            </Html>
        </>
    );
}

export default LandingPage;