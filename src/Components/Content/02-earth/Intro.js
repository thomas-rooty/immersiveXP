import React from 'react';
import "./Intro.css";

const Intro = (props) => {
    // Add event listeners to the li elements to toggle the class "active-project"
    const setActiveProject = (e) => {
        const activeProject = document.getElementsByClassName("active-project")[0];
        const project = e.target;
        if (activeProject) {
            activeProject.classList.remove("active-project");
        }
        project.classList.add("active-project");
    }

    return (
        <div className="intro">
            <div className='header-fadeOut'></div>
            <ul className='project-overview'>
                <li onClick={setActiveProject} className='active-project' >Project 1</li>
                <li onClick={setActiveProject} >Project 2</li>
                <li onClick={setActiveProject} >Project 3</li>
                <li onClick={setActiveProject} >Project 4</li>
            </ul>

            <div className='project-description'>
                <h1 className='project-description-title'>{props.value.planet}</h1>
                <p className='project-description-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <hr className='hr-project' />
            </div>
        </div>
    )
}

export default Intro;