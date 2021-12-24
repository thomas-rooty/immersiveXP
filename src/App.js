import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"; //Fiber React component
import { Html, Stars } from "@react-three/drei"; //Drei component 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Import Context
import PlanetContext from './Context/PlanetContext';

//Import our Space Components
import "./App.css";
import LoadingText from './loading.gif';
import Milkyway from './Components/Environment/Milkyway';
import Planet from './Components/Planets/Planet/Planet';
import Effects from './Components/Effects/Effects';

// Import UI components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';

// Import content
import Intro from './Components/Content/Projects/Intro';

//Controls component that will be used in the scene to control the camera and the scene
extend({ OrbitControls })
const Controls = () => {
  //Configure camera and controls (see orbitControls docs for more info)
  const controls = useRef();
  const { camera, gl } = useThree();
  //Set the camera position and the camera target
  camera.position.set(-2, 0, 4);
  useFrame(() => controls.current.update());
  return <orbitControls
    ref={controls}
    args={[camera, gl.domElement]}
    enableDamping
    enablePan={false}
    maxPolarAngle={2}
    minPolarAngle={0.8}
    dampingFactor={0.1}
    rotateSpeed={0.6}
    enableZoom={true}
    minDistance={4}
    maxDistance={300}
    autoRotate={false}
    autoRotateSpeed={0.05} />
}

/* Loader that hangs the scene while objects aren't ready */
const LoadingPage = () => {
  return (
    <Html>
      <div className="loading">
        <img className="loading-img" src={LoadingText} alt="Loading" />
      </div>
    </Html>
  )
}

/* Function that set the button with id planetName the class "navbar-item:active"*/
const setActivePlanet = (planetName) => {
  var items = document.getElementsByClassName("navbar-item");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("navbar-active-item");
  }
  document.getElementById(planetName).classList.add("navbar-active-item");
}

// Initialize the app
export default function App() {
  // Use and handle planets changes
  const [planet, setPlanet] = useState("earth");
  const handleChangePlanet = (planetName) => {
    setPlanet(undefined);
    setPlanet(planetName);
    setActivePlanet(planetName);
  }

  //Use and handle section changes
  const [project, setProject] = useState("who");
  const handleChangeProject = (projectName) => {
    setProject(undefined);
    setProject(projectName);
  }

  return (
    <>
      <PlanetContext.Provider value={{ handleChangeProject, project, handleChangePlanet, planet }}>
        <Navbar />
        <div className="App">
          <Canvas mode="concurrent" gl={{ antialias: false }}>

            {/*Loading screen*/}
            <Suspense fallback={<LoadingPage />}>
              <LandingPage />
              <Milkyway />
              <Planet value={{ handleChangePlanet, planet }} />
              <Stars radius={100} depth={50} count={1250} factor={4} saturation={0} fade />
              <Effects />
            </Suspense>

            {/*Controls the scene*/}
            <Controls />
          </Canvas>
        </div>
        {/* Content */}
        <Intro value={{ handleChangeProject, project, planet }} />
      </PlanetContext.Provider >
    </>
  );
}
