import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { PerspectiveCamera, Environment, PointerLockControls, OrbitControls, Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return <primitive object={gltf.scene} scale={0.1} />;
};

export default function App() {
  /* 
  Initiallement dans le return, on l'enlève car on veut que tout fonctionne selon le PointerLockControls.
  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> 
  */
  return (
    <div className="App">
      <Canvas>
        <PointerLockControls />
        <Suspense fallback={<Loader />}>
          <mesh onClick={() => console.log("clicked")}>
            <Model />
          </mesh>
          <Environment preset="dawn" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
