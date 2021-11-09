import ReactDOM from 'react-dom'
import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader, extend, useFrame, useThree } from "@react-three/fiber"; //Fiber React component
import { Html, useProgress, Stars } from "@react-three/drei"; //Drei component 
import { EffectComposer, Bloom, Noise, Vignette, SMAA } from '@react-three/postprocessing' //Post-processing effects 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TextureLoader } from "three/src/loaders/TextureLoader";

import "./App.css";

//Edit the controls to make the Earth rotate
extend({ OrbitControls })
function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.18} autoRotate={true} autoRotateSpeed={0.1} enableZoom={false} />
}

//Make a loader
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

//Get textures from their types
const name = (type) => `earth_${type}.jpg`;

//Initialize the Earth
function Earth() {
  const [
    colorMap,
    displacementMap,
    normalMap
  ] = useLoader(TextureLoader, [
    name("Color"),
    name("Displacement"),
    name("Normal")
  ]);
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1.8, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.03}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
        />
      </mesh>
    </>
  );
}

//Initialize the Earth's clouds
function Clouds() {
  const [
    colorMap
  ] = useLoader(TextureLoader, [
    name("Clouds")
  ]);
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[2.6, 100, 100]} />
        <meshStandardMaterial
          map={colorMap}
        />
      </mesh>
    </>
  );
}

//Initialize the app
export default function App() {
  return (
    <div className="App">
      <Canvas>

        {/*Loading screen*/}
        <Suspense fallback={<Loader />}>
          <Earth />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

          {/*Post-processing effects*/}
          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={900} />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.3} />
            <SMAA />
          </EffectComposer>

        </Suspense>

        {/*Controls the scene*/}
        <Controls />

      </Canvas>
    </div>
  );
}
