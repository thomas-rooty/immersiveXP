import {React, useContext} from 'react';
import "./Intro.css";
import LacxFilms from "./lacxfilms.png";
import LacxFilms2 from "./lacxfilms2.png";
import LacxFilms3 from "./lacxfilms3.png";
import Isoris from "./isoris.png";
import IsorisWeapons from "./IsorisWeapons.png";
import StreetTrial2 from "./StreetTrial2.png";
import StreetTrial3 from "./StreetTrial3.png";
import StreetTrial4 from "./StreetTrial4.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ArrowDown from "./arrow-down.svg";


// Import context
import PlanetContext from '../../../Context/PlanetContext';

const Intro = ({value}) => {
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
                <AnchorLink href="#projects">
                    <img className="arrow-down" src={ArrowDown} alt="arrow down"/>
                </AnchorLink>
                <ul className='project-overview'>
                    <li onClick={SetActiveSection} className='active-project'>WHO AM I</li>
                    <li onClick={SetActiveSection}>LAC X FILMS</li>
                    <li onClick={SetActiveSection}>DRAGONICA</li>
                    <li onClick={SetActiveSection}>STREET TRIAL</li>
                </ul>
                <div className='project-description'>
                    <section id="projects">
                        <h1 className='project-description-title'>{value.project}</h1>

                        {value.project === "who am i" &&
                            <p className='project-description-text'>
                                I'm Thomas, a young software development and 3D enthusiast, developing my skills through
                                several
                                professional experiences during my internship and other personal projects.<br/><br/>

                                Welcome to my <i>space</i>, I'll leave it up to you to discover this virtual wonder -
                            </p>
                        }

                        {value.project === "lac x films" &&
                            <>
                                <p className='project-description-text'>
                                    Homepage of the <i>LAC X FILMS</i> project, a film production company directed by
                                    Kevin
                                    Lacroix,
                                    based in the city of Paris.
                                </p>
                                <a href="https://lacxfilms.tcaron.fr" target="_blank" rel="noopener noreferrer">
                                    <img src={LacxFilms} alt='lacxfilms' className='project-description-img'/>
                                    <img src={LacxFilms2} alt='lacxfilms' className='project-description-img'/>
                                    <img src={LacxFilms3} alt='lacxfilms' className='project-description-img'/>
                                </a>
                            </>
                        }

                        {value.project === "dragonica" &&
                            <>
                                <p className='project-description-text'>
                                    Dragonica is a full sidescrolling MMORPG, free to play, still alive thanks to a
                                    small
                                    French team
                                    that I've used to work with since the beginning of 2015 till 2020.
                                </p>
                                <a href="https://playdragonica.eu" target="_blank" rel="noopener noreferrer">
                                    <img src={Isoris} alt='isoris' className='project-description-img'/>
                                    <img src={IsorisWeapons} alt='isoris' className='project-description-img'/>
                                </a>
                            </>
                        }

                        {value.project === "street trial" &&
                            <>
                                <p className='project-description-text'>
                                    Besides being a full stack developer, I also enjoy riding my bike, it's a big part
                                    of my
                                    life and I'm always looking for new challenges. Street Trial is a discipline mixing
                                    trial
                                    (parkour on a bicycle), and street BMX.
                                </p>
                                <a href="https://instagram.com/tho_macaron" target="_blank" rel="noopener noreferrer">
                                    <img src={StreetTrial2} alt='street trial' className='project-description-img'/>
                                    <img src={StreetTrial3} alt='street trial' className='project-description-img'/>
                                    <img src={StreetTrial4} alt='street trial' className='project-description-img'/>
                                </a>
                            </>
                        }
                    </section>
                    <hr className='hr-project'/>
                </div>
            </>
        )
    }

    return (
        <div className="intro">
            <div className='header-fadeOut'/>
            {value.planet === "earth" &&
                EarthProject()
            }
        </div>
    )
}

export default Intro;