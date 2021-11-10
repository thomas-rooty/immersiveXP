import ReactDOM from 'react-dom'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"; //Fiber React component
import { Html, useProgress, Stars } from "@react-three/drei"; //Drei component 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//Import our Components
import "./App.css";
import Earth from './Components/Planets/Earth/Earth';
import Effects from './Components/Effects/Effects';

//Controls component that will be used in the scene to control the camera and the scene
extend({ OrbitControls })
const Controls = () => {
  //Configure camera and controls (see orbitControls docs for more info)
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping enablePan={true} maxPolarAngle={2} minPolarAngle={0.8} dampingFactor={0.1} rotateSpeed={0.3} autoRotate={true} autoRotateSpeed={0.1} enableZoom={true} maxZoom={0.1} />
}

//Loader component that will be used to wait for the scene to load before rendering
const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

//Initialize the app
export default function App() {
  return (
    <div className="App">
      <Canvas mode="concurrent" performance={{ min: 0.5 }} gl={{ antialias: false }}>

        {/*Loading screen*/}
        <Suspense fallback={<Loader />}>
          <Earth />
          <Stars radius={100} depth={50} count={1250} factor={4} saturation={0} fade />
          <Effects />
        </Suspense>

        {/*Controls the scene*/}
        <Controls />
      </Canvas>
    </div>
  );
}
