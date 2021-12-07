import React, { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"; //Fiber React component
import { Html, useProgress, Stars } from "@react-three/drei"; //Drei component 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Import Context
import PlanetContext from './Context/PlanetContext';

//Import our Space Components
import "./App.css";
import Milkyway from './Components/Environment/Milkyway';
import Earth from './Components/Planets/Earth/Earth';
import Effects from './Components/Effects/Effects';

// Import UI components
import Navbar from './Components/Navbar/Navbar';


//Controls component that will be used in the scene to control the camera and the scene
extend({ OrbitControls })
const Controls = () => {
  //Configure camera and controls (see orbitControls docs for more info)
  const controls = useRef();
  const { camera, gl } = useThree();
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
    minDistance={10}
    maxDistance={300}
    autoRotate={true}
    autoRotateSpeed={0.2} />
}

/* Loader that hangs the scene while objects aren't ready */
const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: 'white' }}>{progress} % loaded</span>
    </Html>
  )
}

// Initialize the app
export default function App() {
  // Use and handle planets changes
  const [planet, setPlanet] = useState("Earth");
  const handleChangePlanet = (planetName) => {
    setPlanet(undefined);
    setPlanet(planetName);
  }

  return (
    <>
      <PlanetContext.Provider value={{ handleChangePlanet, planet }}>
        <Navbar />
        <div className="App">
          <Canvas mode="concurrent" performance={{ min: 0.5 }} gl={{ antialias: false }}>

            {/*Loading screen*/}
            <Suspense fallback={<Loader />}>
              {/* Objects */}
              <Milkyway />
              <Earth value={{ handleChangePlanet, planet }} />
              <Stars radius={100} depth={50} count={1250} factor={4} saturation={0} fade />
              <Effects />
            </Suspense>

            {/*Controls the scene*/}
            <Controls />
          </Canvas>
        </div>
      </PlanetContext.Provider >
    </>
  );
}
