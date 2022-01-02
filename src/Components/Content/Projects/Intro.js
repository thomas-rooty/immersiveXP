import { React, useContext } from 'react';
import "./Intro.css";

// Import context
import PlanetContext from '../../../Context/PlanetContext';

const Intro = (props) => {
    const ContextProject = useContext(PlanetContext);
    // Add event listeners to the li elements to toggle the class "active-project"
    const SetActiveSection = (e) => {
        const activeProject = document.getElementsByClassName("active-project")[0];
        const project = e.target;
        // Set props.value.section to the current section
        let currentSection = project.innerText.toLowerCase();
        ContextProject.handleChangeProject(currentSection);
        if (activeProject) {
            activeProject.classList.remove("active-project");
        }
        project.classList.add("active-project");
    }

    // Projects texts
    const EarthProject = () => {
        return (
            <>
                <ul className='project-overview'>
                    <li onClick={SetActiveSection} className='active-project' >WHO</li>
                    <li onClick={SetActiveSection} >WHAT</li>
                    <li onClick={SetActiveSection} >WHERE</li>
                </ul>
                <div className='project-description'>
                    <h1 className='project-description-title'>{props.value.project}</h1>

                    {props.value.project === "who" &&
                        <p className='project-description-text'>
                            I'm Thomas, a young software development and 3D enthusiast, developing my skills through several
                            professional experiences during my internship and other personal projects.<br /><br />

                            Welcome to my <i>space</i>, I'll leave it up to you to discover this virtual wonder -</p>
                    }

                    {props.value.project === "what" &&
                        <p className='project-description-text'>
                            I'm Thomas, a young software development and 3D enthusiast, developing my skills through several
                            professional experiences during my internship and other personal projects.<br /><br />

                            Welcome to my <i>space</i>, I'll leave it up to you to discover this virtual wonder</p>
                    }

                    {props.value.project === "where" &&
                        <p className='project-description-text'>
                            I'm Thomas, a young software development and 3D enthusiast, developing my skills through several
                            professional experiences during my internship and other personal projects.<br /><br />

                            Welcome to my <i>space</i>, I'll leave it up to you to discover this virtual wonder</p>
                    }

                    <hr className='hr-project' />
                </div>
            </>
        )
    }

    return (
        <div className="intro">
            <div className='header-fadeOut'></div>
            {props.value.planet === "earth" &&
                EarthProject()
            }
        </div>
    )
}

export default Intro;