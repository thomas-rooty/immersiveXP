import ReactDOM from 'react-dom'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"; //Fiber React component
import { Html, useProgress, Stars } from "@react-three/drei"; //Drei component 
import { EffectComposer, Bloom, Noise, Vignette, SMAA } from '@react-three/postprocessing' //Post-processing effects 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//Import our planets components
import "./App.css";
import Earth from './Components/Planets/Earth/Earth';
import EarthClouds from './Components/Planets/Earth/EarthClouds';

//Controls component that will be used in the scene to control the camera and the scene
extend({ OrbitControls })
const Controls = () => {
  //Configure camera and controls (see orbitControls docs for more info)
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping maxPolarAngle={2} minPolarAngle={0.8} dampingFactor={0.1} rotateSpeed={0.3} autoRotate={true} autoRotateSpeed={0.1} enableZoom={true} maxZoom={0.1} />
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
      <Canvas>

        {/*Loading screen*/}
        <Suspense fallback={<Loader />}>
          <Earth />
          <EarthClouds />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          {/*Post-processing effects*/}
          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={900} />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.3} />
            <SMAA />
          </EffectComposer>
          {/*End of Post-processing effects*/}
        </Suspense>

        {/*Controls the scene*/}
        <Controls />

      </Canvas>
    </div>
  );
}
