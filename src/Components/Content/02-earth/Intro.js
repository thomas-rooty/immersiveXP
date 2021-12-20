import React from 'react';
import "./Intro.css";

const Intro = (props) => {
    // Add event listeners to the li elements to toggle the class "active-project"
    const setActiveAsset = (e) => {
        const activeProject = document.getElementsByClassName("active-project")[0];
        const project = e.target;
        if (activeProject) {
            activeProject.classList.remove("active-project");
        }
        project.classList.add("active-project");
    }

    // Projects texts
    let earth_project = () => {
        return (
            <p className='project-description-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        )
    }

    return (
        <div className="intro">
            <div className='header-fadeOut'></div>
            <ul className='project-overview'>
                <li onClick={setActiveAsset} className='active-project' >MOON</li>
                <li onClick={setActiveAsset} >INTERNATIONAL SPACE STATION</li>
            </ul>

            <div className='project-description'>
                <h1 className='project-description-title'>{props.value.planet}</h1>
                {props.value.planet === "earth" &&
                    earth_project()
                }
                <hr className='hr-project' />
            </div>
        </div>
    )
}

export default Intro;