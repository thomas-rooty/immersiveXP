import { React, useState } from 'react';
import { Html } from "@react-three/drei"; //Fiber React component for the Planet's atmosphere
import "./LandingPage.css";

const LandingPage = () => {
    // Add click event listener to the button to hide the landing page
    const hideLandingPage = () => {
        const landingPage = document.getElementsByClassName("landingPage")[0];
        const landingPageButton = document.getElementsByClassName("landingPage_button")[0];
        const navbar = document.getElementsByClassName("navbar-container")[0];
        const content = document.getElementsByClassName("intro")[0];
        const appClass = document.getElementsByClassName("App")[0];
        appClass.classList.add("App-active");
        landingPage.classList.add("hide");
        navbar.classList.add("shown");
        content.classList.add("shown");

        landingPageButton.remove();

        setTimeout(() => {
            landingPage.remove();
        }, 4000);
    }

    return (
        <Html>
            <div className="landingPage">
                <button onClick={hideLandingPage} className="landingPage_button">&nbsp;ENTER</button>
            </div>
        </Html>
    );
}

export default LandingPage;