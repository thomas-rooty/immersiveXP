import React, { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Earth's atmosphere
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Get textures from their types
const name = (type) => `./moon/moon_${type}.jpg`;

//Initialize the Moon
const Moon = () => {
  const Moon = React.useRef();

  const [
    colorMap,
    displacementMap
  ] = useLoader(TextureLoader, [
    name("Color"),
    name("Displacement")
  ]);

  useFrame(({ clock }) => {
    const ySpeed = (clock.getElapsedTime()) / 25;
    const xSpeed = (clock.getElapsedTime()) / 100;
    Moon.current.rotation.x = xSpeed;
    Moon.current.rotation.y = ySpeed;
  });

  return (
    <>
      <mesh ref={Moon} position={[7, 1.5, 0]}>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[0.45, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.05}
          map={colorMap}
          displacementMap={displacementMap}
        />
      </mesh>
    </>
  );
}

export default Moon;