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
        // Play bg audio and click for this button
        playSound('/sound/bg.mp3', true, 0.2);
        playSound('/sound/click.mp3', false, 0.8);

        // Init click sound effect
        initClickSound();
        setTimeout(() => {
            landingPage.remove();
        }, 4000);
    }

    //Init click sound effect
    const initClickSound = () => {
        // Distinguish between click and drag
        let moved;
        let downListener = (e) => {
            moved = false;
        }
        let moveListener = (e) => {
            moved = true;
        }
        let upListener = (e) => {
            if (!moved) {
                playSound('/sound/click.mp3', false, 0.8);
            }
        }
        document.addEventListener('mousedown', downListener);
        document.addEventListener('mousemove', moveListener);
        document.addEventListener('mouseup', upListener);
    }

    // Play sound when the button is clicked
    const playSound = (mp3, looping, volume) => {
        let audio = new Audio(mp3);
        // Audio settings (lowering volume, looping)
        audio.volume = volume;
        audio.loop = looping;

        audio.play();
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