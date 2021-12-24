import { React, useState } from 'react';
import { Html } from "@react-three/drei"; //Fiber React component for the Planet's atmosphere
import "./LandingPage.css";

const LandingPage = () => {
    // Add click event listener to the button to hide the landing page
    const hideLandingPage = () => {
        const landingPage = document.getElementsByClassName("landingPage")[0];
        const navbar = document.getElementsByClassName("navbar-container")[0];
        const content = document.getElementsByClassName("intro")[0];
        const appClass = document.getElementsByClassName("App")[0];
        appClass.classList.add("App-active");
        landingPage.classList.add("hide");
        navbar.classList.add("shown");
        content.classList.add("shown");

        // Play the audios
        initClickSound();
        toggleAudio();

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
                playSound('/sound/click.mp3', 0.8);
            }
        }
        document.addEventListener('mousedown', downListener);
        document.addEventListener('mousemove', moveListener);
        document.addEventListener('mouseup', upListener);
    }

    // Play sound when the button is clicked
    const playSound = (mp3, volume) => {
        let audio = new Audio(mp3);
        // Audio settings (lowering volume)
        audio.volume = volume;
        audio.play();
    }

    // Play bg.mp3 and manage a toggle button for play and pause
    let [audioStatus, setAudioStatus] = useState('paused');
    const toggleAudio = () => {
        let audioController = document.getElementsByTagName("audio")[0];
        if (audioStatus === 'paused') {
            audioStatus = 'playing';
            audioController.play();
            audioController.volume = 0.2;
        } else {
            audioStatus = 'paused';
            audioController.pause();
        }
        setAudioStatus(audioStatus);
    }

    return (
        <Html>
            <div className="landingPage">
                <button onClick={hideLandingPage} className="landingPage_button">&nbsp;ENTER</button>
            </div>
            <div className="sound-player-container">
                <img onClick={toggleAudio} src={`/icons/bg-${audioStatus}.gif`} alt='sound-icon' className="sound-icon"></img>
                <audio loop src="/sound/bg.mp3"></audio>
            </div>
        </Html>
    );
}

export default LandingPage;